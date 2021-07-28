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
