# 物料发布

::: warning
**请确认完成了物料的必选设置后，就可以进行物料开发**
:::

## 发布配置

### 发布registry 

物料发布的nexus repository ：[http://172.16.9.242:8081/repository/winfe-material/](http://172.16.9.242:8081/repository/winfe-material/)

:::warning
物料发布的nexus repository单独管理，严格管控物料的发布，需要特殊账号才能发布。
:::


### 安装registry 

物料安装nexus registry：[http://172.16.9.242:8081/repository/npm-group/](http://172.16.9.242:8081/repository/npm-group/)

:::tip
物料安装的nexus registry和业务私有registry是同一个
:::

### umd资源

:::warning
现在不支持在项目中直接使用物料的umd资源
:::

## 发布策略

### 公测版发布(beta)

当物料的所有功能均已开发完毕，自测通过后（后续会增加单元测试）就可以发布 beta 版本，作为一个公测的不稳定版本对外提供，业务在 dev 环境就可以直接使用 beta 版(`x.y.z-beta-*`)物料

### 正式版发布(release)

当物料的所有功能均通过测试验证，这时候物料可以发布稳定的正式版本，业务在 rc 环境就可以直接使用正式版(`x.y.z`)的物料

## 发布流程

:::warning
提交所有改动代码到远程仓库
:::

### 发布命令(物料项目目录)

:::tip winex 版本要求
@winfe/winex-cli 版本要大于 v1.1.15
:::

#### 公测版发布(beta)

```bash
wienx publish --beta [patch | minor | major]
```

::: details 查看详情


在执行`wienx publish`发布beta版本的时候，会按照如下表格进行版本升级：

| 发布命令                        | 发布前版本号       | 发布后版本号        |
| ------------------------------ | --------------   | ---------------- |
| wienx publish --beta patch | `x-y-z`        | `x-y-z+1-beta-0` |
| wienx publish --beta patch | `x-y-z-beta-*` | `x-y-z-beta-*+1` |
| wienx publish --beta minor | `x-y-z`        | `x-y+1-0-beta-0` |
| wienx publish --beta minor | `x-y-z-beta-*` | `x-y-z-beta-*+1` |
| wienx publish --beta major | `x-y-z`        | `x+1-0-0-beta-0` |
| wienx publish --beta major | `x-y-z-beta-*` | `x-y-z-beta-*+1` |

:::

#### 正式版发布(release)

```bash
wienx publish --release [patch | minor | major]
```

::: details 查看详情
在执行`wienx publish`发布release版本的时候，会按照如下表格进行版本升级：

| 发布命令                         | 发布前版本号      | 发布后版本号   |
| ------------------------------- | -------------- | ------------ |
| wienx publish --release patch     | `x-y-z`        | `x-y-z+1`    |
| wienx publish --release patch     | `x-y-z-beta-*` | `x-y-z`      |
| wienx publish --release minor     | `x-y-z`        | `x-y+1-0`    |
| wienx publish --release minor     | `x-y-z-beta-*` | `x-y-z`      |
| wienx publish --release major     | `x-y-z`        | `x+1-0-0`    |
| wienx publish --release major     | `x-y-z-beta-*` | `x-y-z`      |

:::