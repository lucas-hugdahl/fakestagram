import React, { Component } from 'react';
import spriteSheet from '../../assets/img/ig-sprite.png';
import '../../styles/components/global/Icon.scss'

export class Icon extends Component {
  render() {
    return (
      <span className="ig-icon"
      style={{
        width: this.props.width,
        height: this.props.height,
        backgroundImage: `url(${spriteSheet})`,
        backgroundPositionY: this.props.y,
        backgroundPositionX: this.props.x
      }}></span>
    )
  }
}

export default Icon
