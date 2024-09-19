# Build Sunshine on Ubuntu without monitor




```
    --------------------------
    ----  Prerequisites:  ----
    --------------------------

* The steps here only need to be performed once on your computer; after these are done than you only need to follow the
  steps under the "Procedure" section.

1). The user that will be connecting in via SSH must be in the 'tty' group on the system where Sunshine will be started.
    This is required because when we startup Xorg (the X-server we'll be using) than it will attempt to access the
    specific virtual TTY we give it to use.

    NOTE: At minimum you will have to log out and log back in after doing this as Linux won't assign the group to you
          in your current session.  Use the 'groups' command to verify that you see 'tty' before proceeding.

    sudo usermod -a -G [group-name] [user-name]

2). You need to run the command below to give the capability 'CAP_SYS_RAWIO+eip' to the /usr/lib/xorg/Xorg
    executable:

      setcap CAP_SYS_RAWIO+eip /usr/lib/xorg/Xorg

    Note that some more research needs to be done into the implications of doing this but if you don't
    provide that capability than the Xorg server session will fail with an error like the following:

      xf86EnableIOPorts: failed to set IOPL for I/O (Operation not permitted)

3). As root you will need to edit the /etc/X11/Xwrapper.conf file and change the 'allowed_users' setting to
    'anybody'.  While this will have some security implications they should be managable as this should only be giving
    the required permission to valid and logged in users to start an Xorg server session.  The default, which is
    typically 'console', requires that you log in with one of the virtual TTYs for the system and this is no different
    than physically logging into the system anyways (the exact thing we're trying to avoid).

    More information about this setting is available from "man Xorg.wrap".

    Reboot your system to make sure this takes effect before proceeding.

    As an aside it would be nice to submit a feature request to the devs working on the Xorg.wrap logic and ask them
    to provide a group option that gives something between "console" and "anybody".  Ideally a group you specify (or
    even one they define) whose users would then be allowed to start the Xorg server.  How to find out where/who to
    submit this to though....

4). You will need to create a custom Xorg configuration file that is suitable for use with a "headless" session (i.e.,
    one in which we don't really use the physically attached monitor for).  To do this follow the steps below:

      4a). SSH into the machine where you want to run Sunshine and then run the command below to generate a new
           Xorg configuration:

             sudo Xorg :1 -configure

           Expect to see the command show errors and say that it failed but a new file should appear at
           /root/xorg.conf.new containing the information we need.

           NOTE: The actual command found online was "sudo Xorg :0 -configure" but this almost always fails as any
                 system with a graphical desktop environment will already be running on display :0.  It is possible
                 to halt the display manager (for example with "/etc/init.d/lightdm stop" or "/etc/init.d/gdm stop"),
                 run the command, then restart the display manager but this is pretty invasive on the system.  The
                 result also seems to generate the same error (and a file with the same content) as the command
                 already given.

      4b). Change ownership of the file generated in step 4a and move it into your Linux user's home directory.  Note
           that the location you place the file doesn't matter; we just want to get this out of the root users
           directory.

      4c). Now open the moved 'xorg.conf.new' in your text editor of choice and make the following changes:

           A). If you have multiple GPUs than your ServerLayout section will look like the following:

                Section "ServerLayout"
                    Identifier     "X.org Configured"
                    Screen      0  "Screen0" 0 0
                    Screen      1  "Screen1" RightOf "Screen0"
                    Screen      2  "Screen2" RightOf "Screen1"
                    Screen      3  "Screen3" RightOf "Screen2"
                    InputDevice    "Mouse0" "CorePointer"
                    InputDevice    "Keyboard0" "CoreKeyboard"
                EndSection

               This will create a screen for each GPU and will attach them side-by-side.  In our case we need a single
               screen so remove all "Screen" lines except for the first (i.e., 'Screen      0  "Screen0" 0 0').  MAKE
               A NOTE OF THE "IDENTIFIER" IN THE 3RD COLUMN ("Screen0", "Screen1", etc) FOR ALL LINES YOU DELETE AS˚˚˚˚˚˚˚
               YOU WILL NEED THIS SHORTLY.

               Now you will need to look through the rest of document for blocks that start with 'Section "Screen"' and
               which have an "Identifier" line whose screen ID matches to one of the screen lines deleted earlier (so,
               "Screen1", "Screen2", etc).

                Section "Screen"              <-- Block to delete
                    Identifier "Screen1"      <-- Identifier line matching to a deleted "screen".
                    Device     "Card0"
                    Monitor    "Monitor0"
                    SubSection "Display"
                        Viewport   0 0
                        Depth     1
                    EndSubSection

               Note that the removal of these blocks is necessary or an error will occur when the configuration file
               is parsed.

               If you do not see any of this in your configuration file (i.e., you already have only a single screen)
               than move to the next step in this section.

           B). Now we need to look up the device in use for "Screen0".  Look through the file for a block like the
               following and find the value given on the "Device" line:

				   Section "Screen"
						Identifier "Screen0"
						Device     "Card0"     <-- This is the line we want
						Monitor    "Monitor0"
						SubSection "Display"
								Viewport   0 0
								Depth     1
				        ...

               Now locate a 'Section "Device"' block inside the file whose identifier line matches to the device
               identifier found earlier.  Below is an example "Device" section for the shown screen device above:

				Section "Device"
						### Available Driver options are:-
						### Values: <i>: integer, <f>: float, <bool>: "True"/"False",
						### <string>: "String", <freq>: "<f> Hz/kHz/MHz",
						### <percent>: "<f>%"
						### [arg]: arg optional
						#Option     "SWcursor"                  # [<bool>]
						#Option     "HWcursor"                  # [<bool>]
						#Option     "NoAccel"                   # [<bool>]
						#Option     "ShadowFB"                  # [<bool>]
						#Option     "VideoKey"                  # <i>
						#Option     "WrappedFB"                 # [<bool>]
						#Option     "GLXVBlank"                 # [<bool>]
						#Option     "ZaphodHeads"               # <str>
						#Option     "PageFlip"                  # [<bool>]
						#Option     "SwapLimit"                 # <i>
						#Option     "AsyncUTSDFS"               # [<bool>]
						#Option     "AccelMethod"               # <str>
						#Option     "DRI"                       # <i>
						Identifier  "Card0"             <------------------------------- Here is the identifier
						Driver      "nouveau"
						BusID       "PCI:1:0:0"
				EndSection

               At the bottom of this section (but still above the "EndSection" block) add the following configuration
               line:

                   Option "AllowEmptyInitialConfiguration"

               This handles the fact that we we're not connecting up in a way that we use the physical screen.

               NOTE: There was mention in the documenation that this was taken from that the
                     "AllowEmptyInitialConfiguration" option *may not* work with older nVidia cards.

           C). Again find the "Screen" section (just as at the start of step "B" above) and this time note down the
               monitor ID in use.  Next find a 'Section "Monitor"' block within the file that has the ID used by the
               screen block.  Based on the example "Screen" section shown in step "B" the monitor block would be the
               following:

				Section "Monitor"
						Identifier   "Monitor0"          <---- Identifying line for the monitor.
						VendorName   "Monitor Vendor"
						ModelName    "Monitor Model"
				EndSection

               At the end of this section (but again above the 'EndSection' line) add the following:

                 Option  "IgnoreEDID"

               NOTE: The documentation being followed did not elaborate on the necessity for this line or what it
                     did.

           D). [Optional?] A virtual display was also added to the "Screen" section for Screen0 that looks like
                           the following:

                SubSection "Display"
                        Depth   14

                        Virtual 1920 1080
                EndSubSection

               This virtual display was added after all other 'SubSection "Display"' blocks in the configuration file.
               It is unclear if this is required or not but it does not appear to hurt to add it.


    ----------------------
    ----  Procedure:  ----
    ----------------------

* The steps here need to be performed each time that you want to bring up your Sunshine server.  Note that the way
  the steps are given the entire setup (Xorg server, Sunshine, and desktop session) will be running under the context
  of your SSH session so once you exit the terminal all these things will exit.  You will need to leave your SSH
  session up while you're using your Sunshine server.  An alternative would be to use screen so that these processes
  stay up after you exit your terminal connection.

1). SSH into the machine where you want to bring up the Sunshine server.  Note that the directions that follow assume
    you are using a bash shell on login; if not you may have to change some of the commands to match what you are
    using.

2). Decide which virtual TTY (1-5) you want to tie the Xorg session to based on which are unused.  Note that TTYs
    1-5 should correspond to the virtual teletype consoles that you can drop into if you were to use the key sequence
    [Ctrl] + [Alt] + [F1] (or [F2], etc).  Once you decide which TTY number you want to use than perform the following
    chmod operation to add read access to the group on its file descriptor.

      sudo chmod g+r /dev/tty[N]   # Where [N] is the TTY number you picked.

      Example for TTY 2 -->  sudo chmod g+r /dev/tty2

    In testing the group on the /dev/tty[N] devices was only given write access and this resulted in the fault below
    which would kill the Xorg session startup:

      xf86OpenConsole: Cannot open virtual console 2 (Permission denied)

3). Run the following command (replacing all tokens of the form [xxx] with the specified replacements).  This will
    bring up an Xorg server and run it in the shell background.

      Xorg -noreset \
           +extension GLX \
           +extension RANDR \
           +extension RENDER \
           vt[TTY_NUMBER] \
           -logfile [LOG_PATH] \
           -config [CONFIG_PATH] \
           [DISPLAY_ID] > [STD_OUT_LOG]  2>&1 &

    Where,

      [TTY_NUMBER] - This should the TTY number you picked in step #2 (so 1, 2, etc).

      [LOG_PATH] - A path where you would like the Xorg session to write its log file.  This can hold useful
                   information for debugging server startup problems.  Note that if you don't want any logging output
                   than just remove the -logfile option and its value from the command.

      [CONFIG_PATH] - The absolute path to the Xorg configuration file you creaed from the prerequisite section.

      [DISPLAY_ID] - An unused display ID that the session can associate with.  Typically display IDs start with a
                     ':' character and are followed by a number.  In testing ":9" was used and seemed to work fine.

      [STD_OUT_LOG] - A log file that any standard out or standard error messages can be written to since the command
                      will be run in the background.

      Live example of a real command:

        sudo Xorg -noreset \
             +extension GLX \
             +extension RANDR \
             +extension RENDER \
             vt2 \
             -logfile /home/joshuachou/X_LOG.txt \
             -config /home/joshuachou/xorg.conf.new \
             :9 >> /home/joshuachou/std_stream.out 2>&1 &

4). At this point the X-server should be started and running in the background; use the 'jobs' command to verify
    that you see it up.  If the server crashed than review the content in the [LOG_PATH] and [STD_OUT_LOG] files to
    see what went wrong.

5). In your shell set the DISPLAY variable to the [DISPLAY_ID] you specified when bringing up the Xorg server.
    This will be a command that looks like the following:

      export DISPLAY=[DISPLAY_ID]

    Example assuming the [DISPLAY_ID] was set to ":9" ==>   export DISPLAY=":9"

6). Now navigate to the Sunshine Appimage and start it in the background.  This can be done as follows:

      cd sunshine/install/home
      ./sunshine.AppImage > ./sunshine.log 2>&1 &

7). Use the "jobs" command to verify that sunshine has started and is staying up.  If the process fails and exits than
    review the content in the "./sunshine.log" file to see what went wrong.

8). Now we should have the X-server running and Sunshine should be up; we are only missing the graphical desktop
    session.  This step depends on which desktop you are using and how you start the session associated with it.
    You can review any existing .xsession file from your home directory for basic clues but may have to look online
    for the proper session executable.

    For the Ubuntu-Mate desktop you can start this as follows:

      mate-session --display=[DISPLAY]

     Where,

       [DISPLAY] - The [DISPLAY_ID] you provided in step #3 when starting the Xorg server.

      screen -S sun
      sudo mate-session --display=:9

At this point you should be able to start and connect to your system using Moonlight.


    -------------------------------
    ----  Information Sources  ----
    -------------------------------

https://chadrick-kwag.medium.com/configuring-x-server-on-headless-server-a8b5c3bc7d9
https://unix.stackexchange.com/questions/503078/start-headless-x-server-as-non-root-user
https://www.howtogeek.com/428174/what-is-a-tty-on-linux-and-how-to-use-the-tty-command/
https://unix.stackexchange.com/questions/159124/xf86enableioports-failed-to-set-iopl-for-i-o-operation-not-permitted



```


