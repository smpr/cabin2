import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Container, FormContainer, Style } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
export default class MaintainceHome extends Component {
  state = {
    vendors: [],
    issues: [],
    closedIssues: []
  }
  async componentDidMount() {
    try {
      const vendorConst = [{
        id: 1,
        title: "This is the Vendor list"
      },
      {
        id: 2,
        title: "this is the vendor list 2"
      }]
      const issue = await axios.get('/api/issues')
      console.log(issue.data)
      this.setState({issues: issue.data})
      const closedIssuesConst = [{
        id: 1,
        title: "This is the Closed Issues List 1"
      },
      {
        id: 2,
        title: "This is the Closed Issues List 2"
      }]
      this.setState({ vendors: vendorConst, closedIssues: closedIssuesConst })
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
        <Container>
          <FormContainer>
            <div>
              <ol>
                <div>
                  <h2>Closed Issues:</h2>
                </div>
                {this.state.closedIssues.map((clIssue, index) => {
                  return (
                    <li><Link key={clIssue._id} to={`/maintenance/closed/${clIssue.id}/show`}>{clIssue.title}
                    </Link></li>
                  )
                })}
              </ol>
            </div>
          </FormContainer>
        </Container>
        <Container>
          <FormContainer>
            <div>
              <ol>
                <div>
                  <h2>Current Vendors:</h2>
                </div>
                <div>
                  <RaisedButton href={`/maintenance/vendor/create`} label="Create Vendor" style={Style} />
                </div>
                {this.state.vendors.map((vendor, index) => {
                  return (
                    <li><Link key={vendor._id} to={`/maintenance/vendor/${vendor.id}/show`}>{vendor.title}
                    </Link></li>
                  )
                })}
              </ol>
            </div>
          </FormContainer>
        </Container>
        Maintaince Home page. Will Show Map of curent Maintaince issues. List maintaince contractors. Will also show old/closed out issues.
        <br />Schema so far:  Issue: string<br />
                        location: string<br />
                        QuotedCost: int<br />
                        ActualCost: int<br />
                        issueCreate: date<br />
                        dateTicketCreate: date<br />
                        serviceDate: has_many visits<br />
                            vist -<br />
                                technician: string<br />
                                dateVisit: date<br />
                                fixedProblem: string<br />
                                notes: string<br />
                            -<br />
                        closed: string<br />
      </div>
    )
  }
}
