import { defineComponent } from "vue";
import TwTreeLabel from "./tw-tree-label";
import TwTreeLink from "./tw-tree-link";

const TwTreeNode = defineComponent({
  props: {
    label: String,

    position: String,

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
    const { label, children, position } = this.$props;

    const cls = ["tree-node", position];

    return (
      <div class={cls.join(" ")}>
        <span class="line-top" />
        <span class="line-bottom" />

        <TwTreeLink position={position} />

        <TwTreeLabel
          v-slots={this.$slots}
          label={label}
          isExpanded={this.isExpanded}
          ifCanExpand={this.ifCanExpand}
          onClickExpand={this.onClickExpand}
          position={position}
        />

        {this.ifCanExpand && this.isExpanded && (
          <div class={`tree-children ${position}`}>
            {children.length > 0 && <span class="link" />}

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
