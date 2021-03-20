import { defineComponent } from "vue";
import TwTreeLabel from "./tw-tree-label";
import TwTreeNode from "./tw-tree-node";
import TwTreeLink from "./tw-tree-link";
import { getPaddingStyle } from "./util";

const TwTree = defineComponent({
  props: {
    leftTree: Object,
    rightTree: Object,
  },

  render() {
    const { leftTree = {}, rightTree = {} } = this.$props;

    const ifShowLeftTree = leftTree.children && leftTree.children.length > 0;
    const ifShowRightTree = rightTree.children && rightTree.children.length > 0;

    const rootLabel = leftTree.label || rightTree.label;

    const leftTreeStyle = getPaddingStyle(
      "is-left",
      leftTree?.twTreeAttrs?.childrenLink?.width
    );

    const rightTreeStyle = getPaddingStyle(
      "is-right",
      rightTree?.twTreeAttrs?.childrenLink?.width
    );

    return (
      <div class="tw-tree">
        {ifShowLeftTree && (
          <div class="is-left" style={leftTreeStyle}>
            <TwTreeLink
              position="is-left"
              width={leftTree.twTreeAttrs?.childrenLink?.width}
              color={leftTree.twTreeAttrs?.childrenLink?.color}
            />
            {leftTree.children.map((node: any) => (
              <TwTreeNode position="is-left" v-slots={this.$slots} {...node} />
            ))}
          </div>
        )}

        <TwTreeLabel
          isRoot
          position="is-middle"
          v-slots={this.$slots}
          label={rootLabel}
        />

        {ifShowRightTree && (
          <div class="is-right" style={rightTreeStyle}>
            <TwTreeLink
              position="is-right"
              width={rightTree.twTreeAttrs?.childrenLink?.width}
              color={rightTree.twTreeAttrs?.childrenLink?.color}
            />
            {rightTree.children.map((node: any) => (
              <TwTreeNode position="is-right" v-slots={this.$slots} {...node} />
            ))}
          </div>
        )}
      </div>
    );
  },
});

export default TwTree;
