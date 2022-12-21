# pycharm增加运行时内存


1，Help -> Find Action -> (输入 “VM”) -> (点击)“Edit Custom VM options”

2，Pycharm会在编辑器中打开适当的vmoptions文件（pycharm.vmoptions或pycharm64.options）。

3，将**-Xms**属性的值修改为你想要的结果，然后保存

```
-Xmx750m 增加到 -Xmx1024m
```

4，重启Pycharm


