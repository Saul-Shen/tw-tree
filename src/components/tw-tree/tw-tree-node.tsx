import { defineComponent } from "vue";
import TwTreeLabel from "./tw-tree-label";
import TwTreeLink from "./tw-tree-link";
import TwSideLine from "./tw-side-line";
import { getPaddingStyle, cls } from "./util";

const TwTreeNode = defineComponent({
  inheritAttrs: false,

  props: {
    position: String,

    twTreeAttrs: Object,

    label: String,

    children: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      ifCanExpand: false, // 是否可以展开
      isExpanded: true, // 是否处于展开状态
    };
  },

  mounted() {
    if (this.children.length > 0) {
      this.ifCanExpand = true;
    }
  },

  methods: {
    onClickExpand() {
      this.isExpanded = !this.isExpanded;
    },
  },

  render() {
    const { label, children, position, twTreeAttrs } = this.$props;

    const parentStyle = getPaddingStyle(
      position,
      twTreeAttrs?.parentLink?.width
    );

    const childrenStyle = getPaddingStyle(
      position,
      twTreeAttrs?.childrenLink?.width
    );

    return (
      <div class={cls("tree-node", position)} style={parentStyle}>
        <TwSideLine postion={position} color={twTreeAttrs?.parentLink?.color} />

        <TwTreeLink position={position} {...twTreeAttrs?.parentLink} />

        <TwTreeLabel
          v-slots={this.$slots}
          label={label}
          node={{ ...this.$props, ...this.$attrs }}
          isExpanded={this.isExpanded}
          ifCanExpand={this.ifCanExpand}
          onClickExpand={this.onClickExpand}
          position={position}
        />

        {this.ifCanExpand && this.isExpanded && (
          <div class={`tree-children ${position}`} style={childrenStyle}>
            <TwTreeLink position={position} {...twTreeAttrs?.childrenLink} />

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
