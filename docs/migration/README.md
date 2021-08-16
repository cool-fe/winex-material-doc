# 介绍

::: warning 提示
刚接触物料规范？先从了解[开发物料](/guides/)和[使用物料](/usage/)开始吧。
:::

本指南主要是为已有业务组件的开发业务域（费用域、门诊域、就诊域等），从原有的组件仓库迁移公共业务组件到到各自物料域仓库而提供参考。

- [值得注意的新特性](#值得注意的新特性)
- [非兼容的变更](#非兼容的变更)
- [支持的库](#官方支持的库)

## 值得注意的新特性

WINEX 物料体系不仅指了定标准化的物料开发流程规范，还提供一些全局公用的开发套件完善整个物料开发体验。需要关注的一些功能包括：

### 规范

- [域物料仓库划分](/guides/material-init.html)
- [物料命名规范](/guides/material-name.html)
- [业务组件开发流程](/guides/material-component.html)
- [物料文档编写](/guides/material-doc.html)
- [物料发布流程](/guides/material-release.html)

### 开发套件

- [本地调试](/plugins/start.html)
- [request](/plugins/request.html)

## 其他问题

### 如何设置本地 proxy

dev 开发方便调试，支持自行设置 proxy

```javascript
// winfe.config.js
module.exports = {
    ....
    proxy: {
        '/finance-mdm/': {
        target: 'http://172.16.6.201'
        },
        '/mdm-base/': {
        target: 'http://172.16.6.201'
        },
    }
}
```

### 如何排除公共依赖打包

可以在 winfe.config.js 配置文件中设置 externals:

```javascript
// winfe.config.js
module.exports = {
    ....
    configureWebpack: {
        externals:{
            vue: {
                root: "Vue",
                commonjs: "vue",
                commonjs2: "vue",
                amd: "vue",
            },
        }
    }
}
```

### 遇到node-sass版本问题

如果遇到如下错误：

<img :src="$withBase('/node-sass.png')" alt="node-sass"></img>

一般情况下需要执行

```sh
npm rebuild node-sass
```

### 如何迁移样式文件

在迁移样式的过程中，我们统计了`scss`中提供的公共的`变量`和`mixin` 。在开发编译的时候使用`style-resources-loader`进行处理，所以无需再迁移的过程中再引入相关的`scss`依赖。

如下，迁移`win-header.scss`文件的内容，删除 ~~@import "../mixins/mixins"~~，正常使用`@include win(header-wrapper)`和`$win-status-primary`:

```scss
// @import "../mixins/mixins"; 删除

.win-header {
  @include win(header-wrapper) {
    // .....
    background-color: $win-status-primary;
    // .....
  }
}
```

## 注意事项

::: warning 弃用
在组件迁移完成后，2021年8月10号，`winning-components` 已正式弃用。将不会有人维护`winning-components`.
:::

### 关于winning-components

`winning-components` 本身的代码维护在仓库`winning-webcomponents-finance-common`, 包括：

- 业务组件集合（packages）
- 对element-ui 自定义的一套主题（finance-theme）

另外构建出的产物包括：

- 所有单个组件的umd.js (例如：[ 票据打印组件：*/winex/lib/invoice-print.umd.js*, ... ])
- 组件集合的umd.js （/winex/lib/win-components.umd.js）
- his组件集合 （/winex/lib/winning-his.min.js）
- 就诊部分组件集合 （/winex/lib/win-components.encounter.umd.js）
- element-ui 自定义样式 （/winex/lib/finance-theme/index.css）
- element-ui 自定义样式 + his组件集合样式 （/winex/lib/finance-theme/winning.his.css）

如果你的代码对以上产物有依赖，则需要修改，目前的方案将业务组件和基础UI组件（element-ui）完全分开

- element-ui 自定义样式迁移到 [web-public](http://172.16.7.60/web-public/base-ui/index.css)上由公共前端团队维护。

- 如果之前通过外链方法使用单个组件的话需要改为`npm`包方式。

- **his组件集合、 element-ui 自定义样式 + his组件集合样式** 需要his前端自己处理，如果你的项目有使用`/winex/lib/winning-his.min.js` 需要修改

- **就诊部分组件集合**需要就诊前端自己处理


**另外有通过`npm`包使用`winning-components`建议找到组件开发者进行替换。**
