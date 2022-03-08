import React, { Component } from 'react'

export class Spinner extends Component<any, any> {
  render() {
    return (
      <div>
        <div className="spinner-wrapper">
          <div className="donut"></div>
        </div>
      </div>
    )
  }
}

export default Spinner
