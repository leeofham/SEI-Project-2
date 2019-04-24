import React from 'react'

import axios from 'axios'

class MarsRoverCarousel extends React.Component{

  constructor(){
    super()
    this.state = {
      active: false,
      date: new Date('2019-03-31'),
      data: []
    }

    this.updateImages = this.updateImages.bind(this)
    this.toggleActive = this.toggleActive.bind(this)

  }

  toggleActive() {
    this.setState({ active: !this.state.active })
  }

  componentDidMount(){
    this.updateImages()
  }

  updateImages(){
    axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
      params: {
        earth_date: this.state.date,
        page: 1,
        api_key: '0NeW5J5VXCp6NRbCOu6Yv5ANYejzU73uezmTIfTv'
      }
    })
      .then(res => this.setState({data: res.data.photos },))
  }

  render(){
    return(
      <section className='section'>
        <div className='container'>
          <div className='columns is-multiline'>
            {this.state.data.map(datum =>
              <div key={datum.id} className='column is-one-quarter-desktop is-one-third-tablet'>
                <figure className='image'>
                  <img src={datum.img_src} alt={datum.id} onClick={this.toggleActive} />
                </figure>
                <div className={`modal ${this.state.active ? ' is-active' : ''}`}>
                  <div className="modal-background"></div>
                  <div className="modal-content">
                    <p className="image">
                      <img src={datum.img_src} alt={datum.id} />
                    </p>
                  </div>
                  <button className="modal-close is-large" aria-label="close" onClick={this.toggleActive}></button>
                </div>

              </div>
            ).splice(0, 4)}
          </div>
        </div>
      </section>
    )
  }
}

export default MarsRoverCarousel
