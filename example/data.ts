function createNode(parentid: string, type: string, num: number, others: any) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push({
      id: `${parentid}-${i}`,
      type: type,
      label: type + i,
      ...others,
    });
  }

  return arr;
}

export const leftTree = {
  id: "1",
  label: "才华有限公司",
  twAttrs: {
    collapse: false,
    childrenLink: {
      width: "50px",
    },
  },
  children: [
    {
      id: "1-0",
      type: "股东",
      label: "股东1",
      twAttrs: {
        parentLink: {
          width: "100px",
        },
        childrenLink: {
          width: "50px",
          color: "#ffe9d9",
        },
      },
      children: createNode("1-0", "公司", 4, {
        per: "25.00%",
        twAttrs: {
          parentLink: {
            width: "100px",
            color: "#ffe9d9",
          },
        },
      }),
    },
    {
      id: "1-1",
      type: "股东",
      label: "股东2",
      twAttrs: {
        parentLink: {
          width: "100px",
        },
        childrenLink: {
          width: "100px",
          color: "#DFECE4",
        },
      },
      children: createNode("1-1", "公司", 2, {
        per: "50.00%",
        twAttrs: {
          parentLink: {
            width: "100px",
            color: "#DFECE4",
          },
        },
      }),
    },
  ],
};

export const rightTree = {
  id: "2",
  label: "Owner",
  children: [
    {
      id: "2-1",
      type: "高管",
      label: "高管1",
      twAttrs: {},
      children: [
        {
          id: "2-2",
          type: "成员",
          label: "成员1",
        },
        {
          id: "2-",
          type: "成员",
          label: "成员2",
        },
      ],
    },
  ],
};
