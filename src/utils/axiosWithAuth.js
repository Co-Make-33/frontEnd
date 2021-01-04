import axios from 'axios';

const axiosWithAuth = () => {

    const token = sessionStorage.getItem('token');

    return axios.create({
        baseURL: 'https://co-make-33.herokuapp.com',
        headers: {  
            authorization: token
        }
    })

}
export default axiosWithAuth