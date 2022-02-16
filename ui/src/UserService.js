import axios from 'axios';

// const url = 'http://localhost:8000/api/users';
const url = 'api/users';

class UserService {

    static async getUsers() {

        const res = new Promise((resolve) => {
            setTimeout(() => resolve(axios.get(url)))
          });
      
          const data = await res;

          console.log(data);

          return data;
      }



    

}

export default UserService;
