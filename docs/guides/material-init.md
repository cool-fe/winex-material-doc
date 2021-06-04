# 物料模板

### 物料初始化

可以通过我们[@winfe/winex-cli](https://cool-fe.github.io/docs-winex-cli/)提供的 `winex init` 指令去初始化我们物料项目, 首先要安装我们的脚手架：

```bash
$ npm install -g @winfe/winex-cli
# OR
$ yarn global add @winfe/winex-cli
```

然后初始化物料项目：

```bash
winex init --name my-material-template
```

初始化后会有如下选择，请分别将：

- Project type 选择`normal`
- domain 选择 `common`
- Bussiness type 选择`app_indep`
- Pick a preset scaffold 选择 `@winexmaterial-scaffolds/wn-material-template`

后面的询问选择可以根据自定义选择了。

![image.png](/winex-material-doc/winex-init-material.png)

### 物料模板信息

初始化项目后，您第一件要做的就是修改项目根目录下的`package.json`，需要修改和保留的字段有`name`,`version`,`description`,`materialConfig`。示例如下：

```git
{
  "name": "winex-webmaterial-[name]", // name修改成您的域名称：common、finance、clinical、execution、person、encouter、record、knowledge、material
  "version": "1.0.0", // 版本信息
  "description": "example物料仓库", // 关于物料仓库的描述
  "scripts": {
    // ......
  },
  "repository": {
    // ......
  },
  "husky": {
    // ......
  },
  "config": {
    // ......
  },
  "lint-staged": {
    // ......
  },
  "devDependencies": {
    // ......
  },
  "dependencies": {
    // ......
  },
  "materialConfig": {
    "key": "common", // 您的域名：common、finance、clinical、execution、person、encouter、record、knowledge、material
    "title": "公共仓库", // 中文域名：公共仓库、费用域、临床域、执行域、患者域、就诊域、记录域、知识域、物品域
    "registry": "http://172.16.9.242:8081/repository/npm-group",
    "unpkgHost": "http://172.16.6.51:9000/minio/winex"
  }
}

```

**注意：上面**`materialConfig`**中的**`key`**和**`title`**一定需要分别如下对应**：
| 标题描述（title） | 域（key） |
| ----------------- | --------- |
| 公共仓库 | common |
| 费用域 | finance |
| 临床域 | clinical |
| 执行域 | execution |
| 患者域 | person |
| 就诊域 | encounter |
| 记录域 | record |
| 知识域 | knowledge |
| 物品域 | material |
