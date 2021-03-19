import { defineComponent } from "vue";
import TwTreeLabel from "./tw-tree-label";
import TwTreeNode from "./tw-tree-node";
import TwTreeLink from "./tw-tree-link";

const TwTree = defineComponent({
  props: {
    leftTree: Object,
    rightTree: Object,
    linkWidth: Number, // node连接线的长度
  },

  render() {
    const { leftTree = {}, rightTree = {}, linkWidth = 20 } = this.$props;

    const ifShowLeftTree = leftTree.children && leftTree.children.length > 0;
    const ifShowRightTree = rightTree.children && rightTree.children.length > 0;

    const rootLabel = leftTree.label || rightTree.label;

    return (
      <div class="tw-tree">
        {ifShowLeftTree && (
          <div class="left-tree is-left">
            <span class="link" />
            <TwTreeLink position="is-left" />
            {leftTree.children.map((node: any) => (
              <TwTreeNode v-slots={this.$slots} {...node} position="is-left" />
            ))}
          </div>
        )}

        <TwTreeLabel
          isRoot
          v-slots={this.$slots}
          position="is-middle"
          label={rootLabel}
        />

        {ifShowRightTree && (
          <div class="right-tree is-right">
            <TwTreeLink position="is-right" />
            {rightTree.children.map((node: any) => (
              <TwTreeNode v-slots={this.$slots} {...node} position="is-right" />
            ))}
          </div>
        )}
      </div>
    );
  },
});

export default TwTree;
