# 业务组件开发

功能比较确定，例如患者 banner 等，项目中只需要引入对应的 npm 包即可，项目不关心也无法修改组件内部的代码，只能通过组件定义的 props 控制。

## 创建组件

在域物料开发项目中，进入`components`目录，在当前目录下创建业务组件文件夹, 目前我们可以通过`winex init`的方式进行初始化业务组件目录结构，如下：

```
cd components
winex init --name my-component
yarn install
```

通过`winex init`指令执行后，按照下图进行对应项的选择，最终选择`@winex-comps/component`为业务组件的开发模板：

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
  "name": "@winex-comps/[name]", // name是组件的名称
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
    "name": "@winexmaterial-comps/[name]", // name是组件名称
    "title": "示例组件", // 组件的title
    "category": "component", // 类型：component组件
    "domain": "encounter" // 所属域：common、finance、clinical、execution、person、encouter、record、knowledge、material
  }
}
```

完成最基础的这些设置后，就可以开始你的业务组件开发。

## 组件命名

- 业务组件的包名：即 package.json 中的 name 名称，按照`@winex-comps/[name]`格式进行命名。`eg:@winex-comps/tag`
- 业务组件文件夹：按照`短横线分隔 (kebab-case)`进行名。`eg: my-tag`

## 组件发布

在业务组件开发完成后，进入域物料项目根目录下。首先将本次开发修改的内容提交至仓库。然后执行`yarn run release`进行物料的编译和发布：

```
yarn run release
```

在执行`yarn run release`的时候，会将我们我们的业务组件进行打包，然后将有修改的业务组件进行发布到我们的私服上, 然后生成并上传物料数据。

## 组件文档

当你开发完组件后，需要写一些关于组件的介绍和使用方式的文档，此时您需要进入到`docs`文件夹下进行操作。
组件文档通过`vuepress`搭建，首先看下`docs`下的目录结构：

```
├── README.md
├── package.json
├── src
│   ├── .vuepress
│   │  ├── components //该目录中的 Vue 组件将会被自动注册为全局组件
│   │  ├── public //  静态资源目录
│   │  ├── styles //  用于存放样式相关的文件
│   │  ├── config.js //配置文件的入口文件
│   │  ├── enhanceApp.js //客户端应用的增强
│   ├── ExampleComp.md
│   └── index.md

```

启动文档是在`docs`目录执行`yarn run dev`启动文档项目：

```
cd docs
yarn run dev
```

#### 创建文档

在`/docs/src/components`下新建一个你的`md`文档文件，可以在这个文件中编写你的组件介绍和使用方式，如：`ExampleComp.md`。

然后在`/docs/src/.vuepress/config.js`中, 将你的`md`文件名填写到`themeConfig.sidebar`中对应的`children`里面。

如：`ExampleComp`是业务组件文档，那就放在`title为业务组件`的`children`里面。

```javascript
module.exports = {
  // ...
  themeConfig: {
    // ...

    sidebar: {
        title: "使用教程",
        collapsable: false,
        children: ["/usage/getting-started"],
      },
      {
        title: "业务组件",
        collapsable: false,
        children: ["/components/ExampleComp"],
      },
      {
        title: "模板",
        collapsable: false,
        children: ["/scaffolds/Example"],
      },
  },
};
```

#### 引入组件

创建好文档后，我们要引入组件在文档中进行展示，假设现在有一个`ExampleComp`组件，我们需要在文档项目中引入。

那么在`/docs/src/.vuepress/enhanceApp.js`引入对应的组件。如下：

```javascript
//enhanceApp.js
import ExampleComp from "../../../components/ExampleComp";

export default ({ Vue }) => {
  Vue.use(ExampleComp);
};
```

#### 组件展示

`组件引用`后，此时`ExampleComp`这个组件可以在我们的可以直接在我们的`ExampleComp.md`文档中通过`<ExampleComp />`的方式使用。如下:

```md
// ExampleComp.md

# Example 组件

组件基本展示

<ExampleComp />
```

如果我们想根据基础的组件创建更多的组件示例，我们可以在`/docs/src/.vuepress/components`下创建组件。在该目录下创建的组件会被注册为全局组件，可以在文档中任意使用。如创建一个`ExampleCompDisable.vue`:

```javascript
// /doc/src/.vuepress/components/ExampleCompDisable.vue

<template>
  <container :code="code">
    <ExampleComp :disable="disable"></ExampleComp>
  </container>
</template>
<script>
export default {
  name: "ExampleComp",
  data() {
    return {
      disable: true,
      code: `<template>
    <ExampleComp :disable="disable"></ExampleComp>
</template>
<script>
export default {
  name: "ExampleComp",
  data() {
    return {
      disable:true,
    }
  }
};
<\/script>`,
    };
  },
};
</script>

```

然后在`ExampleComp.md`文档中直接使用该组件：

```md
// ExampleComp.md

# Example 组件

### 组件基本展示

<ExampleComp />

### 组件禁用展示

<ExampleCompDisable />
```

如上，可以看到我们用一个`container`组件进行包裹，这是一个内置的组件，提供了代码展示功能，如下：

![image.png](/winex-material-doc/demo.png)

#### 文档发布
