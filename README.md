# tw-tree

Two way tree, you can customize label content, link style.

# Example

![example.png](./.github/example.png)

# Usage

Only the root node has 'isRoot' attribute and no 'node' attribute.

```html
<tw-tree class="my-tree" :left-tree="leftTree" :right-tree="rightTree">
  <template #label="props">
    <!-- custom render according to node info  -->
    <div v-if="props.isRoot" class="label">
      {{ props.label }}
    </div>

    <div v-else class="label">
      {{ props.node.label }}
    </div>
  </template>
</tw-trew>
```

# Interface

```typescript
interfase TreeNode {
  // not nessary, but will be useful, the example code shows the details
  id?: string,

  twAttrs: {
    // if collapse children
    collapse: boolean,

    // custom label to parent link style
    parentLink: {
      width: string,
      color: string,
    },

    // custom label to children link style
    childrenLink: {
      width: string,
      color: string,
    },
  },

  children: Array<TreeNode>
};
```
