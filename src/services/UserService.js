import ApiService from "./ApiService";

const apiService = new ApiService();

export default class UserService {
    async registerUser(data = {}) {
        let {user, token} = await apiService.doPost('/user/register', data);
        localStorage.setItem('token', token);
        localStorage.setItem('user', user);
    }

    async loginUser(data = {}) {
        let {user, token} = await apiService.doPost('/user/login', data);
        localStorage.setItem('token', token);
        localStorage.setItem('user', user);
    }

    async logoutUser() {
        await apiService.doPost('/user/logout');
    }
}