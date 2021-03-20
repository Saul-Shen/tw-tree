import { defineComponent } from "vue";

export default defineComponent({
  props: {
    postion: String,
    color: String,
  },

  render() {
    const isLeft = this.postion === "is-left";

    const prefix = isLeft ? "left" : "right";

    const style = {
      background: this.color || "#ddd",
    };

    return (
      <>
        <span class={`${prefix}-side-line-top`} style={style} />
        <span class={`${prefix}-side-line-bottom`} style={style} />
      </>
    );
  },
});
