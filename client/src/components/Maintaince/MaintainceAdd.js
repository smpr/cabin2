import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class MaintainceAdd extends Component {
  state = {
    issue: [],
    redirectToMaint: false
  }
  handleChange = (event) => {
    const updateIssue = {
        ...this.state.issue
    }
    updateIssue[event.target.name] = event.target.value
    this.setState({ issue: updateIssue })
}
handleSubmit = async (event) => {
  event.preventDefault()
  await axios.post(`/api/issues`, { issue: this.state.issue })
  this.setState({ redirectToMaint: true })

}
  render() {
    if (this.state.redirectToMaint) {
      return <Redirect to="/maintenance" />
    }
    return (
      <BodyContainer>
      <Container>
          <form>
              <FormContainer>
                  <div>
                      <div>
                          <h2>Create an Issue:</h2>
                      </div>
                      <div>
                          <TextField
                              hintText="Issue Title"
                              floatingLabelText="Issue Title"
                              floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                              floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                              onChange={this.handleChange}
                              name="title"
                              type="text"
                              required
                              value={this.state.issue.title}
                          />
                      </div>
                      <div>
                          <TextField
                              hintText="Location"
                              floatingLabelText="Location"
                              floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                              floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                              onChange={this.handleChange}
                              name="location"
                              type="text"
                              required
                              value={this.state.issue.location}
                          />
                      </div>
                      <div>
                          <TextField
                              hintText="Quoted Cost"
                              floatingLabelText="Quoted Cost"
                              floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                              floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                              onChange={this.handleChange}
                              name="quoteCost"
                              type="text"
                              required
                              value={this.state.issue.quoteCost}
                          />
                      </div>
                      <div>
                          <TextField
                              hintText="Notes"
                              floatingLabelText="Notes"
                              floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                              floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                              onChange={this.handleChange}
                              name="notes"
                              type="text"
                              required
                              value={this.state.issue.notes}
                          />
                      </div>
                      <div>
                          <RaisedButton onClick={this.handleSubmit} label="Create Issue" style={Style} />
                      </div>
                  </div>
              </FormContainer>
          </form>
      </Container>
  </BodyContainer>
    )
  }
}
