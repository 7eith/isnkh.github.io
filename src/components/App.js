/* ******************************************************************** */
/*                                                                      */
/*   [snkh.me] App.js                                                   */
/*                                                                      */
/*   Author: Snkh <inquiries@snkh.me>                                   */
/*                                                                      */
/*   Created: 22/09/2019 03:19:09 by Snkh                               */
/*   Updated: 22/09/2019 03:19:15 by Snkh                               */
/*                                                                      */
/*   Synezia Corp. (c) 2019 - MIT                                       */
/*                                                                      */
/* ******************************************************************** */

import React, { Component } from 'react';
import './App.scss';

import Navbar from './Layouts/Navbar';
import Loader from './Loader';

class App extends Component {
  state = { loading: true };

  componentDidMount() {
    setTimeout(() => {
      // this.setState({loading: false})
    }, 4000)
  }
  
  render() {
    if (this.state.loading) return <Loader />;
    return (
      <div className="App">
        <Navbar />
        
      </div>
    );
  }
}

export default App;
