export const leftTree = {
  id: "1",
  label: "才华有限公司",
  twAttrs: {
    collapse: false,
    childrenLink: {
      width: "50px",
      color: "yellow",
    },
  },
  children: [
    {
      id: "1-1",
      type: "股东",
      label: "股东1",
      twAttrs: {
        parentLink: {
          width: "100px",
          color: "red",
        },
        childrenLink: {
          width: "50px",
          color: "yellow",
        },
      },
      children: [
        {
          id: "1-1-1",
          type: "公司",
          label: "公司1",
          per: "50.00%",
          twAttrs: {
            collapse: true,
            parentLink: {
              width: "100px",
            },
          },
          children: [
            {
              id: "1-1-1-1",
              type: "公司",
              label: "公司xx",
            },
          ],
        },
        {
          id: "1-1-2",
          type: "公司",
          label: "公司2",
          per: "50.00%",
          twAttrs: {
            parentLink: {
              width: "100px",
            },
          },
        },
      ],
    },
    {
      id: "1-2",
      type: "股东",
      label: "股东2",
      twAttrs: {
        parentLink: {
          width: "100px",
        },
      },
      children: [
        {
          id: "1-2-1",
          type: "公司",
          label: "公司1",
          per: "50.00%",
          twAttrs: {
            parentLink: {
              width: "100px",
            },
          },
        },
        {
          id: "1-2-2",
          type: "公司",
          label: "公司2",
          per: "50.00%",
          twAttrs: {
            parentLink: {
              width: "100px",
            },
          },
        },
      ],
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
      ],
    },
  ],
};
