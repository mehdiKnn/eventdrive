import api from "./api"
import TokenService from "./token.service"
import qs from 'qs'

class AuthService {
    login(){
        const data = {
            "client_id":process.env.VUE_APP_CLIENT_ID+"",
            "client_secret":process.env.VUE_APP_CLIENT_SECRET+""
        }
        return api.post("/token",qs.stringify(data))
            .then((response) => {
                if (response.data.access_token){
                    TokenService.setToken(response.data)
                }
                return response.data
        })
    }
}

export default new AuthService()