# 物料使用

在完成物料开发和发布后，可以通过不同的方式去使用我们的物料。可以通过`npm install`的方式进行安装。

当然，在我们`winex`团队中，我们优先欢迎使用 `@winfe/winex-cli`。详细使用方式请参考[脚手架使用](https://cool-fe.github.io/docs-winex-cli/)。

### 添加业务组件

使用 `@winfe/winex-cli` 脚手架 `add` 指令添加业务组件：

```
winex add --plugin components-name
```

也可以使用 npm 进行安装使用：

```
npm install components-name --registry=http://172.16.9.242:8081/repository/npm-group
```

### 添加区块/模板

使用 `@winfe/winex-cli` 脚手架 `add` 命令添加区块/模板：

```
winex add --plugin block-name
```

使用 `@winfe/winex-cli` 脚手架 `add` 命令进行使用页面模板：

```
winex add --plugin page-name
```

### 初始化项目模板

使用 `@winfe/winex-cli`中[init](https://cool-fe.github.io/docs-winex-cli/guide/init.html)指令进行项目初始化：

```
winex init --name <app-name>
```
