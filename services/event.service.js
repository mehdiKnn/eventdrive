import api from "./api";

class EventService{
     getAll(){
       return api.get("/events").then((response)=>{
          return response.data
        })
    }

    create(data){
         return api.post('/events',data).then((response)=>{
             return response
         })
    }

    delete(id){

         return api.delete(`/events/${id}`).then((response)=>{
             return response
         })

    }
}

export default new EventService()