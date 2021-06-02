# 物料模板

### TFS 拉取

通过从`TFS`拉取代码，拉取分支为`develop`:

```git
git clone http://tfs2018-web.winning.com.cn:8080/tfs/WINNING-6.0/W.in-MVP/_git/winning-webmaterials-common
```

### 物料模板信息

拉取代码后，您第一件要做的就是修改项目根目录下的`package.json`，需要修改和保留的字段有`name`,`version`,`description`,`materialConfig`。示例如下：

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
