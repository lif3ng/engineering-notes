<template>
  <div>snippet vue</div>
</template>
<script>
// import { toRefs } from "vue";

export default {
  props: ["name"],
  //   setup(props) {
  //     const { name } = toRefs(props);
  //     console.log(name.value);
  //   },
  mounted() {
    const { relativePath } = this.$page;
    const path = relativePath.substr(0, relativePath.length - 3);
    const { name } = this;
    console.log(path, name);
    import(`../../../snippets/${path}/${name}.md`).then(console.log);
  },
};
</script>
