import axios from 'axios';

let baseURL ='http://localhost:3000';


class API {
    static async getInitialUser(id){
        return axios.get(baseURL+`/user/${id}`)
    }
}

export default API;