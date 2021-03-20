<template>
  <tw-tree class="my-tree" :left-tree="leftTree" :right-tree="rightTree">
    <template #label="props">
      <div v-if="props.isRoot" class="label root-label">
        {{ props.label }}
      </div>

      <div v-if="props.node?.type === '股东'" class="label gudong-label">
        <span>{{ props.node.label }}</span>
        <i class="el-icon-caret-right arrow" />
      </div>

      <div v-if="props.node?.type === '公司'" class="label gongsi-label">
        <span>{{ props.node.label }}</span>
        <span class="per">{{ props.node.per }}</span>
      </div>

      <div v-if="props.node?.type === '高管'" class="label gaoguang-label">
        <span>{{ props.node.label }}</span>
      </div>

      <div v-if="props.node?.type === '成员'" class="label chengyuan-label">
        <span>{{ props.node.label }}</span>
      </div>
    </template>
  </tw-tree>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TwTree from "../src";

export default defineComponent({
  name: "App",

  components: {
    TwTree,
  },

  data() {
    const tree1 = {
      label: "才华有限公司",
      twAttrs: {
        childrenLink: {
          width: "50px",
          color: "yellow",
        },
      },
      children: [
        {
          type: "股东",
          label: "股东1",
          twAttrs: {
            parentLink: {
              width: "100px",
              color: "red",
            },
            childrenLink: {
              width: "50px",
              color: "yellow",
            },
          },
          children: [
            {
              type: "公司",
              label: "公司1",
              per: "50.00%",
              twAttrs: {
                parentLink: {
                  width: "100px",
                },
              },
            },
            {
              type: "公司",
              label: "公司2",
              per: "50.00%",
              twAttrs: {
                parentLink: {
                  width: "100px",
                },
              },
            },
          ],
        },

        {
          type: "股东",
          label: "股东1",
          twAttrs: {
            parentLink: {
              width: "100px",
            },
          },
          children: [
            {
              type: "公司",
              label: "公司1",
              per: "50.00%",
              twAttrs: {
                parentLink: {
                  width: "100px",
                },
              },
            },
            {
              type: "公司",
              label: "公司2",
              per: "50.00%",
              twAttrs: {
                parentLink: {
                  width: "100px",
                },
              },
            },
          ],
        },
      ],
    };

    const tree2 = {
      label: "Owner",
      children: [
        {
          type: "高管",
          label: "高管1",
          twAttrs: {},
          children: [
            {
              type: "成员",
              label: "成员1",
            },
          ],
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

    .root-label {
      background: lightblue;
    }

    .gudong-label {
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
