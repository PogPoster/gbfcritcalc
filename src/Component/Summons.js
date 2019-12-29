import React, { Component } from 'react'

export class Summons extends Component {
    render() {
        return (
            <div>
                <input type="radio" name="summons" value={3.8}  onChange={this.props.click}/> 2 Primals<br/>
                <input type="radio" name="summons" value={2.4} onChange={this.props.click}/> 1 Primal<br/>
                <input type="radio" name="summons" value={1} onChange={this.props.click}/> 0 Primal<br/>  
                <input type="radio" name="summons" value={3.7} onChange={this.props.click}/> 1 Demikek + 1 Primal<br/>
                <input type="radio" name="summons" value={2.3} onChange={this.props.click}/> 1 Demikek<br/>
                <input type="radio" name="summons" value={3.4} onChange={this.props.click}/> 2 magna<br/>
                <input type="radio" name="summons" value={2.2} onChange={this.props.click}/> 1 magna<br/>

            </div>
        )
    }
}

export default Summons
