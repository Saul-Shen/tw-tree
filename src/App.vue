<template>
  <tw-tree class="my-tree" :left-tree="leftTree" :right-tree="rightTree">
    <template #rootLabel="props">
      <div class="label">{{ props.name }}</div>
    </template>
    <template #nodeLabel="props">
      <div class="label">{{ props.name }}</div>
    </template>
  </tw-tree>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TwTree from "./components/tw-tree";

export default defineComponent({
  name: "App",
  components: {
    TwTree,
  },

  data() {
    const tree1 = {
      label: "Owner",
      twTreeAttrs: {
        paddingChildren: "30px",
      },
      children: [
        {
          label: "Label 1",
          twTreeAttrs: {
            paddingParent: "40px",
            paddingChildren: "80px",
          },
          children: [
            {
              label: "1-1",
            },
            {
              label: "1-2",
            },
          ],
        },
        {
          label: "Label 2",
        },
        {
          label: "Label 3",
        },
      ],
    };

    const tree2 = {
      label: "Owner",
      children: [
        {
          twTreeAttrs: {
            paddingParent: "100px",
            paddingChildren: "80px",
          },
          label: "Label 1",
          children: [],
        },
        {
          label: "Label 3",
        },
      ],
    };

    return {
      leftTree: tree1,
      rightTree: tree2,
    };
  },
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .my-tree {
    .label {
      cursor: pointer;
      display: flex;
      align-items: center;
      padding: 10px 15px;
      text-align: center;
      border-radius: 3px;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
