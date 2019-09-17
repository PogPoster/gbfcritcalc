import React, { Component } from 'react'

export class WeaponSkill extends Component {
    render() {
        return (
            <div>
                {this.props.name} : {this.props.count} &nbsp;
                <button onClick={this.props.click.bind(this, this.props.index)}>+</button>
                <button onClick={this.props.minusClick.bind(this, this.props.index)}>-</button>

            </div>
        )
    }
}

export default WeaponSkill
