export function getPadding(postion = "is-left", value = "20px") {
  return postion === "is-left"
    ? { paddingRight: value }
    : { paddingLeft: value };
}

export function cls(...args: any[]) {
  return args
    .map((name) => {
      if (typeof name === "string") {
        return name;
      } else {
        const arr = [];

        for (let k in name) {
          if (name[k]) {
            arr.push(k);
          }
        }

        return arr.join(" ");
      }
    })
    .join(" ");
}
