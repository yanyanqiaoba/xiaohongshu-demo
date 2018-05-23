// use localStorage to store the authority info, which might be sent from server in actual project.
export function getAuthority() {
  return localStorage.getItem('saml-token') || 'no-login';
}

export function setAuthority(authority) {
  return localStorage.setItem('saml-token', authority);
}
