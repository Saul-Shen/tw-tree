import { defineComponent } from "vue";
import { cls } from "./util";

export default defineComponent({
  props: {
    width: String,
    color: String,
    position: String,
  },

  render() {
    const {
      position = "is-left",
      width = "20px",
      color = "#ddd",
    } = this.$props;

    const isLeft = position === "is-left";

    return (
      <span
        class={cls({
          "left-tree-link": isLeft,
          "right-tree-link": !isLeft,
        })}
        style={{ width, background: color }}
      />
    );
  },
});
