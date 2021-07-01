# 业务组件开发

功能比较确定，例如患者 banner 等，项目中只需要引入对应的 npm 包即可，项目不关心也无法修改组件内部的代码，只能通过组件定义的 props 控制。

## 创建组件项目

在域物料开发项目中，进入`components`目录，通过[`winex init`](https://cool-fe.github.io/docs-winex-cli/guide/init.html)基于[业务组件项目模板](http://172.16.6.214/webmaterials-common/scaffolds/component/)初始化业务组件项目：

```
winex init --name tag --template @winex-scaf/common-component
```

项目目录结构：

```json
├── tag
    ├── CHANGELOG.md      // 日志
    ├── README.md         // 组件描述文档
    ├── index.js          // 组件入口文件
    ├── lib               // 构建产物目录
    ├── package.json      // package.json文件
    ├── src               // 组件目录
    │   └── ExampleComp.vue    // 组件开发
```
### 额外配置

想要发布业务组件还需修改`package.json`，增加或修改如下`必须`的字段：

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
    "version": "fire-scripts build" // 此处脚本命令用version，打包时会走lerna的钩子
  },
  "dependencies": {
    "@winfe/fire-scripts": "^1.0.7"
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
**确认完成必选设置后，就可以进行业务组件开发**
:::


## 组件入口

组件入口文件为`index.js`文件：

```javascript
import ExampleComponent from "./src/ExampleComponent.vue";

ExampleComponent.install = function(Vue) {
  Vue.component(ExampleComponent.name, ExampleComponent);
};

export default ExampleComponent;
```

## 组件工程配置

目前默认组件的打包是通过`@winfe/fire-scripts`进行打包，其主要是基于`webpack`之上构建的 CLI 服务，主要包含了：

- 提供了 build 命令进行业务组件打包

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

## 公共依赖排除

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
