import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import Layout from './shared/Layout'

class Hero extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        hero:{
          hero: '',
          side_kick: ''
        },
        deleted: false
      }
    }

    async componentDidMount() {
        try {
          const response = await axios(`http://localhost:3001/heros/${this.props.match.params.id}`)
          this.setState({ hero: response.data })
        } catch (err) {
          console.error(err)
        }
      }

      destroy = () => {
        axios({
          url: `http://localhost:3001/heros/${this.props.match.params.id}`,
          method: 'DELETE'
        })
          .then(() => this.setState({ deleted: true }))
          .catch(console.error)
      }

      render() {
        const { hero, deleted } = this.state
    
        if (!hero) {
          return <p>Loading...</p>
        }
    
        if (deleted) {
          return <Redirect to={
            { pathname: '/', state: { msg: 'Item succesfully deleted!' } }
          } />
        }
        return (
            <Layout>
              <h4>Hero: {hero.hero}</h4>
              <p>Sidekick: {hero.side_kick}</p>
              <button onClick={this.destroy}>Delete Item</button>
              <Link to={`/heros/${this.props.match.params.id}/edit`}>
                <button>Edit</button>
              </Link>
              <Link to="/heros">Back to all heros</Link>
            </Layout>
          )
        }
      }
      
      export default Hero