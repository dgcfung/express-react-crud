import React from 'react'
import { Link } from 'react-router-dom'

const HeroForm = ({ hero, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder="hero"
      value={hero.hero}
      name="hero"
      onChange={handleChange}
    />

    <label>Link</label>
    <input
      placeholder="sidekick"
      value={hero.side_kick}
      name="side_kick"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default HeroForm