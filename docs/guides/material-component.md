# 业务组件开发

## 创建组件

在物料模板项目拉取后，进入`component`目录，在当前目录下创建组件文件夹：

```basic
$ cd components
$ mkdir wn-title && cd wn-title
$ npm init -y
$ touch index.js README.md
$ mkdir lib src
```

生成如下目录结构：

```json
├── wn-title
    ├── README.md         // 组件描述文档
    ├── index.js          // 组件入口文件
    ├── lib               // 构建产物目录
    ├── package.json      // package.json文件
    ├── src               // 组件目录
    │   └── wn-pic.vue    // 组件开发
```

修改初始化修改`package.json`如下，至少保留以下这些字段和依赖。然后`npm install` 安装依赖。

```json
{
  "name": "@winexmaterial-components/[name]", // name是组件的名称
  "version": "1.0.0", // 版本
  "description": "这是一个示例组件", // 组件描述
  "main": "./lib/index.js",
  "repository": "",
  "files": ["lib"],
  "scripts": {
    "build": "fire-scripts build"
  },
  "dependencies": {
    "@winfe/fire-scripts": "^1.0.0"
  },
  "componentConfig": {
    "name": "@winexmaterial-components/[name]", // name是组件名称
    "title": "示例组件", // 组件的title
    "category": "component", // 类型：component组件
    "domain": "encounter" // 所属域：common、finance、clinical、execution、person、encouter、record、knowledge、material
  }
}
```

修改完成后就可以进行组件的开发。

## 组件编译

在当前组件的目录下执行`npm run build`，会将代码打包至`lib`文件夹下。

```
npm run build
```

## 组件发布

在组件编译好后，修改版本号，可以通过`nrm`切换到私有源，然后执行`npm publish`。私有源地址`http://172.16.9.242:8081/repository/npm-local/`。

```
npm i nrm -g
nrm add nexus-local http://172.16.9.242:8081/repository/npm-local/
nrm use nexus-local
npm login
npm publish
```

## 组件文档

组件文档通过`vuepress`搭建，在执行`npm run docs:dev`的时候，会引入每个组件下的`lib`的入口文件。

关于在`vuepress`中如何编写`md`文档：

- 在`views` 文件夹下创建`md`文档
- 在`docs/.vuepress/config.js`中的`sidebar`中按照示例把上一步创建的`md`文档名称写入`children`字段，这时侧边栏会更新
- 在`docs/.vuepress/components`中创建的组件会全局注册，你可以将组件直接引入到刚才的`md`文档中。
