# 打包

## 打包器安装

::: tip x
yyy
:::
::: snippet install
Install
:::

<!-- https://vitepress.vuejs.org/guide/differences-from-vuepress.html#site-config -->

npm install webpack webpack-cli --save-dev

npm install esbuild

To install Rollup locally with NPM:

npm install rollup --save-dev

Or with Yarn:

yarn -D add rollup

## 最简（CLI 长度）打包

webpack

```
src/index.js
```

rollup

```
rollup <entry file>
```

打包后代码输出到终端

rsbuild

```
esbuild <entry file>
```

打包后代码输出到终端
