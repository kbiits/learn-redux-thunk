/* eslint-disable no-console */
import HttpClient from '../utils/HttpClient';

class ProductRepository {
  static async getAllProducts() {
    const endpoint = '/products';
    const listOfProducts = await HttpClient
      .get(endpoint)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return listOfProducts;
  }

  static async getProduct(productId) {
    const endpoint = `/products/${productId}`;
    const product = await HttpClient.get(endpoint)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    return product;
  }
}

export default ProductRepository;
