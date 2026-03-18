import axios from "axios";
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://class-website-api-2.onrender.com";
const API_URL = `${API_BASE_URL}/api/user`;

class AuthService {
  login(email, password) {
    return axios.post(API_URL + "/login", { email, password });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(username, email, password, role) {
    return axios.post(API_URL + "/register", {
      username,
      email,
      password,
      role,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
