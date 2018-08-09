import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';

export default class Nav extends Component {
  render() {
    return (
      <div>
       <RaisedButton href="/" label="Home" />
       <RaisedButton href="/maintenance" label="Maintenance" />
       <RaisedButton href="/reservation" label="Reservations" />
      </div>
    )
  }
}
