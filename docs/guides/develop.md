# 快速物料开发 1.0

## 安装工具（暂时不推荐使用）

首先推荐通过脚手架的方式去生成物料开发模板，全局安装`fire-cli`:

```javascript
npm i @winfe/fire-cli -g
or
yarn add @winfe/fire-cli -g
```

## 初始化物料模板

#### 修改 package.json

通过从`TFS`上`develop`分支拉取代码。

```git
git clone http://tfs2018-web.winning.com.cn:8080/tfs/WINNING-6.0/W.in-MVP/_git/winning-webmaterials-common
```

拉取后，您所需要做的是修改项目根目录下的`package.json`文件，如下：

```git
{
  "name": "winex-webmaterial-[name]", // name修改成您的域名称：common、finance、clinical、execution、person、encouter、record、knowledge、material
  "version": "1.0.0", // 版本信息
  "description": "example物料仓库", // 关于物料仓库的描述
  "scripts": {
    // ......
  },
  "repository": {
    // ......
  },
  "husky": {
    // ......
  },
  "config": {
    // ......
  },
  "lint-staged": {
    // ......
  },
  "devDependencies": {
    // ......
  },
  "dependencies": {
    // ......
  },
  "materialConfig": {
    "key": "common", // 您的域名：common、finance、clinical、execution、person、encouter、record、knowledge、material
    "title": "公共仓库", // 中文域名：公共仓库、费用域、临床域、执行域、患者域、就诊域、记录域、知识域、物品域
    "registry": "http://172.16.9.242:8081/repository/npm-group",
    "unpkgHost": "http://172.16.6.51:9000/minio/winex"
  }
}

```

**注意：上面**`**materialConfig**`**中的**`**key**`**和**`**title**`**一定需要分别如下对应**：

| 标题描述（title） | 域（key） |
| ----------------- | --------- |
| 公共仓库          | common    |
| 费用域            | finance   |
| 临床域            | clinical  |
| 执行域            | execution |
| 患者域            | person    |
| 就诊域            | encounter |
| 记录域            | record    |
| 知识域            | knowledge |
| 物品域            | material  |

## 业务组件开发

### 创建组件

进入`component` 目录下创建组件文件夹：

```basic
$ cd components
$ mkdir wn-title && cd wn-title
$ npm init -y
$ touch index.js README.md
$ mkdir lib src
```

生成的组件目录如下：

```json
├── wn-title
    ├── README.md         // 组件描述文档
    ├── index.js          // 组件入口文件
    ├── lib               // 构建产物目录
    ├── package.json      // package.json文件
    ├── src               // 组件目录
    │   └── wn-pic.vue    // 组件开发
```

修改初始化后的`package.json`如下，至少保留以下这些字段和依赖。然后`npm install` 安装依赖。

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

### 组件编译

在当前组件的目录下执行`npm run build`，会将代码打包至`lib`文件夹下。
​

### 组件发布

在组件编译好后，修改版本号，切换到私有源，然后执行`npm publish`。
​

### 组件文档（目前这样实现）

组件文档目前还未确定具体实现方式，目前使用`vuepress`的方式，在你打包后。执行`npm run docs:dev`指令，会将`component`下 所有组件`lib`中组件入口引入。
如果组件发生修改，需要在组件目录下重新执行`npm run build`, 这样文档上才会更新。
​

关于在`vuepress`中如何编写`md`文档：

- 在`views` 文件夹下创建`md`文档
- 在`docs/.vuepress/config.js`中的`sidebar`中按照示例把上一步创建的`md`文档名称写入`children`字段，这时侧边栏会更新
- 在`docs/.vuepress/components`中创建的组件会全局注册，你可以将组件直接引入到刚才的`md`文档中。

​

## 项目模板开发

### 创建模板

首先在`scaffold`目录下创建项目模板文件夹`eg: wn-vue2-template`，将项目模板复制到文件夹下。
进入到文件夹中，安装依赖并开始开发：

```json
cd wn-vue2-template
npm install
npm run start
```

### 发布模板

修改版本号后，在当前模板目录下，切换到私有源，然后执行`npm publish`进行发布。
​

## 物料数据

### 物料数据生成

完成物料集下所有物料的开发和发布之后，需要生成这个物料集合的物料数据，**请确保所有物料都已发布。**
在物料仓库根目录下执行`npm run generate`即可。物料信息最后会生成到`build/material.json` 中。
​

### 物料数据上传

物料信息生成完毕后，执行`npm run upload:minio` 将物料信息上传至`minio`。
​

​

## 物料命名规范

### 业务组件命名 ​

`@winexmaterial-components/wn-[组件名称]`
​

### 项目模板命名

`@winexmaterial-components/wn-[模板名称]-template`
