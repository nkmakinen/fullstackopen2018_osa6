import React from 'react'
import { notify } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const Notification = (props) => {
    console.log('notification render(), props: ', props)

    let style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    }

    if (props.notification.length === 0) {
        style.display = 'none'
    }

    return (
        <div style={style}>
            {props.notification}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        notification: state.notification
    }
}

export default connect(
    mapStateToProps,
    { notify }
)(Notification)