# 项目模板开发

项目模板可以理解为一个项目的最基础开发模板，可以用于一个项目的初始化。

## 创建模板

在物料模板的`scaffolds`的目录下新建您当前的项目模板文件夹`eg: wn-vue2-template`，然后将您的项目模板复制到该文件夹中。

```json
cd wn-vue2-template
npm install
npm run start
```

在您的项目模板中的`package.json`文件中，您需要至少保留以下字段。

```json
{
  "name": "@winexmaterial-scaffolds/wn-[name]-template", // name是模板名称
  "version": "0.0.1", // 版本新
  "description": "ui设计的tag组件", // 描述
  "scaffoldConfig": {
    "name": "@winexmaterial-scaffold/wn-[name]-template", //name是模板名称
    "title": "vue2.x开发模板", // 中文title
    "category": "app_main", // 类型
    "domain": "encounter" // 域
  }
}
```

关于上面的`category`有以下几个类型：
| category | value |
| ----------------- | --------- |
| 主应用 | app_main |
| 微应用 | app_micro |
| 独立应用 | app_indep |

## 启动模板

进入模板目录下，根据该模板中在`package.json`中`script`定义的启动命令，用来启动项目。

```
cd wn-vue-template
npm i
npm run start
```

## 发布模板

修改版本号后，在当前模板目录下，切换到私有源，然后执行`npm publish`进行发布。
