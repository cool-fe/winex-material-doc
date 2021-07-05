module.exports = {
  base: "/winex-material-doc/", //部署站点基础路径
  title: "WINEX物料文档。",
  description: " ",
  head: [
    // 额外需要被注入到当前页面的HTML<head>中的标签
    // ['link', {rel: 'icon', href: '/logo.png'}]
  ],
  themeConfig: {
    logo: "", // 导航栏logo
    nav: [
      // 导航栏链接
      { text: "首页", link: "/" },
      { text: "开发物料", link: "/guides/" },
      { text: "使用物料", link: "/usage/" },
      {
        text: "业务域",
        ariaLabel: "业务域",
        items: [
          {
            text: "公共域",
            link: "http://172.16.6.214/webmaterials-common",
          },
          {
            text: "费用域",
            link: "http://172.16.6.214/webmaterials-finance",
          },
          {
            text: "就诊域",
            link: "http://172.16.6.214/webmaterials-encounter",
          },
          {
            text: "执行域",
            link: "http://172.16.6.214/webmaterials-execution",
          },
          {
            text: "临床域",
            link: "http://172.16.6.214/webmaterials-clinical",
          },
          {
            text: "物品域",
            link: "http://172.16.6.214/webmaterials-material",
          },
          {
            text: "记录域",
            link: "http://172.16.6.214/webmaterials-record",
          },
          {
            text: "患者域",
            link: "http://172.16.6.214/webmaterials-person",
          },
        ],
      },
    ],
    sidebar: {
      "/guides/": [
        {
          title: "开始",
          collapsable: false,
          children: ["/guides/", "/guides/flow"],
        },
        {
          title: "开发物料",
          collapsable: false,
          children: [
            "/guides/material-init",
            "/guides/material-name",
            "/guides/material-component",
            "/guides/material-scaffold",
            "/guides/material-doc",
            "/guides/material-release",
          ],
        },
      ],
      "/usage/": [
        {
          title: "使用教程",
          collapsable: false,
          children: ["/usage/", "/usage/install", "/usage/use"],
        },
      ],
    },
  },
};
