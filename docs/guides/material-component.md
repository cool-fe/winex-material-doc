# 业务组件开发

功能比较确定，例如患者 banner 等，项目中只需要引入对应的 npm 包即可，项目不关心也无法修改组件内部的代码，只能通过组件定义的 props 控制。

## 创建组件

在域物料开发项目中，进入`components`目录，通过[`winex init`](https://cool-fe.github.io/docs-winex-cli/guide/init.html)基于[@winex-scaf/common-component](http://172.16.6.214/webmaterials-common/scaffolds/component/)初始化业务组件的一个标准目录：

```
winex init --name tag --template @winex-scaf/common-component
```

项目目录结构：

```json
├── tag
    ├── CHANGELOG.md      // 日志
    ├── README.md         // 组件描述文档
    ├── index.js          // 组件入口文件
    ├── index.scss        // 组件样式文件
    ├── lib               // 构建产物目录
    ├── package.json      // package.json文件
    ├── src               // 组件目录
    │   └── ExampleComp.vue    // 组件开发
```

### 配置

初始化项目目录后，还需修改`package.json`中的一些内容，增加或修改如下`必须`的字段：

```json
{
  "name": "@winex-comp/[域名]-[组件名]", // 组件的名称
  "version": "1.0.0", // 版本
  "description": "这是一个示例组件", // 组件描述
  "main": "./lib/index.js",
  "repository": "",
  // files 此处需要自己添加
  "files": ["lib"],
  // scripts 此处需要自己添加
  "scripts": {
    "version": "winex fire build" // 此处脚本命令用version，打包时会走lerna的钩子
  },
  "dependencies": {
    "@winfe/winex-cli": "^1.1.0"
  },
  // componentConfig 此处需要自己添加
  "componentConfig": {
    "name": "@winex-comp/[域名]-[组件名]", // name是组件名称
    "title": "示例组件", // 组件的title
    "category": "component", // 类型：component组件
    "domain": "encounter" // 所属域：common、finance、clinical、execution、person、encouter、record、knowledge、material
  }
}
```

::: warning
**完成必选设置后，就可以进行业务组件开发**
:::

## 组件开发调试

关于组件的本地开发调试，`@winfe/winex-cli`提供了`winex fire start`命令可以进行本地开发调试。详细使用方式请参考[本地调试](/plugins/start.html)

## 组件入口

组件入口文件为`index.js`文件：

```javascript
import ExampleComponent from "./src/ExampleComponent.vue";
import "./index.scss";

ExampleComponent.install = function(Vue) {
  Vue.component(ExampleComponent.name, ExampleComponent);
};

export default ExampleComponent;
```

## 样式文件

默认样式文件可以在`index.scss`，根据组件开发需求可以调整为 `index.css` 或 `index.less`,默认配置仅支持`css`和`scss`。

## 编写文档

文档在当前组件的`README.md`文件下进行编写，基于`vuepress`的`markdown`语法即可。详细文档要求请参考[物料文档](/guides/material-doc.html)

## 组件工程配置

目前默认组件的打包是通过`@winfe/winex-cli`提供的`winex fire build`进行打包，其主要是基于`webpack`之上构建的 CLI 服务，主要包含了：

- 提供了 build 命令进行业务组件打包
- 处理静态资源

### 额外配置

如果需要进行额外的`webpack`工作配置，可以在当前目录下新建`winex.config.js`，在导出的对象中的`configureWebpack`或者`chainWebpack`中进行编写：

```javascript
module.exports = {
  //...
  configureWebpack: (config) => {
    // config是客户端的webpack配置，可以直接进行修改
  },
  chainWebpack: (config) => {
    // config 是webpack-chain的一个实例，通过webpack-chain的方式修改配置
  },

  //...
};
```

### 打包 umd 文件

通过构建组件将业务组件以 UMD 模块方式打包:

```json
{
  "path": path.resolve(process.cwd(), "./lib/"),
  "filename": "index.js",
  "chunkFilename": "[id].js",
  "libraryTarget": "umd"
}
```

### 公共依赖排除

目前主要针对`Vue`和`element-ui`进行了依赖排除：

```javascript
exports.externals = {
  vue: {
    root: "Vue",
    commonjs: "vue",
    commonjs2: "vue",
    amd: "vue",
  },
  "element-ui": {
    root: "element-ui",
    commonjs: "element-ui",
    commonjs2: "element-ui",
    amd: "element-ui",
  },
};
```
