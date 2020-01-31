// helper functions

export function featuredsProduct(data) {
  return data.filter(item => {
    return item.featured === true;
  });
}
