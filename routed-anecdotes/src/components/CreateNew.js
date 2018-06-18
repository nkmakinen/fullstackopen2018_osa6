import React from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

class CreateNew extends React.Component {
    constructor() {
        super()
            this.state = {
            content: '',
            author: '',
            info: ''
        }
    }

    handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.addNew({
            content: this.state.content,
            author: this.state.author,
            info: this.state.info,
            votes: 0
        })

        this.props.history.push('/')
    }

    render() {
        return(
            <div>
                <h2>create a new anecdote</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <ControlLabel>content</ControlLabel>
                        <FormControl 
                            name="content"
                            value={this.state.content}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>author</ControlLabel>
                        <FormControl 
                            name="author"
                            value={this.state.author}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>url for more info</ControlLabel>
                        <FormControl 
                            name="info"
                            value={this.state.info}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button type="submit" bsStyle="primary">create</Button>
                </form>
            </div>  
        )
    }
}

export default CreateNew