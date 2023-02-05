function createCookie(name, value, h) {
  // eslint-disable-next-line no-undef
  document.cookie = `${name}=${value || ''};`;
}

function getCookie(name) {
  var nameEQ = `${name}=`;
  // eslint-disable-next-line no-undef
  var ca = document.cookie.split(';');
  var c: null | string = null;
  for (let i = 0; i < ca.length; i++) {
    c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
// eslint-disable-next-line vars-on-top, import/no-mutable-exports
var deleteCookie = (name)=> {
  if (getCookie(name)) {
    // eslint-disable-next-line no-undef
    document.cookie = `${name}=`
      + '; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  }
};
export { createCookie, getCookie, deleteCookie };
