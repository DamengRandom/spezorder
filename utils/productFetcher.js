export default userId =>
  fetch(`https://135zlxhhmj.execute-api.ap-southeast-2.amazonaws.com/dev/user/${userId}/products`)
    .then(res => res.json())
    .then(res => res);
