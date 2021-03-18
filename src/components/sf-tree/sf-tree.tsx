import { defineComponent } from "vue"
import { SfTreeLabel, SfTreeNode } from "./sf-tree-node"
import "./index.less"

const data1 = {
  label: "Owner",
  children: [
    {
      label: "Label 1",
      children: [
        {
          label: "1-1"
        },
        {
          label: "1-2"
        }
      ]
    },
    {
      label: "Label 2"
    },
    {
      label: "Label 3"
    }
  ]
}

const data2 = {
  label: "Owner",
  children: [
    {
      label: "Label 1",
      children: []
    },
    {
      label: "Label 3"
    }
  ]
}

const SfTree = defineComponent({
  props: {
    data: Object
  },

  render() {
    return (
      <div class="sf-tree">
        <div class="left-tree is-left">
          <span class="link" />

          {data1.children.map(node => (
            <SfTreeNode {...node} position="is-left" />
          ))}
        </div>

        <SfTreeLabel label={data1.label} position="is-middle" />

        <div class="right-tree is-right">
          <span class="link" />

          {data2.children.map(node => (
            <SfTreeNode {...node} position="is-right" />
          ))}
        </div>
      </div>
    )
  }
})

export default SfTree
