import React from 'react'

const Notification = ({ message }) => {
    let style = {}
    if (message.length === 0) {
        style = {
            display: 'none'
        }
    } else {
        style = {
            color: 'green',
            border: '1px solid green',
            borderRadius: 5,
            margin: 15,
            padding: 10,
            display: 'block'
        }
    }

    return (
        <div>
            <div style={style}>
                {message}
            </div>
        </div>
    )
}

export default Notification