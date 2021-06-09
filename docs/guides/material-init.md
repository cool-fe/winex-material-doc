# 域物料仓库

## 域物料仓库列表

域物料仓库，我们已经在仓库中给大家初始化了最基础的开发模板，大家不需要自己再手动进行域物料仓库的搭建。如下表：

| 仓库地址                                                                                                                                  | 仓库名称                   | 权限拥有 |
| ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------- |
| [MVP-winning-webcomponents-ui](http://tfs2018-web.winning.com.cn:8080/tfs/WINNING-6.0/W.in-MVP/_git/winning-webcomponents-ui)             | 基础组件库(win design 2.X) | 张丹丹   |
| [MVP-winning-webmaterials-common](http://tfs2018-web.winning.com.cn:8080/tfs/WINNING-6.0/W.in-MVP/_git/winning-webmaterials-common)       | 公共域物料仓库             | 胡至炜   |
| [MVP-winning-webmaterials-finance](http://tfs2018-web.winning.com.cn:8080/tfs/WINNING-6.0/W.in-MVP/_git/winning-webmaterials-finance)     | 费用域物料仓库             | 胡佳亦   |
| [MVP-winning-webmaterials-encounter](http://tfs2018-web.winning.com.cn:8080/tfs/WINNING-6.0/W.in-MVP/_git/winning-webmaterials-encounter) | 就诊域物料仓库             | 桂宇轩   |
| [MVP-winning-webmaterials-person](http://tfs2018-web.winning.com.cn:8080/tfs/WINNING-6.0/W.in-MVP/_git/winning-webmaterials-person)       | 患者域物料仓库             | 桂宇轩   |
| [MVP-winning-webmaterials-execution](http://tfs2018-web.winning.com.cn:8080/tfs/WINNING-6.0/W.in-MVP/_git/winning-webmaterials-execution) | 执行域物料仓库             | 周运徽   |
| [MVP-winning-webmaterials-clinical](http://tfs2018-web.winning.com.cn:8080/tfs/WINNING-6.0/W.in-MVP/_git/winning-webmaterials-clinical)   | 临床域物料仓库             | 韩重阳   |
| [MVP-winning-webmaterials-record](http://tfs2018-web.winning.com.cn:8080/tfs/WINNING-6.0/W.in-MVP/_git/winning-webmaterials-record)       | 记录域物料仓库             | 刘晨辉   |
| [MVP-winning-webmaterials-material](http://tfs2018-web.winning.com.cn:8080/tfs/WINNING-6.0/W.in-MVP/_git/winning-webmaterials-material)   | 物品域物料仓库             | 刘永佳   |

**大家记住这里域的 name 术语（common，finance，encounter，person，execution，clinical，record，material），这些是枚举值大家一定遵守不要拼写错误**

## 域物料仓库结构

```
├── README.md
├── build   //生成物料数据目录
├── components    // 业务组件开发目录
├── docs    // 物料文档
├── lerna.json    // lerna配置
├── local   // 提供给文档导入
├── package.json
├── scaffolds   // 模板开发目录
├── scripts
│   ├── build-entry.js
│   ├── gen-components.js
│   ├── release.js  // 发布脚本
│   └── upload-minio.js

```
