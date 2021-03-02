const mdItContainer = require("markdown-it-container");
module.exports = {
  lang: "zh-CN",
  title: "工程化笔记",
  base: process.env.ghpages ? "/engineering-notes/" : "/",
  description: "工程化碎碎念",
  themeConfig: {
    sidebar: {
      "/": [
        { text: "home", link: "index" },
        { text: "打包", link: "bundle" },
        { text: "badge", link: "badge" },
      ],
    },
  },
  markdown: {
    config: (md) => {
      md.use(mdItContainer, "snippet", {
        render: function (tokens, idx, env, ...args) {
          var m = tokens[idx].info.trim().match(/^snippet\s+(.*)$/);

          if (tokens[idx].nesting === 1) {
            // opening tag
            return `<snippet-block name="${md.utils.escapeHtml(m[1])}" >`;
          } else {
            // closing tag
            return "</snippet-block>\n";
          }
        },
      });
    },
  },
};
