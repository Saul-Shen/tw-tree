<template>
  <tw-tree class="my-tree" :left-tree="leftTree" :right-tree="rightTree">
    <template #label="props">
      <!-- render root label, custom render for different type node  -->
      <div v-if="props.isRoot" class="label root-label">
        {{ leftTree.label }}
      </div>

      <!-- render 股东 label -->
      <div v-if="props.node?.type === '股东'" class="label gudong-label">
        <template v-if="props.node.children.length > 0">
          <i
            v-if="props.node.twAttrs?.collapse"
            class="el-icon-circle-plus-outline"
            @click="onCollapse(props.node.id)"
          />
          <i
            v-else
            class="el-icon-remove-outline"
            @click="onCollapse(props.node.id)"
          />
        </template>
        <i
          v-if="props.node.children > 0 && props.node.collapse"
          class="el-icon-circle-plus-outline"
          @click="onCollapse(props.node.id)"
        />
        <span>{{ props.node.label }}</span>
        <i class="el-icon-caret-right arrow" />
      </div>

      <!-- render 公司 label -->
      <div v-if="props.node?.type === '公司'" class="label gongsi-label">
        <template v-if="props.node.children.length > 0">
          <i
            v-if="props.node.twAttrs?.collapse"
            class="el-icon-circle-plus-outline"
            @click="onCollapse(props.node.id)"
          />
          <i
            v-else
            class="el-icon-remove-outline"
            @click="onCollapse(props.node.id)"
          />
        </template>
        <span>{{ props.node.label }}</span>
        <span class="per">{{ props.node.per }}</span>
      </div>

      <!-- render 高管 label -->
      <div v-if="props.node?.type === '高管'" class="label gaoguang-label">
        <span>{{ props.node.label }}</span>
      </div>

      <!-- render 成员 label -->
      <div v-if="props.node?.type === '成员'" class="label chengyuan-label">
        <span>{{ props.node.label }}</span>
      </div>
    </template>
  </tw-tree>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TwTree from "../src";
import { leftTree, rightTree } from "./data";

function traTree(tree: any, id: string, fn: Function) {
  if (tree.id == id) {
    fn(tree);
  } else {
    if (tree.children && tree.children.length > 0) {
      tree.children.forEach((subTree: any) => traTree(subTree, id, fn));
    }
  }
}

export default defineComponent({
  components: {
    TwTree,
  },

  data() {
    return {
      leftTree,
      rightTree,
    };
  },

  methods: {
    onCollapse(id: string) {
      traTree(this.leftTree, id, (tree: any) => {
        tree.twAttrs.collapse = !tree.twAttrs.collapse;
      });

      traTree(this.rightTree, id, (tree: any) => {
        tree.twAttrs.collapse = !tree.twAttrs.collapse;
      });
    },
  },
});
</script>

<style lang="less">
#app {
  font-family: serif;
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

    .root-label {
      background: #0078f8;
      color: white;
    }

    .gudong-label {
      background: #ffe9d9;
      position: relative;

      .arrow {
        position: absolute;
        right: -30px;
        color: lightblue;
      }
    }

    .gongsi-label {
      position: relative;

      .per {
        position: absolute;
        right: -65px;
        top: calc(50% - 16px);
        font-size: 12px;
        color: orange;
      }
    }
  }
}
</style>
