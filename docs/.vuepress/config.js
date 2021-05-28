module.exports = {
  base: "/winex-material-doc/", //部署站点基础路径
  title: "Winex Materials Doc",
  description: "welcome",
  head: [
    // 额外需要被注入到当前页面的HTML<head>中的标签
    // ['link', {rel: 'icon', href: '/logo.png'}]
  ],
  themeConfig: {
    logo: "", // 导航栏logo
    nav: [
      // 导航栏链接
      // {text: 'Home', link: '/'}
    ],
    sidebar: {
      "/guides/": [
        {
          title: "开始",
          collapsable: false,
          children: ["", "flow", "code", "protocol"],
        },
        {
          title: "开发指南",
          collapsable: false,
          children: ["develop"],
        },
      ],
    },
  },
};
