
import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
        <div class="preloader">
        <div class="preloader-inner">
            <div class="preloader-icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    )
  }
}
