const fs = require("fs");
const glob = require("glob");
const Md = require("markdown-it");
const md = new Md();
module.exports = {
  base: process.env.ghpages ? "/engineering-notes/" : "/",
  themeConfig: {
    sidebar: ["bundle", "badge"],
  },
  plugins: [
    [
      "vuepress-plugin-container",
      {
        type: "snippet",
        render: function (tokens, idx, env, ...args) {
          const m = tokens[idx].info.trim().match(/^snippet\s+(.*)$/);
          // const snippetName = md.utils.escapeHtml(m[1])
          // const snippetPath = path.join(__dirname,'../../snippets',snippetName,'**/*.md')
          // glob(snippetPath,{},function(err,files){
          //     if(err){throw err}
          //     console.log(files)
          // })

          if (tokens[idx].nesting === 1) {
            // opening tag
            return `<snippet-block name="${md.utils.escapeHtml(m[1])}" >`;
          } else {
            // closing tag
            return "</snippet-block>\n";
          }
        },
      },
    ],
  ],
  // markdown: {
  //     config: (md) => {
  //       md.use(mdItContainer, "snippet", {
  //         render: function (tokens, idx, env, ...args) {
  //           var m = tokens[idx].info.trim().match(/^snippet\s+(.*)$/);

  //           if (tokens[idx].nesting === 1) {
  //             // opening tag
  //             return `<snippet-block name="${md.utils.escapeHtml(m[1])}" >`;
  //           } else {
  //             // closing tag
  //             return "</snippet-block>\n";
  //           }
  //         },
  //       });
  //     },
  //   },
};
