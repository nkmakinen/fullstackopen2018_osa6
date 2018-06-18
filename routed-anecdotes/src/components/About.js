import React from 'react'
import { Image, Row, Col } from 'react-bootstrap'

const imgStyle = {
    height: 300
}

const About = () => (
    <div>
        <h2>About anecdote app</h2>

        <Row className="show-grid">
            <Col sm={8} md={8}>
                <p>According to Wikipedia:</p>
        
                <em>An anecdote is a brief, revealing account of an individual person or an incident. 
                Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself, 
                such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative. 
                An anecdote is "a story with a point."</em>

                <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
            </Col>
            <Col sm={4} md={4}>
                {/* <img style={imgStyle} src="https://i.imgur.com/nruvadd.jpg" /> */}
                <Image style={imgStyle} thumbnail responsive src="https://i.imgur.com/nruvadd.jpg" />
            </Col>
        </Row> 
    </div>
)

export default About