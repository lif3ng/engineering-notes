import DefaultTheme from "vitepress/theme";
import SnippetBlock from "../components/SnippetBlock.vue";

console.log("enhance app");
export default {
  ...DefaultTheme,
  enhanceApp: ({
    app,
    router, 
    siteData, 
  }) => {
    // ...apply enhancements to the app
    console.log(app, router, siteData);
    app.component("snippet-block", SnippetBlock);
  },
};
