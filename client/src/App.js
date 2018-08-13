import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './components/BoilerPlate/Nav'
import Header from './components/BoilerPlate/Header'

import Home from './components/Home/Home'

import MaintHome from './components/Maintaince/MaintainceHome'
import MaintAdd from './components/Maintaince/MaintainceAdd'
import MaintEdit from './components/Maintaince/MaintainceEdit'
import MaintShow from './components/Maintaince/MaintainceShow'

import ResHome from './components/Reservation/ReservationHome'
import ResEdit from './components/Reservation/ReservationEdit'
import ResAdd from './components/Reservation/ReservationAdd'
import ResShow from './components/Reservation/ReservationShow'

import VenCreate from './components/Maintaince/Vendors/VenCreate'
import VenEdit from './components/Maintaince/Vendors/VenEdit'
import VenShow from './components/Maintaince/Vendors/VenShow'

import OldShow from './components/Maintaince/OldIssues/OldShow'
import OldEdit from './components/Maintaince/OldIssues/OldEdit'

import VisitShow from './components/Maintaince/Visits/VisitShow'
import VisitCreate from './components/Maintaince/Visits/VisitCreate'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Header />
            <Nav />
            <Switch>
              <Route exact path='/' component={Home} />

              <Route exact path='/Maintenance' component={MaintHome} />
              <Route exact path='/Maintenance/Create' component={MaintAdd} />

              <Route exact path='/Maintenance/vendor/create' component={VenCreate} />
              <Route exact path='/Maintenance/vendor/:VendorId/edit' component={VenEdit} />
              <Route exact path='/Maintenance/vendor/:VendorId/show' component={VenShow} />

              <Route exact path='/Maintenance/closed/:ClosedId/show' component={OldShow} />
              <Route exact path='/Maintenance/closed/:ClosedIf/edit' component={OldEdit} />
              <Route exact path='/Maintenance/:MaintId/edit' component={MaintEdit} />
              <Route exact path='/Maintenance/:MaintId/show' component={MaintShow} />
              <Route exact path='/Maintenance/:MaintId/visit/:VisitId/Show' component={VisitShow} />
              <Route exact path='/Maintenance/:MaintId/visit/create' component={VisitCreate} />

              <Route exact path='/Reservation' component={ResHome} />
              <Route exact path='/Reservation/create' component={ResAdd} />
              <Route exact path='/Reservation/:ReservationId/edit' component={ResEdit} />
              <Route exact path='/Reservation/:ReservationId/show' component={ResShow} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>

    );
  }
}

export default App;
