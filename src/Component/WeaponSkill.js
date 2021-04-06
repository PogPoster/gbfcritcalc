import React, { Component } from 'react'

export class WeaponSkill extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.name} :</td>
                <td style={{padding: "0 15px"}}>{this.props.count}</td>
                <td><button style={{width:"36px"}} type="button" class="btn btn-secondary" onClick={this.props.click.bind(this, this.props.index)}>+</button></td>
                <td><button style={{width:"36px"}} type="button" class="btn btn-secondary" onClick={this.props.minusClick.bind(this, this.props.index)}>-</button></td>
            </tr>
                
            
        )
    }
}

export default WeaponSkill
