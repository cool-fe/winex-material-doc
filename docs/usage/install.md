# 安装物料

### 安装业务组件

通过`winex add`进行业务组件的安装：

```bash
winex add --plugin @winex-comp/common-tag
```

### 初始化模板

通过`winex init`进行模板的初始化, 会根据物料市场上已有的模板进行选择和安装：

如下通过`--template`指定`@winex-scaf/common-template`模板进行初始化到`my-scaffold`文件夹下。

```bash
winex init --name my-scaffold --template @winex-scaf/common-template
```

或者只通过`--name`选项，然后通过一系列的选择，然后初始化到`my-scaffold`文件夹下。

```
winex init --name my-scaffold
```
