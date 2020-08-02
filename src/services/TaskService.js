import ApiService from "./ApiService";

const apiService = new ApiService();

export default class TaskService {
    getAllTasks() {
        return apiService.doGet('/task');
    }

    addTask(data = {}) {
        return apiService.doPost('/task', data);
    }

    updateTask(id, data = {}) {
        return apiService.doPut(`/task/${id}`, data);
    }

    deleteTask(id) {
        apiService.doDelete(`/task/${id}`);
    }
}