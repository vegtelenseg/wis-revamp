import axios from 'axios';
import contentUrls from './servicesUrls';

export const getProductByName = name =>
  axios
    .get(contentUrls.mockDataUrl)
    .then(products => products.data)
    .catch(err => {
      console.error('Could not retrieve products: ', err);
    });
