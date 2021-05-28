# 物料数据协议

WINEX 物料数据协议是一套通用的描述物料元数据的标准格式，协议约定了物料的类型、名称、物料数据、存储位置等信息，通过这套数据协议，用户可以将自己开发的物料接入 winex-cli 方便使用。
​

## 物料数据结构

物料在开发完成时，每次发布之前需要重新生成该仓库中物料信息，在根目录 material.json 中，关键数据结构有：

```javascript
[
  {
    // 空间名称
    name: "winex-material-common",
    // 标题
    title: "公共仓库",
    //（必选）描述
    description: "包含了公共物料",
    // 组件信息列表
    components:[]
    // 区块模板信息列表
    blocks:[]
    // 页面模板信息列表
    pages:[]
    // 项目模板信息列表
    scaffolds:[]
  }
]
```

## ComponentMetaData 组件元数据

```javascript
{
  // （必选）英文名称
  name: "winex-component-ui",
  // （必选）中文名称
  title: "基础UI组件",
  //（必选）描述
  description: "封装了基础UI功能",
  //（必选）预览地址
  homepage: "xxx",
  //（必选）分类
  category: "component",
  // (必选) 所属域
  domain: "common",
  //（必选）源码地址
  repository: "http://tfs2018-web.winning.com.cn:8080/tfs/WINNING-6.0/W.in-MVP/_git/winning-webcomponents-ui",
  //（必选）描述安装方式
  source: {
    //（必选）安装方式 npm
    type: "npm",
    //（必选）npm package name
    npm: "@winexmaterial/components/ui",
    //（必选）版本号
    version: "1.0.4",
    //（必选）npm 源
    registry: "http://172.16.9.242:8081/repository/npm-group"
  },
  // （必选）依赖关系
  dependencies: {
    vue: "^2.x"
  },
  // （必选）发布时间
  publishTime: "",
  // （必选）最后更新时间
  updateTime: ""
}
```

## BlockMetaData 区块元数据

```javascript
{
  // （必选）英文名称
  name: "winex-blocks-xxx",
  // （必选）中文名称
  title: "xxx",
  //（必选）描述
  description: "封装了区块代码",
  //（必选）预览地址
  homepage: "xxx",
  //（必选）分类
  category: "block",
  // (必选) 所属域
  domain: "encounter",
  //（必选）源码地址
  repository: "git:xxx",
  //（必选）描述安装方式
  source: {
    //（必选）安装方式 npm
    type: "npm",
    //（必选）npm package name
    npm: "@winexmaterial/blocks/encounter-xxx",
    //（必选）版本号
    version: "1.0.4",
    //（必选）npm 源
    registry: "http://172.16.9.242:8081/repository/npm-group"
  },
  // （必选）依赖关系
  dependencies: {
    vue: "^2.x"
  },
    // （必选）截图
  screenshot: "minio地址",
  // （可选）多张截图
  screenshots: [
    "minio地址"
  ],
  // （必选）发布时间
  publishTime: "xxx",
  // （必选）最后更新时间
  updateTime: "xxx"
}
```

## PageMetaData 页面元数据

```javascript
{
  // （必选）英文名称
  name: "winex-pages-xxx",
  // （必选）中文名称
  title: "xxx",
  //（必选）描述
  description: "封装了页面代码",
  //（必选）预览地址
  homepage: "xxx",
  //（必选）分类
  category: "page",
  // (必选) 所属域
  domain: "common",
  //（必选）源码地址
  repository: "git:xxx",
  //（必选）描述安装方式
  source: {
    //（必选）安装方式 npm
    type: "npm",
    //（必选）npm package name
    npm: "@winexmaterial/pages/admin-xxx",
    //（必选）版本号
    version: "1.0.0",
    //（必选）npm 源
    registry: "http://172.16.9.242:8081/repository/npm-group"
  },
  // （必选）依赖关系
  dependencies: {
    vue: "^2.x"
  },
    // （必选）截图
  screenshot: "minio地址",
  // （可选）多张截图
  screenshots: [
    "minio地址"
  ],
  // （必选）发布时间
  publishTime: "xxx",
  // （必选）最后更新时间
  updateTime: "xxx"
}
```

## ScaffoldMetaData 项目模板元数据

```javascript
{
  // （必选）英文名称
  name: "winex-project-xxx",
  // （必选）中文名称
  title: "xxx",
  //（必选）描述
  description: "封装了项目代码",
  //（必选）预览地址
  homepage: "xxx",
  //（必选）分类
  category: "app_main", // app_main主应用 app_micro微应用 app_indep独立应用
  // (必选) 所属域
  domain: "common",
  //（必选）源码地址
  repository: "git:xxx",
  //（必选）描述安装方式
  source: {
    //（必选）安装方式 npm
    type: "npm",
    //（必选）npm package name
    npm: "@winexmaterial/project/app-main-outpatient",
    //（必选）版本号
    version: "1.0.0",
    //（必选）npm 源
    registry: "http://172.16.9.242:8081/repository/npm-group"
  },
  // （必选）依赖关系
  dependencies: {
    vue: "^2.x"
  },
    // （必选）截图
  screenshot: "minio地址",
  // （可选）多张截图
  screenshots: [
    "minio地址"
  ],
  // （必选）发布时间
  publishTime: "xxx",
  // （必选）最后更新时间
  updateTime: "xxx"
}
```
