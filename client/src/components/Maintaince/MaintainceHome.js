import React, { Component } from 'react'

export default class MaintainceHome extends Component {
  render() {
    return (
      <div>
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
