const stagingBaseUrl = 'https://wistore-server.herokuapp.com';
const localBaseUrl = 'http://localhost:4300';
console.log('Env: ', process.env.NODE_ENV);
const urlToUse =
  process.env.NODE_ENV === 'production' ? stagingBaseUrl : localBaseUrl;
export default {
  mockDataUrl: './mock-data/products.json',
  tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  wistoreServer: `${urlToUse}`
};
