# nextcloud配置smtp邮件服务器


### 问题描述

smtp服务器已配置ssl，支持465端口并且在其它软件中均可正常配置。但是使用nextcloud-aio-nextcloud docker，在Nextcloud中配置自建smtp服务器时总是遇到报错：

```
“A problem occurred while sending the email. Please revise your settings. (Error: Email could not be sent. Check your mail server log)”
```

### 解决方案

修改`config.php`文件，首先在nextcloud-aio-nextcloud docker中定位数据卷的位置，如`/var/lib/docker/volumes/nextcloud_aio_nextcloud/_data`，在这个文件夹下的`config/config.php`即为配置文件。

在`config/config.php`中加入一行以下内容，即可解决问题：

```
'mail_smtpstreamoptions' =>
  array (
    'ssl' =>
    array (
      'allow_self_signed' => true,
      'verify_peer' => false,
      'verify_peer_name' => false,
    ),
  ),
```


