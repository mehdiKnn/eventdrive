import TokenService from "./token.service"
import authService from "./auth.service";

const setup = (handler) => {
    handler.interceptors.request.use(
        (config) => {
            const token = TokenService.getLocalAcessToken()
            if (token){
                config.headers["Authorization"] = 'Bearer '+ token
            }
            return config
        },
        (error) =>{
            return Promise.reject(error)
        }
    )

    handler.interceptors.response.use(
        (res)=>{
            return res
        },
        async (err) => {
            const originalConfig = err.config
            if (originalConfig.url !== "/token" && err.response){
                if (err.response.status === 401){
                    try {
                        const rs = await authService.login()
                        const { access_token } = rs
                        TokenService.updateLocalAccessToken(access_token)
                    }catch (_error){
                        return Promise.reject(_error)
                    }
                }
            }
            return Promise.reject(err)
        }
    )
}

export default setup