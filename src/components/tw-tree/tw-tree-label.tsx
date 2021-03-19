import { defineComponent } from "vue";
import { cls } from "./util";

export default defineComponent({
  props: {
    label: String,
    ifCanExpand: Boolean,
    isExpanded: Boolean,
    onClickExpand: Function,
    position: String,
    isRoot: Boolean,
    node: Object,
  },

  methods: {
    onClick() {
      if (this.onClickExpand) {
        this.onClickExpand(!this.isExpanded);
      }
    },
  },

  render() {
    const {
      position,
      isRoot = false,
      label,
      ifCanExpand,
      isExpanded,
      node,
    } = this.$props;

    const $labelSlot = this.$slots.label;

    return (
      <div class={cls("tree-label", position)}>
        {$labelSlot ? (
          $labelSlot({ node: node, label: label, isRoot })
        ) : (
          <div class="inner-label">
            <span>{label}</span>

            {ifCanExpand && (
              <span class="expand-icon" onClick={this.onClick}>
                {isExpanded ? "-" : "+"}
              </span>
            )}
          </div>
        )}
      </div>
    );
  },
});
