import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Login.css"

export default class Login extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            customer: {
                firstName: props.firstName,
                lastName: props.lastName,
                status: props.status
            }
        }
    }

    handleFirstNameChanged(event) {
        var customer = this.state.customer;
        customer.firstName = event.target.value;

        this.setState({ customer: customer });
    }

    handleLastNameChanged(event) {
        var customer = this.state.customer;
        customer.lastName = event.target.value;

        this.setState({ customer: customer });
    }

    handleStatusChanged(event) {
        var customer = this.state.customer;
        customer.status = event.target.value;

        this.setState({ customer: customer });
    }

    handleButtonClicked() {
        console.log(this.state.customer);

    }

    render() {

        return (
            <div className='login'>

                <div class="container">
                    <div className='top'>
                        <div className='loginlogo'>ASCC</div>
                        <br />
                        <div className='ingresa'>INGRESA A TU CUENTA</div>
                    </div>
                    <form>
                        <div class="omrs-input-group">
                            <label class="omrs-input-underlined">
                                <input required value={this.state.customer.firstName} onChange={this.handleFirstNameChanged.bind(this)} />
                                <span class="omrs-input-label"  >Username</span>
                            </label>
                        </div>
                        <br />
                        <div class="omrs-input-group">
                            <label class="omrs-input-underlined">
                                <input required value={this.state.customer.lastName} onChange={this.handleLastNameChanged.bind(this)} type="password" />
                                <span class="omrs-input-label" >Password</span>
                            </label>
                        </div>
                    </form>
                    <NavLink to='/home'>
                        <div className='button' onClick={this.handleButtonClicked.bind(this)}>
                            <div class="btn-grad">LOGIN</div>
                        </div>
                    </NavLink>
                </div>

            </div>
        )
    }
}
