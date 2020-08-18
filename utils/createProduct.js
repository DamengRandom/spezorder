import axios from 'axios';
// functions

export default (userId, data, setFailed, setShowModal) =>
  axios({
    method: 'post',
    url: `https://135zlxhhmj.execute-api.ap-southeast-2.amazonaws.com/dev/products/${userId}`,
    headers: {
      'Content-Type': 'application/json'
    },
    data
  })
  .then(function () {
    setFailed(false);
    setShowModal(false);
  })
  .catch(function (error) {
    setFailed(true);
    console.log('Erorr of creating product: ', error);
  });
