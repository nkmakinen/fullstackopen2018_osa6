import React from 'react'
import { notify } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import { anecdoteVoted } from '../reducers/anecdoteReducer'
            
const AnecdoteList = (props) => {
    const handleVote = async (anecdote) => {
        const newAnecdote = {
            id: anecdote.id,
            content: anecdote.content,
            votes: anecdote.votes + 1
        }

        props.anecdoteVoted(anecdote.id, newAnecdote)
        props.notify('you voted \'' + anecdote.content + '\'', 5)
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {props.visibleAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => handleVote(anecdote)}>
                            vote
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

const anecdotesToShow = (anecdotes, filter) => {
    if (filter === 'ALL') {
        return anecdotes
    }

    return anecdotes.filter((anecdote) => {
        return anecdote.content.toLowerCase().includes(filter.toLowerCase())
    })
}

const mapStateToProps = (state) => {
    return {
        visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
    }
}

export default connect(
    mapStateToProps,
    { anecdoteVoted, notify }
)(AnecdoteList)