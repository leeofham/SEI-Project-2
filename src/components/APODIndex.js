import React from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

// import EarthCard from './EarthCard'

class APODIndex extends React.Component{

  constructor() {
    super()

    this.state = {
      data: [],
      date: '2018-03-07'
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateImages = this.updateImages.bind(this)
  }

  componentDidMount(){
    axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        date: this.state.date,
        hd: true,
        api_key: '0NeW5J5VXCp6NRbCOu6Yv5ANYejzU73uezmTIfTv'
      }
    })
      .then(res => this.setState({data: res.data }))
  }

  updateImages(){
    axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        date: this.state.date,
        hd: true,
        api_key: '0NeW5J5VXCp6NRbCOu6Yv5ANYejzU73uezmTIfTv'
      }
    })
      .then(res => this.setState({data: res.data }))
  }

  handleChange(e){
    const date = e.target.value
    this.setState({ date }, () => this.updateImages())
  }

  render(){
    console.log(this.state.data)
    return(
      <section className='section'>
        <div className='container'>
          <input type='date' onChange={this.handleChange} value={this.state.date} />
          <div className='columns is-multiline'>
            <div className='column is-8'>
              <figure className='image'>
                <img src={this.state.data.url} alt={this.state.data.title} />
              </figure>
            </div>
            <div className='column is-4'>
              <h2 className='title'>{this.state.data.title}</h2>
              <h2 className='subtitle is-italic'>{this.state.data.copyright}</h2>
              <p className='has-text-weight-bold is-size-6'>{this.state.data.date}</p>
              <hr />
              <p>{this.state.data.explanation}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default APODIndex
