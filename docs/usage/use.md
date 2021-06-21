# 物料使用

### 业务组件使用

业务组件安装后，可以全局注册，也可以在你某个组件中单独引用，全局注册：

```JavaScript
// main.js
import Vue from "vue";
import Tag from "@winex-comp/common-tag";

Vue.use(Tag);

new Vue({
  el: "#app",
});
```

或者单独引用：

```Vue
<template>
  <div>
    <tag></tag>
  <div>
</template>
<script>
  import Tag from '@winex-comp/common-tag';
  export default {
    components: {
      Tag
    }
  }
</script>
```

### 模板使用

模板一般是一个项目的开发目录结构，初始化后在当前模板的目录下`yarn install`安装完依赖，然后根据`package.json`中的`script`脚本运行。
