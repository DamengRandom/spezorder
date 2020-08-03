export default useId =>
  fetch(`https://135zlxhhmj.execute-api.ap-southeast-2.amazonaws.com/dev/user/${useId}/products`)
    .then(res => res.json())
    .then(res => res);
