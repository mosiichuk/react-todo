const TODO_API_ENDPOINT = 'https://api-nodejs-todolist.herokuapp.com';


function getEndpointUrl(url = '') {
    return TODO_API_ENDPOINT + url;
}

export default class ApiService {

    async doGet(url = '') {
        const response = await fetch(getEndpointUrl(url))

        return await response.json(); 
    }

    async doPost(url = '', data = {}) {
        const response = await fetch(getEndpointUrl(url), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await response.json();
    }

    async doDelete(url = '') {
        const response = await fetch(getEndpointUrl(url), {
            method: 'DELETE',
        });

        return await response.json();
    }

    async doPut(url = '', data = {}) {
        const response = await fetch(getEndpointUrl(url), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await response.json();
    }
}
