# 业务组件

功能比较确定，例如患者 banner 等，项目中只需要引入对应的 npm 包即可，项目不关心也无法修改组件内部的代码，只能通过组件定义的 props 控制。

## 创建组件

在域物料项目中，进入`components`目录，可以使用[`公共域(common)`](http://172.16.6.214/webmaterials-common/scaffolds/component/)的组件模版[`@winex-scaf/common-component`](http://172.16.6.214/webmaterials-common/scaffolds/component/)，通过[`winex init`](https://cool-fe.github.io/docs-winex-cli/guide/init.html)创建标准业务组件项目：

```
winex init --name <tag> --template <@winex-scaf/common-component>
```

项目目录结构：

```json
├── tag
    ├── CHANGELOG.md      // 日志
    ├── README.md         // 组件描述文档
    ├── index.js          // 组件入口文件
    |—— index.vue         // 自定义调试物料的入口组件
    ├── index.scss        // 组件样式文件
    |—— app.js            // 运行时增强app功能
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
  "files": ["lib","dist"],
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

## 开发调试

### 本地开发

@winfe/winex-cli 对完提供了一个开发环境依赖的命令`winex dev`。构建于 webpack 和 webpack-dev-server 之上。提供了开箱即用的vue项目[dev开发服务](/plugins/start.html)

#### 安装

```javascript
// global install
$ npm install -g @winfe/winex-cli
# OR
$ yarn global add @winfe/winex-cli
```

#### 组件根目录运行

```bash
winex dev
```

### 本地项目调试(link)

可以采用yarn link方式，首先在组件目录执行
```bash
yarn run link
```
然后就可以在需要调试的项目根目录执行
```bash
yarn link <package name>
```

### 远程项目调试

#### 本地开启dev watch build，开启dev打包，远程项目通过内网ip直接加载

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

## 组件样式

默认会在组件根目录生成样式文件`index.scss`，根据组件开发需求可以调整为 `css` 或 `scss`, 默认配置仅支持`css`和`scss`。
开发者只需要在该文件中编写样式文件或者引入其他的样式文件即可。

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
