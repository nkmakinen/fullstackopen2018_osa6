const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return action.notification
        default:
            return state
    }
}

export const notify = (notification, duration) => {
    return async (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: 'SHOW_NOTIFICATION',
                notification: ''
            })
        }, duration * 1000)

        dispatch({
            type: 'SHOW_NOTIFICATION',
            notification
        })
    }
}

export default notificationReducer