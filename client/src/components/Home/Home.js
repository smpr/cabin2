import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import { Container, FormContainer, BodyContainer, TextLabelStyle } from "../StyledComponents/DefaultStyle"
export default class Home extends Component {
  state = {
    email: '',
    password: '',
    password_confirmation: '',
    redirectToCategoryPage: false
  }
  render() {
    return (
      <BodyContainer>
        <Container>
          <FormContainer>
            <form>
              <div>
                <h2>Log In</h2>
              </div>
              <div>
                <TextField
                  hintText="Email"
                  floatingLabelText="Email"
                  floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                  floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                  onChange={this.handleChange}
                  name="email"
                  type="text"
                  required
                  value={this.state.email}
                />
                {/* <label htmlFor="email">E-mail: </label>
                                <input onChange={this.handleChange} type="text" name="email" value={this.state.email} /> */}
              </div>
              <div>
                <TextField
                  hintText="Password"
                  floatingLabelText="Password"
                  floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                  floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                  onChange={this.handleChange}
                  name="password"
                  type="password"
                  required
                  value={this.state.password}
                />
                {/* <label htmlFor="password">Password: </label>
                                <input onChange={this.handleChange} type="password" name="password" value={this.state.password} /> */}
              </div>
              {/* <div>
                                <RaisedButton href={`/Users/Create`} label="Sign up" style={Style} />
                                <RaisedButton onClick={this.signIn} label="Login" style={Style} />
                            </div> */}
            </form>
          </FormContainer>
        </Container>
      </BodyContainer>
    )
  }
}
