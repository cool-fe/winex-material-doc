# 业务组件开发

功能比较确定，例如患者 banner 等，项目中只需要引入对应的 npm 包即可，项目不关心也无法修改组件内部的代码，只能通过组件定义的 props 控制。

## 创建组件

在域物料开发项目中，进入`components`目录，在当前目录下创建业务组件文件夹, 目前我们可以通过`winex init`的方式进行初始化业务组件目录结构，如下：

```
cd components
winex init --name my-component
yarn install
```

通过`winex init`指令执行后，按照下图进行对应项的选择，最终选择`@winex-comp/common-component`为业务组件的开发模板：

![image.png](/winex-material-doc/component.png)

生成目录结构如下：

```json
├── my-component
    ├── CHANGELOG.md      // 日志
    ├── README.md         // 组件描述文档
    ├── index.js          // 组件入口文件
    ├── lib               // 构建产物目录
    ├── package.json      // package.json文件
    ├── src               // 组件目录
    │   └── ExampleComp.vue    // 组件开发
```

业务组件的开发目录结构生成后，还需修改`package.json`中一些配置信息，如下的这些字段和配置都是`必须`进行修改和增加的部分：

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

完成最基础的这些设置后，就可以开始你的业务组件开发。

<!--
## 组件命名

关于组件的命名

- 业务组件的包名：即 package.json 中的 name 名称，按照`@winex-comp/[域名]-[name]`格式进行命名。`eg:@winex-comps/encounter-tag`
- 业务组件文件夹：按照`短横线分隔 (kebab-case)`进行名。`eg: my-tag` -->

## 组件发布

在业务组件开发完成后，进入域物料项目根目录下。首先将本次开发修改的内容提交。然后执行`yarn run release`进行物料的编译和发布：

```shell
yarn run release
```

在执行`yarn run release`的时候，会将我们我们的业务组件进行打包，然后将有修改的业务组件进行发布到我们的私服上, 然后生成并上传物料数据。
