import axios from "axios";

// const url = 'http://localhost:8000/api/locations';
const url = "api/locations";

class LocationService {
  static async getLocations() {
    const res = new Promise((resolve) => {
      setTimeout(() => resolve(axios.get(url)));
    });

    const data = await res;

    console.log(data);

    return data;
  }
  static async postLocation(formData) {
    axios.post(url, formData);
  }
}

export default LocationService;
