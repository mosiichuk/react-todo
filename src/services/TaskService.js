import ApiService from "./ApiService";

const apiService = new ApiService();

export default class TaskService {
    async getAllTasks() {
        return await apiService.doGet('/task');
    }

    async addTask(data = {}) {
        return await apiService.doPost('/task', data);
    }

    async updateTask(id, data = {}) {
        return await apiService.doPut(`/task/${id}`, data);
    }

    async deleteTask(id) {
        return await apiService.doDelete(`/task/${id}`);
    }
}