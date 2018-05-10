import axios from 'axios';
import contentUrls from './servicesUrls';

export const getProductByNameFromDB = name => {
  const options = {
    method: 'GET',
    url: `${contentUrls.wistoreServer}/api/food?q=${name}`,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  return axios(options)
    .then(products => products.data)
    .catch(err => console.error('Could not retrieve products: ', err));
};
export const getProductByNameFromList = (name, list) =>
  list.filter(item => item !== name);

export const getDiscountsByNameFromDB = name =>
  getProductByNameFromDB(name).then(product => product.data);
