import React from 'react'

import Store from '../lib/Store'

class MarsRoverShow extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      datum: this.props.location.state || Store.getStore()
    }
    this.stringifyDatum = this.stringifyDatum.bind(this)
  }


  stringifyDatum(){
    const datum = JSON.stringify(this.state.datum)
    Store.setStore(datum)
  }

  render(){
    this.stringifyDatum()
    return(
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-6">
              <figure className="image">
                <img src={this.state.datum.img_src} alt="image" />
              </figure>
            </div>
            <div className="column is-6">
              {<h2>{this.state.datum.rover.name}</h2>}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default MarsRoverShow
