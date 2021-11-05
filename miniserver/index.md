# Miniserve, an elegant file server


#### Install

You can find it at here: https://github.com/svenstaro/miniserve/releases

#### Usage

```bash
miniserve --help
miniserve 0.4.1
Sven-Hendrik Haase <svenstaro@gmail.com>, Boastful Squirrel <boastful.squirrel@gmail.com>
For when you really just want to serve some files over HTTP right now!

USAGE:
    miniserve [FLAGS] [OPTIONS] [--] [PATH]

FLAGS:
    -u, --upload-files       Enable file uploading
    -h, --help               Prints help information
    -P, --no-symlinks        Do not follow symbolic links
    -o, --overwrite-files    Enable overriding existing files during file upload
        --random-route       Generate a random 6-hexdigit route
    -V, --version            Prints version information
    -v, --verbose            Be verbose, includes emitting access logs

OPTIONS:
    -a, --auth <auth>                    Set authentication (username:password)
    -c, --color-scheme <color_scheme>    Default color scheme [default: Squirrel]  [possible values:
                                         Archlinux, Zenburn, Monokai, Squirrel]
    -i, --if <interfaces>...             Interface to listen on
    -p, --port <port>                    Port to use [default: 8080]

ARGS:
    <PATH>    Which path to serve
```

**Serve single folder**

```bash
miniserve share/ -u -o
```

**Serve single file**

```bash
miniserve file
```

**Start user verification**

```bash
miniserve --auth joe:123 some_dir
```


