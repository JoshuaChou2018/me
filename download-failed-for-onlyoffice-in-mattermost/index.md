# Download failed for onlyoffice in mattermost


**Problem:**

After installing onlyoffice (docker) and onlyoffice-plugin in mattermost. It shows Download failed when open files in mattermost.

![image-20241219164424601](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/DIVdJf.image-20241219164424601.png)



**Reason:**

`JWT_HEADER` must be set to a value that is not `Authorization`, as stated here:

> - JWT Header: If JWT protection is enabled, it is necessary to specify a custom header name since the Mattermost security policy blocks external 'Authorization' Headers. This header should be specified in the ONLYOFFICE Docs signature settings as well (further information can be found [here](https://api.onlyoffice.com/editors/signature/)).
>
> Reference: https://github.com/ONLYOFFICE/onlyoffice-mattermost?tab=readme-ov-file#plugin-settings



**Solution:**

1. Modify docker-compose.yml for onlyoffice and add environment **JWT_HEADER**

```
version: '3'

services:
  onlyoffice:
    image: onlyoffice/documentserver
    ports:
      - "3080:80"
      - "3443:443"
    environment:
      JWT_HEADER: AuthorizationJWT
    restart: unless-stopped
    volumes:
      - ./data:/var/www/onlyoffice/Data
```

2. Restart

   ```
   docker compose up -d
   ```

3. Modify the setting in mattermost

![image-20241219164909482](https://cdn.jsdelivr.net/gh/JoshuaChou2018/oss@main/uPic/FN7E9u.image-20241219164909482.png)

