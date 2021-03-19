import { defineComponent } from "vue"

export const SfTreeLabel = defineComponent({
  props: {
    label: String,
    ifCanExpand: Boolean,
    isExpanded: Boolean,
    onClickExpand: Function,
    position: String
  },

  methods: {
    onClick() {
      if (this.onClickExpand) {
        this.onClickExpand(!this.isExpanded)
      }
    }
  },

  render() {
    const cls = ["tree-label"]

    cls.push(this.position as string)

    return (
      <div class={cls.join(" ")}>
        <div class="inner-label">
          <span>{this.label}</span>

          {this.ifCanExpand && (
            <span class="expand-icon" onClick={this.onClick}>
              {this.isExpanded ? "-" : "+"}
            </span>
          )}
        </div>
      </div>
    )
  }
})

export const SfTreeNode = defineComponent({
  props: {
    label: String,

    position: String,

    children: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      ifCanExpand: false, // 是否可以展开
      isExpanded: true // 是否处于展开状态
    }
  },

  mounted() {
    if (this.children.length > 0) {
      this.ifCanExpand = true
    }
  },

  methods: {
    onClickExpand() {
      this.isExpanded = !this.isExpanded
    }
  },

  render() {
    const { label, children, position } = this.$props

    const cls = ["tree-node", position]

    return (
      <div class={cls.join(" ")}>
        <span class="line-top" />
        <span class="line-middle" />
        <span class="line-bottom" />

        <SfTreeLabel
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
              <SfTreeNode {...node} position={position} />
            ))}
          </div>
        )}
      </div>
    )
  }
})

export default SfTreeNode
