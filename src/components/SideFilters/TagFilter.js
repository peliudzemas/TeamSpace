export const TagFilter = (productList, filterList) => {
  if (
    Object.keys(filterList).length === 0 ||
    Object.values(filterList).every((i) => i.length === 0)
  ) {
    return productList;
  } else {
    for (let key in filterList) {
      if (filterList[key].length === 0) {
        delete filterList[key];
      }
    }
    const filteredList = productList.filter((product) => {
      return Object.keys(filterList).every((key) => {
        return filterList[key].some((item) => {
          return Object.values(product).includes(item);
        });
      });
    });

    return filteredList;
  }
};
