import url from "./URL";

export function flattenProducts(data) {
  return data.map(item => {
    //cloudinary
    // let image = item.image.url;
    let image = `${url}${item.image.url}`;
    return { ...item, image };
  });
}

export function featuredsProduct(data) {
  return data.filter(item => {
    return item.featured === true;
  });
}
