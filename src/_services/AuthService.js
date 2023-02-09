import axios from "axios";
import {environment} from "../_environment/environment";

const AuthService = {};

const authApiUrl = environment.BASE_API_URL + "/auth";

AuthService.register = async (user) => {
    return await axios.post(authApiUrl * "/register",{
        email: user.email,
        password: user.password,
        name: user.name
    });
};

export default AuthService;