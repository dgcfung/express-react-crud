import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Heros extends Component {
    constructor (props) {
      super(props)
  
      this.state = {
        heros: []
      }
    }

    async componentDidMount () {
        try {
          const response = await axios(`http://localhost:3001/heros`)
          console.log(response)
          this.setState({ heros: response.data })
        } catch (err) {
          console.error(err)
        }
      }


      render () {
          return (
            <>
              <h4>Heros</h4>
              <ul>
                  {this.state.heros.length > 1 &&this.state.heros.map(hero => (
              <li key={hero.id}>
                <Link to={`/heros/${hero.id}`}>{hero.hero}</Link>
              </li>
        ))}
              </ul>
            </>
          )
        
        return(
          <div>Loading</div>
        )
        
      }
    }
    
    export default Heros