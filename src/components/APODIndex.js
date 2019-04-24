import React from 'react'

import axios from 'axios'
import DatePicker from 'react-date-picker'


class APODIndex extends React.Component{

  constructor() {
    super()

    this.state = {
      data: [],
      date: new Date(2019, 2, 31)
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateImages = this.updateImages.bind(this)
    this.randomDatePicker = this.randomDatePicker.bind(this)
  }

  componentDidMount(){
    this.updateImages()
  }

  randomDatePicker(){
    const randomYear = Math.floor(Math.random() * 7)
    const randomMonth = Math.ceil(Math.random() * 12)
    const randomDay = Math.ceil(Math.random() * 28)
    const year = 2012 + randomYear
    const date = `${year}-${randomMonth}-${randomDay}`

    this.setState({date: date }, () => this.updateImages(date))
  }

  updateImages(randomDate = null){
    axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        date: randomDate || this.state.date.toISOString().substr(0,10),
        hd: true,
        api_key: '0NeW5J5VXCp6NRbCOu6Yv5ANYejzU73uezmTIfTv'
      }
    })
      .then(res => this.setState({data: res.data }))
  }

  handleChange(date){
    this.setState({ date }, () => this.updateImages())
  }

  render(){
    return(
      <section className='section'>
        <div className='container'>
          <DatePicker
            format={'dd-MM-y'}
            onChange={this.handleChange}
            value={this.state.date}
          />
          <button className='button is-dark' onClick={this.randomDatePicker}>Random Date</button>
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
