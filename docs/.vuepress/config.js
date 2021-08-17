module.exports = {
  base: "/winex-material-doc/", //部署站点基础路径
  title: "WINEX物料文档",
  description: " ",
  head: [
    // 额外需要被注入到当前页面的HTML<head>中的标签
    // ['link', {rel: 'icon', href: '/logo.png'}]
  ],
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },
  themeConfig: {
    logo: "", // 导航栏logo
    nav: [
      // 导航栏链接
      { text: "首页", link: "/" },
      { text: "开发物料", link: "/guides/" },
      { text: "开发套件", link: "/plugins/start/" },
      { text: "使用物料", link: "/usage/" },
      { text: "物料迁移指南", link: "/migration/" },
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
          title: "研发流程",
          collapsable: false,
          children: [
            "/guides/material-init",
            "/guides/material-name",
            {
              title: "物料开发",
              collapsable: false,
              children: [
                "/guides/material-component",
                "/guides/material-scaffold",
              ],
            },
            "/guides/material-doc",
            {
              title: "物料版本",
              collapsable: false,
              children: [
                "/guides/material-version",
                "/guides/material-version-practice"
              ],
            },
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
      "/migration/": [
        {
          title: "物料迁移指南",
          collapsable: false,
          sidebarDepth: 2,
          children: ["/migration/"],
        },
      ],
      "/plugins/": [
        {
          title: "开发套件",
          collapsable: false,
          sidebarDepth: 2,
          children: ["/plugins/start", "/plugins/request"],
        },
      ],
    },
  },
};
