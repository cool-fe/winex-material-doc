# 物料文档

开发完物料后，您需要将您的物料使用方法，以及使用案例以文档的方式进行表达。在每个物料文件夹下都有个一个`README.md`文件进行文档的编写。

关于文档的启动、发布等我们在`docs`目录下进行。进入到`docs`文件夹下，可以看到如下目录结构。

```json
├── package.json
├── src
│   ├── .vuepress
│   │  ├── components     //  该目录中的 Vue 组件将会被自动注册为全局组件
│   │  ├── dist           //  文档打包后产物
│   │  ├── plugins        //  文档插件
│   │  ├── public         //  静态资源目录
│   │  ├── styles         //  用于存放样式相关的文件
│   │  ├── config.js      //  配置文件的入口文件
│   │  ├── enhanceApp.js  //  客户端应用的增强
│   ├── components        //  编写组件文档（放弃）
│   └── scaffolds         //  编写模板文档（放弃）
│   └── usages            //  使用方式等介绍
│   └── README.md

```

## 启动文档

进入`docs`文件夹，通过`yarn run dev`启动文档：

```bash
cd docs
yarn run dev
```

## 文档创建

在您的每个业务组件和模板的文件夹下都创建一个 README.md 文件，用来编写您的文档。如：

```
cd scaffolds
cd vue2.x-template
touch README.md
```

启动文档后就可以看到其中对应的内容。

<!-- - 业务组件文档，请在`/docs/src/components`下新建`md`文档文件。
- 项目模板文档，请在`/docs/src/scaffolds`下新建`md`文档文件。
- 如果是关于文档的使用和介绍，请在`/docs/src/usages`下新建`md`文档文件。

::: warning
注意：物料名称为 md 文件名。如组件名叫做 ExampleComp，那么对应的 md 文件就叫做 ExampleComp.md
:::

创建文档后，需要在`/docs/src/.vuepress/config.js`文件中配置你的文档，这样才可以在页面中显示。业务组件和模板的文档分别放在对应`title`的`children`中。

如，分别创建了一个`ExampleComp.md`和`ExampleScaf.md`

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
        children: ["/scaffolds/ExampleScaf"],
      },
  },
};

````-->

# 编写文档

在`md`文件中，你可以根据`markdown`的语法书写物料的使用方式。如果要进行组件的功能和 UI 展示的话，需要将物料引入。

在文档中我们已经将每个业务组件全局注册，您可以直接在文档中使用组件，如可以在我们的`README.md`文档中直接使用该组件，如下：

```markdown
// README.md

# Example 组件

组件基本展示

<ExampleComp />
```

如果我们想基于`ExampleComp.vue`这个全局组件做更多的功能展示，我们可以在`/docs/src/.vuepress/components`下创建更多的组件，在该文件夹下创建的组件都会被全局注册。

如我们现在想展示`ExampleComp.vue`组件的禁用功能，那么我们在`/docs/src/.vuepress/components`下创建一个`ExampleCompDisable.vue`

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

然后这个`ExampleCompDisable.vue`组件，我们就可以在`README.md`中直接使用：

```markdown
// ExampleComp.md

# Example 组件

### 组件基本展示

此处进行组件功能的基本展示
<ExampleComp />

### 组件禁用展示

组件禁用功能展示
<ExampleCompDisable />
```

如上，你可能注意到了代码用 `container` 组件进行包裹，这是一个内置的组件，提供了代码展示功能，如下：

![image.png](/winex-material-doc/demo.png)

## 文档发布

文档写完后，您需要在`docs`目录下进行`build`操作：

```shell
yarn run build
```

当 build 完成后，将产物提交，然后合并到`master`分支，然后会走我们的发布流程。
