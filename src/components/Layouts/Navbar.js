/* eslint-disable jsx-a11y/anchor-is-valid */
/* ******************************************************************** */
/*                                                                      */
/*   [snkh.me] Navbar.js                                                */
/*                                                                      */
/*   Author: Snkh <inquiries@snkh.me>                                   */
/*                                                                      */
/*   Created: 30/08/2019 23:06:06 by Snkh                               */
/*   Updated: 30/08/2019 23:53:49 by Snkh                               */
/*                                                                      */
/*   Snkh Inc. (c) 2019 - GPL 3.0                                       */
/*                                                                      */
/* ******************************************************************** */

import React, {Component} from 'react';
import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <navbar>
          <div class="logo">Snkh |</div>
          <nav>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <button class="hamburger hamburger--collapse" type="button">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
      </navbar>
    );
  }
}

export default Navbar;