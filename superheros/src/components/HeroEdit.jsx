import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import HeroForm from './shared/HeroForm'
import Layout from './shared/Layout'

class HeroEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hero: {
                hero: '',
                side_kick: ''
            },
            updated: false
        }
    }

    async componentDidMount() {
        try {
            const response = await axios(`http://localhost:3001/heros/${this.props.match.params.id}`)
            console.log(response.data)
            this.setState({ hero: response.data })
        } catch (err) {
            console.error(err)
        }
    }

    handleChange = event => {
        const updatedField = { [event.target.name]: event.target.value }
        console.log(updatedField)

        const editedItem = Object.assign(this.state.hero, updatedField)

        this.setState({ hero: editedItem })
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)

        axios({
            url: `http://localhost:3001/heros/${this.props.match.params.id}`,
            method: 'PUT',
            data: { hero: this.state.hero.hero, side_kick: this.state.hero.side_kick  }
        })
            .then(() => this.setState({ updated: true }))
            .catch(console.error)
    }

    render() {
        const { hero, updated } = this.state
        const { handleChange, handleSubmit } = this

        if (updated) {
            return <Redirect to={`/heros/${this.props.match.params.id}`} />
        }

        return (
            <Layout>
                <HeroForm
                    hero={hero}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    cancelPath={`/items/${this.props.match.params.id}`}
                />
            </Layout>
        )
    }
}

export default HeroEdit