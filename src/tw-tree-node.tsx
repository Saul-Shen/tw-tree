import { defineComponent } from "vue";
import TwTreeLabel from "./tw-tree-label";
import TwTreeLink from "./tw-tree-link";
import TwSideLine from "./tw-side-line";
import { getPadding, cls } from "./util";

const TwTreeNode = defineComponent({
  inheritAttrs: false,

  props: {
    position: String,
    label: String,
    twAttrs: Object,
    children: {
      type: Array,
      default: () => [],
    },
  },

  render() {
    const { label, children, position, twAttrs } = this.$props;

    const ifShowChildren = children && children.length > 0;

    const parentStyle = getPadding(position, twAttrs?.parentLink?.width);

    const childrenStyle = getPadding(position, twAttrs?.childrenLink?.width);

    return (
      <div class={cls("tree-node", position)} style={parentStyle}>
        <TwSideLine postion={position} color={twAttrs?.parentLink?.color} />

        <TwTreeLink position={position} {...twAttrs?.parentLink} />

        <TwTreeLabel
          v-slots={this.$slots}
          label={label}
          node={{ ...this.$props, ...this.$attrs }}
        />

        {ifShowChildren && (
          <div class={`tree-children ${position}`} style={childrenStyle}>
            <TwTreeLink position={position} {...twAttrs?.childrenLink} />

            {children.map((node: any) => (
              <TwTreeNode v-slots={this.$slots} {...node} position={position} />
            ))}
          </div>
        )}
      </div>
    );
  },
});

export default TwTreeNode;
