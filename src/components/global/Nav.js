import React, { Component } from 'react';
import Icon from './Icon.js';
import '../../styles/components/global/Nav.scss'

export class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="container container--nav d-flex align-items-center h-100">
          <div className="row">
            <div className="col-4 d-flex align-items-center h-100 position-relative">
              <Icon width="24px" height="24px" x="-227px" y="147px"/>
              <div className="vr"></div>
              <img className="nav__logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="brand logo"/>
            </div>
            <div className="col-5 d-flex jusity-content-center align-items-center">
              <form className="w-100 d-flex justify-content-center">
                <input className="nav__search" placeholder="Search" type="text"/> 
              </form>
            </div>
            <div className="col-3 d-flex justify-content-end align-items-center">
              <div className="ml-3">
                <Icon width="24px" height="24px" x="-252px" y="147px"/>
              </div>
              <div className="ml-3">
                <Icon width="24px" height="24px" x="-75px" y="50px"/>
              </div>
              <div className="ml-3">
                <Icon width="24px" height="24px" x="-200px" y="75px"/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav
