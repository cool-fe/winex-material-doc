# 物料的使用

在完成物料开发和发布后，可以通过不同的方式去使用我们的物料。

当然，优先欢迎使用 winex-cli 使用物料，请参考[脚手架使用模板](https://cool-fe.github.io/docs-winex-cli/guide/add.html)。

## 业务组件的使用

使用 winex-cli 脚手架 add 命令进行使用业务组件：

```
winex add --plugin components-name
```

也可以使用 npm 进行安装使用：

```
npm install components-name --registry=http://172.16.9.242:8081/repository/npm-group
```

## 区块/页面模板的使用

使用 winex-cli 脚手架 add 命令进行使用区块模板：

```
winex add --plugin block-name
```

使用 winex-cli 脚手架 add 命令进行使用页面模板：

```
winex add --plugin page-name
```

## 项目模板的使用

使用 [winex-cli 脚手架 init](https://cool-fe.github.io/docs-winex-cli/guide/init.html)命令进行项目初始化：

```
winex init --name <app-name>
```
