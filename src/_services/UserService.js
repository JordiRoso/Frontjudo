import axios from "axios";
import { environment } from "../_environment/environment";


const UserService = {};

UserService.postUsers = async (token) => {
    const apiUrl = environment.BASE_API_URL + "/register";

    const config = {
        headers: { Authorization : `Barer ${token}`},
    };

    return await axios.post(apiUrl, config);
};

export default UserService;