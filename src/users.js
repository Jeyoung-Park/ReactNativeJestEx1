const URL = 'https://facebook.github.io/react-native/movies.json';

class Users {
  static all() {
    return fetch(URL).then(response => {
      if (response) {
        return response.json();
      }
    });
  }
}

export default Users;
