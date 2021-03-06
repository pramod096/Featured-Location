import axios from "axios";

// const url = 'http://localhost:8000/api/locations';
const url = "api/locations";

class LocationService {
  static async getLocations() {
    const res = new Promise((resolve) => {
      setTimeout(() => resolve(axios.get(url)));
    });

    const data = await res;

    return data;
  }

  static async postLocation(formData) {
    axios.post(url, formData);
  }

  static async putLocation(formData) {
    axios.put(url, formData);
  }

  static async deleteLocation(deleteL) {
    axios.delete(url, { data: { _id: deleteL } });
  }

  static async likeIncrease(currentLocation) {
    axios.patch(url, currentLocation);
  }
}

export default LocationService;
