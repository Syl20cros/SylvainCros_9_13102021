import axios from 'axios';

let baseURL ='http://localhost:3000';

class API {
    static async getInitialUser(id){
        return axios.get(baseURL+`/user/${id}`)
    }

    static async getActivity (id){
        return axios.get(baseURL+`/user/${id}/activity`)
    }

    static async getSessionDuration (id){
        return axios.get(baseURL+`/user/${id}/average-sessions`)
    }

    static async getPerformance (id){
        return axios.get(baseURL+`/user/${id}/performance`)
    }
}

export default API;