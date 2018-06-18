import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import About from './components/About'
import AnecdoteList from './components/AnecdoteList'
import CreateNew from './components/CreateNew'
import Footer from './components/Footer'
import Anecdote from './components/Anecdote'
import Notification from './components/Notification'

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            anecdotes: [
                {
                    content: 'If it hurts, do it more often',
                    author: 'Jez Humble',
                    info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
                    votes: 0,
                    id: '1'
                },
                {
                    content: 'Premature optimization is the root of all evil',
                    author: 'Donald Knuth',
                    info: 'http://wiki.c2.com/?PrematureOptimization',
                    votes: 0,
                    id: '2'
                }
                ],
            notification: ''
        }
    }

    addNew = (anecdote) => {
        anecdote.id = (Math.random() * 10000).toFixed(0)
        this.setState({
            anecdotes: this.state.anecdotes.concat(anecdote),
            notification: 'a new anecdote \'' + anecdote.content + '\' was created!'
        })

        setTimeout(() => {
            this.setState({
                notification: ''
            })
        }, 10000)
    }

    anecdoteById = (id) =>
        this.state.anecdotes.find(a => a.id === id)

    vote = (id) => {
        const anecdote = this.anecdoteById(id)

        const voted = {
            ...anecdote,
            votes: anecdote.votes + 1
        }

        const anecdotes = this.state.anecdotes.map(a => a.id === id ? voted : a)
        this.setState({ anecdotes })
    }

    render() {
        const menuStyle = {
            background: '#b3bfff',
            padding: 10
        }

        const activeStyle = {
            background: '#FF5722'
        }

        return (
            <div>
                <h1>Software anecdotes</h1>
                <Router>
                    <div>
                        <div style={menuStyle}>
                            <NavLink activeStyle={activeStyle} exact to="/">anecdotes</NavLink> &nbsp;
                            <NavLink activeStyle={activeStyle} exact to="/create">create new</NavLink> &nbsp;
                            <NavLink activeStyle={activeStyle} exact to="/about">about</NavLink> &nbsp;
                        </div>
                        <Notification message={this.state.notification} />
                        <Route exact path="/" render={() => <AnecdoteList anecdotes={this.state.anecdotes} />} />
                        <Route path="/create" render={({ history }) => <CreateNew history={history} addNew={this.addNew} />} />
                        <Route path="/about" render={() => <About />} />

                        <Route exact path="/anecdotes/:id" render={({match}) =>
                            <Anecdote anecdote={this.anecdoteById(match.params.id)} />}
                        />
                    </div>
                </Router>
                <Footer />
            </div>
        )
    }
}

export default App