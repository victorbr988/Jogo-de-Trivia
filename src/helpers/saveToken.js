const setUserToken = (token) => {
  localStorage.setItem('token', token);
};

export default setUserToken;
// if (typeof module !== 'undefined') {
//   module.exports = setUserToken;
// }
