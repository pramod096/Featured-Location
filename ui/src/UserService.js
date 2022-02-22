import axios from "axios";

// const url = 'http://localhost:8000/api/users';
const url = "api/users";

class UserService {
  static async getUsers() {
    const res = new Promise((resolve) => {
      setTimeout(() => resolve(axios.get(url)));
    });

    const data = await res;

    console.log(data);

    return data;
  }

  static async postUser(userName, email, password) {
    axios.post(url, {
      userName,
      email,
      password,
    });
  }
}

export default UserService;
