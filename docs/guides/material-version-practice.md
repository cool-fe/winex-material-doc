# 物料版本方案


## 发布版本约定

根据[版本规范](./material-version.html)落地物料各个阶段版本号规定：

- 主版本号(major)：当你做了不兼容的 API 修改（产品功能做了大的不兼容调整/重构）
- 次版本号(minor)：当你做了向下兼容的功能性新增（产品增加了兼容以前的小功能）
- 修订号(patch)：当你做了向下兼容的问题修正（对某个功能的bug修复）


### 初始化组件

初始版本：0.1.0

|    开发阶段    | 代码分支 |  版本号 | 发布时机 | 发布版本号 | 执行命令
| ---------------------- | --- | --- | ----- | --- | --- |
| 开发阶段       | feat_xx_develop  | `0.1.0` | 开发阶段 | `1.0.0-beta-*` | `wienx publish premajor --preid=beta`
| rc阶段        |  rc | `1.0.0-beta-*` | 测试通过 | `1.0.0` | `wienx publish major`

### 组件迭代

#### bug修复

|    开发阶段    | 代码分支 |  版本号 | 发布时机| 发布版本号 | 执行命令
| ---------------------- | --- | --- |--- |  --- | --- |
| 开发阶段       | feat_xx_develop  | `x-y-z` | 开发阶段 | `x-y-z+1-beta-*` | `wienx publish prepatch --preid=beta`
| rc阶段        |  rc | `x-y-z+1-beta-*` | 测试通过 | `x-y-z+1` | `wienx publish patch`


#### 新增向下兼容的功能

|    开发阶段    | 代码分支 |  版本号 | 发布时机 |  发布版本号 | 执行命令
| ---------------------- | --- | --- | --- | --- |  --- |
| 开发阶段       | feat_xx_develop  | `x-y-z` | 开发阶段 | `x-y+1-0-beta-*` | `wienx publish preminor --preid=beta`
| rc阶段        |  rc | `x-y+1-0-beta-*` | 测试通过 | `x-y+1-0` | `wienx publish minor`



#### 重构或者做了不向下兼容的功能

|    开发阶段    | 代码分支 |  版本号 |  发布时机 | 发布版本号 | 执行命令
| ---------------------- | --- | --- | --- | --- | --- |
| 开发阶段       | feat_xx_develop  | `x-y-z` | 开发阶段 | `x+1-0-0-beta-*` | `wienx publish premajor --preid=beta`
| rc阶段        |  rc | `x+1-0-0-beta-*` | 测试通过 | `x+1-0-0` | `wienx publish major`




## 使用组件版本

**我们约定在项目中rc(包括rc)之后均使用release正式版本：1.0.0**，不能使用带有`-beta`标识符版本


## 更新版本