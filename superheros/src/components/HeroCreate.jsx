import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import HeroForm from './shared/HeroForm'
import Layout from './shared/Layout'

class HeroCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hero: {
                hero: '',
                side_kick: '',
                id: null
            },
            updated: false
        }
    }

    handleChange = event =>{
      console.log('her')
        const createdField= {
            [event.target.name]: event.target.value}
            console.log(createdField)

            const createdItem = Object.assign(this.state.hero, createdField)

            this.setState({hero: createdItem})
        }


        handleSubmit = event => {
            event.preventDefault()
            console.log('submit')
            console.log(this.state)

            axios({
                url: `http://localhost:3001/createHeros`,
                method: 'POST',
                data: { hero: this.state.hero.hero, side_kick: this.state.hero.side_kick }
            })
                .then((res) => console.log(res))
                .catch(console.error)
        }
    


    render(){
      return(
        <Layout>
          <HeroForm hero={this.state.hero} 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
            cancelPath={`/items/${this.props.match.params.id}`}
            />
        </Layout>
      )
    }


}


export default HeroCreate