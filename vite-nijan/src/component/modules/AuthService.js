import http from "./http-common";

class AuthSevice {

    login(user) {
      
      return http
        .post('http://localhost:8888/api/auth/sign-in', {
          username: user.username,
          password: user.password
        })
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error;
        });
    }
  
    logout() {
      localStorage.removeItem("user")
    }
  
    register(user) {
      return http.post('http://localhost:8888/api/auth/sign-up', {
        username: user.username,
        email: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: "",
      });
    }
  
  }
  
  export default new AuthSevice(); 