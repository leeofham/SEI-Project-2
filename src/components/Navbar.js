import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      active: false,
      date: ''
    }

    this.toggleActive = this.toggleActive.bind(this)
  }

  // ---------- marsrovershow
  // componentDidMount(){
  //   axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
  //     params: {
  //       earth_date: '2018-06-15',
  //       page: 2,
  //       api_key: '0NeW5J5VXCp6NRbCOu6Yv5ANYejzU73uezmTIfTv'
  //     }
  //   })
  //     .then(res => this.setState({data: res.data.photos }))
  // }
  // ------------

  toggleActive() {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            {/* Navbar branding and burger menu */}
            <Link to="/" className="navbar-item is-size-2">Home</Link>

            <a role="button" className={`navbar-burger ${this.state.active ? ' is-active' : ''}`} onClick={this.toggleActive}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>

          </div>

          <div className={`navbar-menu${this.state.active ? ' is-active' : ''}`}>
            {/* Everything else */}
            <div className="navbar-start">
              {/* left-hand links */}
              <Link to="/marsrover" className="navbar-item">MarsRover</Link>
            </div>
            <div className="navbar-end">
              {/* right-hand links */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

// `withRouter` gives the Navbar `history` via props
export default withRouter(Navbar)
