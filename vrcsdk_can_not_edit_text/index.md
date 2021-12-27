# Unable to interact with text boxes during Build & Publish for VRChat SDK3


**Problem Description**

Fors some unknow reason, the user is unable to click the text boxes or type anything into the publish window after running the Build & Publish. When the user clicks the main window in Unity, the cursor disappears and the user can not select the text boxes or anything else.

This problem happens under my settings, macOS Catalina 10.15.7, Unity 2019.4.31f1, VRChat SDK3.



**Solution**

The reason of this problem is that when you click the temp scene created by the SDK3, the cursor will be invisible and locked. 

Find this file: VRCSDK/Dependencies/VRChat/ Scripts/RuntimeWorldCreation.cs



**Find this content, marked function Start().**

```css
new void Start()
        {
            if (!Application.isEditor || !Application.isPlaying)
                return;

            base.Start();

            IsCurrentWorldInCommunityLabs = false;
            IsCurrentWorldUploaded = false;
            IsCurrentWorldPubliclyPublished = false;


            var desc = pipelineManager.GetComponent<VRC.SDKBase.VRC_SceneDescriptor>();
            desc.PositionPortraitCamera(imageCapture.shotCamera.transform);

            Application.runInBackground = true;
            UnityEngine.XR.XRSettings.enabled = false;

            uploadButton.onClick.AddListener(SetupUpload);

            openCommunityLabsDocsButton.onClick.AddListener(OpenCommunityLabsDocumentation);

            shouldUpdateImageToggle.onValueChanged.AddListener(ToggleUpdateImage);

            releasePublic.gameObject.SetActive(false);

            System.Action<string> onError = (err) => {
                VRC.Core.Logger.LogError("Could not authenticate - " + err, DebugLevel.Always);
                blueprintPanel.SetActive(false);
                errorPanel.SetActive(true);
            };
```



**Add 2 lines.**

```css
Cursor.visible=true;
Cursor.lockState=0;
```



**Now the final content will be**

```css
new void Start()
        {
            Cursor.visible=true;
            Cursor.lockState=0;
            if (!Application.isEditor || !Application.isPlaying)
                return;

            base.Start();

            IsCurrentWorldInCommunityLabs = false;
            IsCurrentWorldUploaded = false;
            IsCurrentWorldPubliclyPublished = false;


            var desc = pipelineManager.GetComponent<VRC.SDKBase.VRC_SceneDescriptor>();
            desc.PositionPortraitCamera(imageCapture.shotCamera.transform);

            Application.runInBackground = true;
            UnityEngine.XR.XRSettings.enabled = false;

            uploadButton.onClick.AddListener(SetupUpload);

            openCommunityLabsDocsButton.onClick.AddListener(OpenCommunityLabsDocumentation);

            shouldUpdateImageToggle.onValueChanged.AddListener(ToggleUpdateImage);

            releasePublic.gameObject.SetActive(false);

            System.Action<string> onError = (err) => {
                VRC.Core.Logger.LogError("Could not authenticate - " + err, DebugLevel.Always);
                blueprintPanel.SetActive(false);
                errorPanel.SetActive(true);
            };

            if (!ApiCredentials.Load())
                onError("Not logged in");
            else
                APIUser.InitialFetchCurrentUser(
                    delegate (ApiModelContainer<APIUser> c)
                    {
                        UserLoggedInCallback(c.Model as APIUser);
                    },
                    delegate (ApiModelContainer<APIUser> c)
                    {
                        onError(c.Error);
                    }
                );
```



**Now rebuild, you find you can edit the texts now.**

