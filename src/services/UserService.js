import ApiService from "./ApiService";

const apiService = new ApiService();

export default class UserService {
    registerUser(data = {}) {
        return apiService.doPost('/user/register', data);
    }

    loginUser(data = {}) {
        return apiService.doPost('/user/login', data);
    }

    logoutUser() {
        apiService.doPost('/user/logout');
    }
}