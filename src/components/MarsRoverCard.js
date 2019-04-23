import React from 'react'

class MarsRoverCard extends React.Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div className={'card'}>
        <div className="card-header">
          <h3 className="card-header-title">Date: {this.props.earth_date}</h3>
        </div>
        <div className="card-image">
          <figure className="image">
            <img src={this.props.img_src} alt={this.props.rover.name} />
          </figure>
        </div>
        <div className="card-content">
          <h4 className="is-3">{this.props.camera.full_name}</h4>
          <h5 className="is-3">{this.props.rover.name}</h5>
        </div>
      </div>
    )
  }
}

export default MarsRoverCard
