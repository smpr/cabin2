import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
export default class MaintainceHome extends Component {
  state = {
    vendors: [],
    issues: [],
    closedIssues: []
  }
  async componentDidMount() {
    try {
      const vendorConst = "This is the Vendor list"
      const issueConst = [{
        id: 1,
        title: "This is the Issues List 1"
      },
      {
        id: 2,
        title: "This is the Issues List 2"
      }]
      const closedIssuesConst = "This is the list of closed issues"
      this.setState({ vendors: vendorConst, issues: issueConst, closedIssues: closedIssuesConst })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <div>
        <Container>
          <FormContainer>
            <div>
              <ol>
                <div>
                  <h2>Current Issues:</h2>
                </div>
                <div>
                  <RaisedButton href={`/maintenance/create`} label="Create Issue" style={Style} />
                </div>
                {this.state.issues.map((issue, index) => {
                  return (
                    <li><Link key={issue._id} to={`/maintenance/${issue.id}/show`}>{issue.title}
                    </Link></li>
                  )
                })}
              </ol>
            </div>
          </FormContainer>
        </Container>
        Maintaince Home page. Will Show Map of curent Maintaince issues. List maintaince contractors. Will also show old/closed out issues.
        Schema so far:  Issue: string
                        location: string
                        QuotedCost: int
                        ActualCost: int
                        issueCreate: date
                        dateTicketCreate: date
                        serviceDate: has_many visits
                            vist -
                                technician: string
                                dateVisit: date
                                fixedProblem: string
                                notes: string
                            -
                        closed: string
      </div>
    )
  }
}
