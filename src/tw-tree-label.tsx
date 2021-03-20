import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isRoot: Boolean,
    node: Object,
  },

  render() {
    const { isRoot = false, node } = this.$props;

    const $labelSlot = this.$slots.label;

    return (
      <div class="tree-label">
        {$labelSlot ? (
          $labelSlot({ node: node, isRoot })
        ) : (
          <div class="inner-label">
            <span>{node?.label || " "}</span>
          </div>
        )}
      </div>
    );
  },
});
