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

UserService.getAllUsers = async (token) => {
    const apiUrl = environment.BASE_API_URL + "/users";
 
    const config = {
       headers: { Authorization: `Bearer ${token}` },
    };
 
    return await axios.get(apiUrl, config);
 };

 UserService.getId = async (id) => {
    const apiUrl = `${environment.BASE_API_URL} + "/users/id/${id}`;
 
    const config = {
       headers: { Authorization: `Bearer ${token}` },
    };
 
    return await axios.get(apiUrl, config);
 };

 UserService.deleteUser = async (user) => {
    try{
       const apiUrl = `${environment.BASE_API_URL}/users/delete/${user._id}`;
       const res = await axios.delete(apiUrl);
 
       return res.data;
 
    }catch (error){
       console.log(error);
 
    }
 };


//  UserService.updateUser = async (req, res) => {
//     try {
//       const user = await UserService.updateUser(req.params.id, req.body);
//       res.status(200).json({ user });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error updating user.' });
//     }
//   };


UserService.updateUser = async (updateUser_id , updatedUser) => {
  console.log(updateUser_id)
  console.log(updatedUser)
   try {
     const apiUrl = `${environment.BASE_API_URL}/users/${updateUser_id }`;
     const response = await axios.patch(apiUrl, updatedUser);
     console.log("PUT:",response)
     return response.data;
   } catch (error) {
     console.error(error);
     throw error;
   }
 };

 
 

 


export default UserService;