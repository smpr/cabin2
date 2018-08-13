import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class VisitCreate extends Component {
    state = {
        visit: [],
        redirectToMaint: false
    }
    handleChange = (event) => {
        const updateVisit = {
            ...this.state.visit
        }
        updateVisit[event.target.name] = event.target.value
        this.setState({ visit: updateVisit })
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        await axios.post(`/api/issues/${this.props.match.params.MaintId}/visits`, { visit: this.state.visit })
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
                                    <h2>Create an Visit:</h2>
                                </div>
                                <div>
                                    <TextField
                                        hintText="Technition"
                                        floatingLabelText="Technition"
                                        floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                        floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                        onChange={this.handleChange}
                                        name="technician"
                                        type="text"
                                        required
                                        value={this.state.visit.technician}
                                    />
                                </div>
                                <div>
                            <TextField
                                hintText="Date of Visit"
                                floatingLabelText="Date of Visit"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="dateVisit"
                                type="text"
                                required
                                value={this.state.visit.dateVisit}
                            />
                        </div>
                        <div>
                            <TextField
                                hintText="Was the problem fixed?"
                                floatingLabelText="Was the problem fixed?"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="fixedProblem"
                                type="text"
                                required
                                value={this.state.visit.fixedProblem}
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
                                value={this.state.visit.notes}
                            />
                        </div>
                                <div>
                                    <RaisedButton onClick={this.handleSubmit} label="Create Visit" style={Style} />
                                </div>
                            </div>
                        </FormContainer>
                    </form>
                </Container>
            </BodyContainer>
        )
    }
}
