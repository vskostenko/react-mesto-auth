const baseUrl = 'https://auth.nomoreparties.co.';

export function singUp (password,email) {
    return fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "password" : password,
        "email" : email
      })
    })
}
export function singIn (password,email) {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      "password" : password,
      "email" : email
    })
  })
}
export function checkToken () {
  return fetch(`${baseUrl}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};