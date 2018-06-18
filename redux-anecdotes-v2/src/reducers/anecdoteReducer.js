import anecdoteService from '../services/anecdotes'

const getId = () => (100000*Math.random()).toFixed(0)

const reducer = (store = [], action) => {
    if (action.type === 'VOTE') {
        const old = store.filter(a => a.id !== action.id)
        const voted = store.find(a => a.id === action.id)
        return [...old, { ...voted, votes: voted.votes+1 }]
    } else if (action.type === 'INIT_ANECDOTES') {
        return action.data
    } else if (action.type === 'CREATE') {
        console.log('CREATE, action:', action)
        return [...store, { content: action.newAnecdote.content, id: getId(), votes: 0 }]
    } else {
        return store
    }
}

export const anecdoteInitialization = () => {
    return async (dispatch) => {
        const anecdotes = await anecdoteService.getAll()
        dispatch({
            type: 'INIT_ANECDOTES',
            data: anecdotes
        })
    }
}

export const createAnecdote = (content) => {
    return async (dispatch) => {
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch({
            type: 'CREATE',
            newAnecdote
        })
    }
}

export const anecdoteVoted = (id, newAnecdote) => {
    return async (dispatch) => {
        await anecdoteService.update(id, newAnecdote)

        dispatch({
            type: 'VOTE',
            id: id
        })
    }
}

export default reducer