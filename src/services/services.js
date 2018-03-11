import axios from 'axios';
import contentUrls from './servicesUrls';

export const getProductByNameFromDB = name =>
  axios
    .get(contentUrls.mockDataUrl)
    .then(products => products.data)
    .catch(err => {
      console.error('Could not retrieve products: ', err);
    });

export const getProductByNameFromList = (name, list) => list.filter(item => item !== name);

export const getDiscountsByNameFromDB = name =>
  new Promise((resolve, reject) => {
    try {
      //Get information from the DB
      getProductByNameFromDB(name).then(data => resolve(data));
    } catch (error) {
      console.error('Error retrieving product');
      reject(error);
    }
  });
