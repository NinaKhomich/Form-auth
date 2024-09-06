export default class MainApi {

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  getUsers() {
    return fetch('http://localhost:8000/users', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => this._checkResult(res));
  }

  // login = ({ email, password }) => {
  //   return fetch('http://localhost:3000/users', {
  //     method: "POST",
  //     headers: {"Content-Type": "application/json"},
  //     body: JSON.stringify({ email, password }),
  //   })
  //   .then((res) => this._checkResult(res));
  // }
}