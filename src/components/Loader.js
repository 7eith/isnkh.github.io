/* ******************************************************************** */
/*                                                                      */
/*   [snkh.me] Loader.js                                                */
/*                                                                      */
/*   Author: Snkh <inquiries@snkh.me>                                   */
/*                                                                      */
/*   Created: 22/09/2019 02:42:51 by Snkh                               */
/*   Updated: 22/09/2019 03:12:00 by Snkh                               */
/*                                                                      */
/*   Synezia Corp. (c) 2019 - MIT                                       */
/*                                                                      */
/* ******************************************************************** */

import React, { Component } from 'react';

class Loader extends Component {
    state = { size: '0%' };

    componentDidMount () {
        setTimeout(() => {
            this.setState({ size: '100%' })
        }, 0)
    }
    
    render () {
        return (
            <div class="loadingComponent">
                <div class="loading">
                    <p>Website under construction..</p>
                    <div class="loading-container">
                        <div class="loading-bar" style={{ width: this.state.size }} />
                    </div>
                </div>
            </div>
        )
    }
}
    
export default Loader;
    