import React, { Component } from 'react'
import { Container, FormContainer, BodyContainer, Style } from "../StyledComponents/DefaultStyle"
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom'
export default class MaintainceShow extends Component {
  state = {
    issue: {},
    visits: []
  }
  async componentDidMount() {
    try {
      const issueId = this.props.match.params.MaintId
      const issue = await axios.get(`/api/issues/${issueId}`)
      const visits = await axios.get(`/api/issues/${issueId}/visits`)
      this.setState({ issue: issue.data, visits: visits.data })
      console.log(visits.data)
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <BodyContainer>
        <Container>
          <FormContainer>
            Problem: {this.state.issue.title}<br />
            Location: {this.state.issue.location}<br />
            Quoted Price: {this.state.issue.quoteCost}<br />
            Actual Cost: {this.state.issue.actualCost}<br />
            First Noticed: {this.state.issue.issueCreate}<br />
            Start Date to fix: {this.state.issue.ticketCreate}<br />
            Finished: {this.state.issue.closed}<br />
            Notes: {this.state.issue.notes}<br />
            Current Visits to fix issue:
            <div>
              <ul>                <div>
                <RaisedButton href={`/maintenance/${this.props.match.params.MaintId}/visit/create`} label="Create Visit" style={Style} />
              </div>
                {this.state.visits.map((visit, index) => {
                  return (
                    <div>
                      <li>
                        <Link key={visit._id} to={`/Maintenance/${this.props.match.params.MaintId}/visit/${visit.id}/show`}>{visit.dateVisit}</Link>
                      </li>
                    </div>


                  )
                }
                )}
              </ul>
            </div>
            <br /><br />
            Once the maplist is clicked it will show this. This is where the info for the maintaince issue will live. This is also where the edit button will live as well.
        </FormContainer>
        </Container>
      </BodyContainer>
    )
  }
}
