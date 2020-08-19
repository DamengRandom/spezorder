import axios from 'axios';
// functions

export default (userId, data, setFailed, setShowModal, products, setProducts) =>
  axios({
    method: 'post',
    url: `https://135zlxhhmj.execute-api.ap-southeast-2.amazonaws.com/dev/products/${userId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    data
  })
  .then(() => {
    setFailed(false);
    setShowModal(false);
    setProducts([...products, data]);
  })
  .catch(function (error) {
    setFailed(true);
    console.log('Erorr of creating product: ', error);
  });
