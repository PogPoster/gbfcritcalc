import React, { Component } from 'react'

export class Summons extends Component {
    render() {
        return (
            <div>
                <input type="radio" name="summons" value={4}  onChange={this.props.click}/> 2 Primals ULB<br/>
                <input type="radio" name="summons" value={3.9}  onChange={this.props.click}/> 1 Primal ULB/1 Primal FLB<br/>
                <input type="radio" name="summons" value={3.8}  onChange={this.props.click}/> 2 Primals FLB<br/>
                <input type="radio" name="summons" value={2.5}  onChange={this.props.click}/> 1 Primal ULB<br/>
                <input type="radio" name="summons" value={2.4} onChange={this.props.click}/> 1 Primal FLB<br/>
                <input type="radio" name="summons" value={1} onChange={this.props.click}/> 0 Primal<br/>  
                <input type="radio" name="summons" value={3.8} onChange={this.props.click}/> 1 Demi + 1 Primal ULB<br/>
                <input type="radio" name="summons" value={3.7} onChange={this.props.click}/> 1 Demi + 1 Primal FLB<br/>
                <input type="radio" name="summons" value={2.3} onChange={this.props.click}/> 1 Demi<br/>
                <input type="radio" name="summons" value={3.4} onChange={this.props.click}/> 2 magna<br/>
                <input type="radio" name="summons" value={2.2} onChange={this.props.click}/> 1 magna<br/>

            </div>
        )
    }
}

export default Summons
