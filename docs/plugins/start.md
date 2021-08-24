# 本地调试

## 使用方式
@winfe/winex-cli 对完提供了一个开发环境依赖的命令`winex dev`。构建于 webpack 和 webpack-dev-server 之上。

提供了开箱即用的vue2项目dev开发服务

### 安装

```javascript
// global install
$ npm install -g @winfe/winex-cli
# OR
$ yarn global add @winfe/winex-cli
```

### 单个物料根目录运行

```bash
winex dev
```

## 配置

### 项目目录

```json
├── package.json
├── dist
├── public
├── src
    ├── pages
        ├── example.vue
        └── example2.vue
    └── index.js
├── winfe.config.js
├── index.js // 对外输出的入口js
├── index.vue // 如果想自定义调试组件，可以在index.vue中进行
└── app.js  // 应用级别的配置
```




### 应用配置

由于fire start开启的是一个标准的 `Vue` 应用，你可以通过创建一个 `app.js` 文件来做一些应用级别的配置，当该文件存在的时候，会被导入到应用内部。

app.js 应该 export default 一个钩子函数，并接受一个包含了一些应用级别属性的对象作为参数。你可以使用这个钩子来安装一些附加的 Vue 插件、注册全局组件，或者增加额外的路由钩子等：

```javascript
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 使用异步函数也是可以的
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(ElementUI); // 注册你想要注册的全局组件
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    import('@winning-plugin/portal-login-plugin').then((WinLogin) => {
      console.log(8888, WinLogin);
      const Login = WinLogin.default;
      /* eslint-disable no-new */
      new Login({
        username: 'L10044', // 用户名
        password: '456' // 密码
      });
    });
  }
}
```

### 本地登陆

为了方便在本地dev环境获取登陆信息，可以使用`@winning-plugin/portal-login-plugin`插件，可以在app.js开启插件

```javascript

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
}) => {
  // ...做一些其他的应用级别的优化
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    import('@winning-plugin/portal-login-plugin').then((WinLogin) => {
      console.log(8888, WinLogin);
      const Login = WinLogin.default;
      /* eslint-disable no-new */
      new Login({
        username: 'L10044', // 用户名
        password: '456' // 密码
      });
    });
  }
}
```

### 项目配置
winfe.config.js作为项目的唯一配置文件，支持如下配置：
#### proxy

- Type: object
- Default: {}

配置代理能力。
```javascript
export default {
  proxy: {
    '/api': {
      'target': 'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
}
```
然后访问 /api/users 就能访问到 http://jsonplaceholder.typicode.com/users 的数据。

::: warning
注意：proxy 配置仅在 dev 时生效。
:::


