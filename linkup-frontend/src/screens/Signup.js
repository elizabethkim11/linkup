import React, { Component } from 'react'
import Profile from './Profile';
export default class Signup extends Component {
    state = {
        step: 1,
        email: '',
        firstName: '',
        lastName: '',
    }
    render() {
        const { step } = this.state;
        const { email, firstName, lastName} = this.state;
        const values = { email, firstName, lastName}
        switch (step) {
            case 1: 
              return (
                <UserDetails />
              )
            case 2: 
              return (
                <Profile />
              )
            case 3: 
              return (
                <Recruiter />
              )
            default: 
               // do nothing
          }
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }
}

const UserDetails = () => {
    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}