import eventService from "../services/event.service";
export default {
    getEvents({commit}){
        eventService.getAll().then((response)=>{
            commit('setEvents',response.items)
        })
    },

    addEvent({commit},data){
        eventService.create(data).then((response)=>{
            commit('unsetErrors')
            commit('pushEvent', response.data)
        }).catch((err)=>{
            commit('setErrors', err.response.data.errors)
        })
    },

    deleteEvent({commit},id){
        eventService.delete(id).then(()=>{
            commit('deleteEvent', id)
        })
    }
}