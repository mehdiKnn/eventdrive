import api from "./api";

class EventService{
    getAll(){
        return api.get("/events").then((response)=>{
            return response.data
        })
    }
}

export default new EventService()