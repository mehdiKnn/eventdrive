class TokenService{

    getLocalAcessToken(){
       return JSON.parse(localStorage.getItem("token"))
    }

    updateLocalAccessToken(token){
        let current = JSON.parse(localStorage.getItem("token"))
        if (!current){
          return this.setToken(token)
        }
        current = token
        localStorage.setItem("token", JSON.stringify(current))
    }

    setToken(token) {
        localStorage.setItem("token", JSON.stringify(token));
    }

}

export default new TokenService()