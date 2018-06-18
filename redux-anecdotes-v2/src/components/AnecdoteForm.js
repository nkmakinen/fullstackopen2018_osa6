import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notify } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()

        const content = e.target.anecdote.value
        e.target.anecdote.value = ''

        props.createAnecdote(content)
        props.notify('you created \'' + content + '\'', 5)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={handleSubmit}>
                <div><input name='anecdote'/></div>
                <button>create</button> 
            </form>
        </div>
    )
}

export default connect(
    null,
    { createAnecdote, notify }
)(AnecdoteForm)