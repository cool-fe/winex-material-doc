# 物料仓库

## 物料仓库列表

物料仓库按照**业务域**独立管理，我们已经在仓库中给大家初始化了最基础的开发模板，大家不需要自己再手动进行域物料仓库的搭建。域仓库地址和对应的域如下表：

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
| [MVP-winning-webmaterials-shanxi](http://tfs2018-web.winning.com.cn:8080/tfs/WINNING-6.0/W.in-MVP/_git/winning-webmaterials-shanxi)       | 山西物料仓库               | 丁惠波   |

**大家记住这里域的 name 术语（common，finance，encounter，person，execution，clinical，record，material，shanxi），这些是枚举值大家一定遵守不要拼写错误**

## 物料仓库结构

```
├── README.md
├── build               //生成的物料数据目录
├── components          // 业务组件开发目录
├── docs                // 物料文档目录
├── lerna.json          // lerna配置(可选)
├── package.json        // package.json信息
├── scaffolds           // 模板开发目录

```

开发者主要关心的目录有两个`components`和`scaffolds`，分别在这两个目录下开发业务组件和项目模板。还需要在`docs`目录下进行文档编写。
