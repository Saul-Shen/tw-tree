import { defineComponent } from "vue";

export default defineComponent({
  props: {
    width: Number,
    position: String,
  },

  render() {
    const { position = "is-left" } = this.$props;

    const cls = position === "is-left" ? "left-tree-link" : "right-tree-link";

    return <span class={cls} />;
  },
});
