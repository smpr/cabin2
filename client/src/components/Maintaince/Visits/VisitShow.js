import React, { Component } from 'react'
import { Container, FormContainer, BodyContainer, Style } from "../../StyledComponents/DefaultStyle"
import axios from 'axios'
export default class VisitShow extends Component {
  state = {
    visit: {}
  }
  async componentDidMount() {
    try {
      const issueId = this.props.match.params.MaintId
      const visitId = this.props.match.params.VisitId
      const visit = await axios.get(`/api/issues/${issueId}/visits/${visitId}`)
      this.setState({ visit: visit.data })
      console.log(visit.data)
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <Container>
        <FormContainer>
          <div>
            <ul>
              <div>
                <h2>Visit Summary:</h2>
              </div>
              <li>Technician: {this.state.visit.technician}</li>
              <li>Date of Visit: {this.state.visit.dateVisit}</li>
              <li>Issue Resolved: {this.state.visit.fixedProblem}</li>
              <li>Notes: {this.state.visit.notes}</li>
            </ul>
          </div>
        </FormContainer>
      </Container>
    )
  }
}
