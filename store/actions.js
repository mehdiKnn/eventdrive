import eventService from "../services/event.service"

export default {
    getEvents({commit}) {
        eventService.getAll()
            .then((response) => {
                localStorage.setItem('events', JSON.stringify(response.items))
                commit('setEvents', response.items)
            })
    },

    addEvent({commit}, data) {
        eventService.create(data)
            .then((response) => {
                commit('unsetErrors')
                commit('unsetFormData')
                commit('pushEvent', response.data)
                let cache = JSON.parse(localStorage.getItem('events'))
                cache.push(response.data)
                localStorage.setItem('events', JSON.stringify(cache))
            })
            .catch((err) => {
                commit('setErrors', err.response.data.errors)
            })
    },

    deleteEvent({commit}, id) {
        eventService.delete(id)
            .then(() => {
                let cache = JSON.parse(localStorage.getItem('events'))
                cache = cache.filter((el) => {
                    return el.id !== id
                })
                localStorage.setItem('events', JSON.stringify(cache))
                commit('deleteEvent', id)
            })
    },

    updateEvent({commit}, data) {
        eventService.update(data)
            .then((response) => {
                commit('unsetErrors')
                commit('unsetFormData')
                commit('pushEvent', response.data)
                let cache = JSON.parse(localStorage.getItem('events'))
                cache.push(response.data)
                localStorage.setItem('events', JSON.stringify(cache))
            })
            .catch((err) => {
                commit('setErrors', err.response.data.errors)
            })
    }
}