export default {
    setEvents(state, events){
        state.events = events
    },
    pushEvent(state, data){
        state.events.push(data)
    },
    deleteEvent(state, id){
        state.events = state.events.filter((el)=>{
            return el.id !== id
        })
    },
    setErrors(state, errors){
        state.errors = errors
    },
    unsetErrors(state){
        state.errors = []
    }
}