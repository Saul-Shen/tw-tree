import { defineComponent } from "vue";

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
    const cls = ["tree-label"];

    cls.push(this.position as string);

    const { nodeLabel, rootLabel } = this.$slots;

    const $labelSlot = this.isRoot ? rootLabel : nodeLabel;

    return (
      <div class={cls.join(" ")}>
        {$labelSlot ? (
          $labelSlot({ name: this.label })
        ) : (
          <div class="inner-label">
            <span>{this.label}</span>

            {this.ifCanExpand && (
              <span class="expand-icon" onClick={this.onClick}>
                {this.isExpanded ? "-" : "+"}
              </span>
            )}
          </div>
        )}
      </div>
    );
  },
});
