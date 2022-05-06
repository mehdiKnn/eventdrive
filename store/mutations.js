import moment from "moment"

export default {
    setEvents(state, events) {
        state.events = events
    },
    pushEvent(state, data) {
        state.events.push(data)
    },
    deleteEvent(state, id) {
        state.events = state.events.filter((el) => {
            return el.id !== id
        })
    },
    setErrors(state, errors) {
        state.errors = errors
    },
    unsetErrors(state) {
        state.errors = []
    },

    unsetFormData(state) {
        state.editing = false

        state.formData = {
            main_manager_id: 5962,
            start_date: null,
            end_date: null,
            default_locale: 'fr',
            available_locales: ['fr'],
            name: {
                fr: null
            },
            description: {
                fr: null
            },
            timezone: 'Europe/Paris'
        }
    },

    pushFormData(state, {
        main_manager_id,
        start_date,
        end_date,
        default_locale,
        available_locales,
        name,
        description,
        timezone,
        id
    }) {

        state.editing = true

        end_date = moment(end_date).format("YYYY-MM-DD")
        start_date = moment(start_date).format("YYYY-MM-DD")

        state.formData = {
            main_manager_id,
            start_date,
            end_date,
            default_locale,
            available_locales,
            name,
            description,
            timezone,
            id
        }
    },

}