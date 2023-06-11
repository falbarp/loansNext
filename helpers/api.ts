import axios from "axios";

const loansApi = axios.create({
    baseURL: "http://localhost:3000/api/v1"
    }); 

export default loansApi;