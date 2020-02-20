// import url from "./URL";

export function flattenProducts(data) {
  return data.map(item => {
    //cloudinary
    let image = (item.image && item.image.url) || null; //
    //local
    // let image = `${url}${item.image.url}`;
    return { ...item, image };
  });
}

export function featuredsProduct(data) {
  return data.filter(item => {
    return item.featured === true;
  });
}
//paginate
export function paginate(products) {
  const itemsPerPage = 4;
  const numberOfPages = Math.ceil(products.length / itemsPerPage);
  // const newProducts = Array.from({ length: numberOfPages }, () => {
  //   return products.splice(0, itemsPerPage);
  // });
  const newProducts = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;

    return products.slice(start, start + itemsPerPage);
  });
  console.log(newProducts);
  return products;
}
