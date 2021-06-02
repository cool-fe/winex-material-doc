# 物料数据生成

在完成所有的物料`开发和发布后`，需要生成这个物料的集合的物料数据，生成物料数据只需要在物料模板的根目录下执行:

```
npm run generate
```

如下：

![image.png](/winex-material-doc/generate-material.png)

该命令目前是通过`iceworks generate`生成结构化的数据然后存储到`build/material.json`中。

关于`material.json`中的物料数据协议，可以参考[物料数据协议](/guides/protocol.html)这一栏，除可选的字段外，其他字段都是必不可少的。物料数据生成后，请检查是否包含必选的字段。
