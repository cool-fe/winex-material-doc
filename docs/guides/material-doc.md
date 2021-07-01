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

通过`yarn run dev`启动文档：

```bash
yarn run dev
```

## 创建文档

在物料项目文件夹下创建一个 README.md 文件(文档服务基于[vuepress](https://vuepress.vuejs.org/zh/guide/))，可以在README.md文件写任何vuepress支持的语法。如：

```
cd scaffolds
cd vue2.x-template
touch README.md
```

启动文档后就可以看到其中对应的内容。

如果是关于文档的使用和介绍，请在`/docs/src/usages`下新建`md`文档文件。

::: warning
注意：物料名称为 md 文件名。如组件名叫做 ExampleComp，那么对应的 md 文件就叫做 ExampleComp.md
:::


## 编写文档

在`README.md`文件中，你可以根据`markdown`的语法书写物料的使用方式。如果要进行组件的功能和 UI 展示的话，需要将物料引入。

在文档中我们已经将每个业务组件全局注册，您可以直接在文档中使用组件，如在`README.md`文档中直接使用该组件：

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
````

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


## 静态资源

### 相对路径

所有的 Markdown 文件都会被 webpack 编译成 Vue 组件，因此你可以，并且**应该更倾向于**使用相对路径（Relative URLs）来引用所有的静态资源：

``` md
![An image](./image.png)
```

同样地，这在 `*.vue` 文件的模板中一样可以工作，图片将会被 `url-loader` 和 `file-loader` 处理，在运行生成静态文件的构建任务时，文件会被复制到正确的位置。

除此之外，你也使用 `~` 前缀来明确地指出这是一个 webpack 的模块请求，这将允许你通过 webpack 别名来引用文件或者 npm 的依赖：

``` md
![Image from alias](~@alias/image.png)
![Image from dependency](~some-dependency/image.png)
```

Webpack 的别名可以通过 `.vuepress/config.js` 中 [configureWebpack](../config/README.md#configurewebpack) 来配置，如：

``` js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}
```

### 公共文件

有时，你可能需要提供一个静态资源，但是它们并不直接被你的任何一个 markdown 文件或者主题组件引用 —— 举例来说，favicons 和 PWA 的图标，在这种情形下，你可以将它们放在 `.vuepress/public` 中， 它们最终会被复制到生成的静态文件夹中。

### 基础路径

如果你的网站会被部署到一个**非根路径**，你将需要在 `.vuepress/config.js` 中设置 `base`，举例来说，如果你打算将你的网站部署到 `https://foo.github.io/bar/`，那么 `base` 的值就应该被设置为 `"/bar/"` (应当总是以斜杠开始，并以斜杠结束)。

有了基础路径（Base URL），如果你希望引用一张放在 `.vuepress/public` 中的图片，你需要使用这样路径：`/bar/image.png`，然而，一旦某一天你决定去修改 `base`，这样的路径引用将会显得异常脆弱。为了解决这个问题，VuePress 提供了内置的一个 helper `$withBase`（它被注入到了 Vue 的原型上），可以帮助你生成正确的路径：

``` vue
<img :src="$withBase('/foo.png')" alt="foo">
```

值得一提的是，你不仅可以在你的 Vue 组件中使用上述的语法，在 Markdown 文件中亦是如此。

最后补充一句，一个 `base` 路径一旦被设置，它将会自动地作为前缀插入到 `.vuepress/config.js` 中所有以 `/` 开始的资源路径中。

## 发布文档

文档写完后，需要在根目录下进行`build`操作：

```shell
yarn run build
```

当 build 完成后，将产物提交，然后合并到`master`分支，然后就会自动部署。
