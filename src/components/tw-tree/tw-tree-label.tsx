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
  },

  methods: {
    onClick() {
      if (this.onClickExpand) {
        this.onClickExpand(!this.isExpanded);
      }
    },
  },

  render() {
    const { position, isRoot, label, ifCanExpand, isExpanded } = this.$props;

    const { nodeLabel, rootLabel } = this.$slots;

    const $labelSlot = isRoot ? rootLabel : nodeLabel;

    return (
      <div class={cls("tree-label", position)}>
        {$labelSlot ? (
          $labelSlot({ name: label })
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
