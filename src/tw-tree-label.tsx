import { defineComponent } from "vue";

export default defineComponent({
  props: {
    isRoot: Boolean,
    label: String,
    node: Object,
  },

  render() {
    const { isRoot = false, label, node } = this.$props;

    const $labelSlot = this.$slots.label;

    return (
      <div class="tree-label">
        {$labelSlot ? (
          $labelSlot({ node: node, label: label, isRoot })
        ) : (
          <div class="inner-label">
            <span>{label}</span>
          </div>
        )}
      </div>
    );
  },
});
