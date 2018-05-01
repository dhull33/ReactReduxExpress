import React, { Component } from 'react';

class ContactItem extends Component {
    render(){

        return(
            <ul>
                <li>
                    <b>Name: </b> {this.props.contact.name}
                </li>

                <li>
                    <b>Email: </b> {this.props.contact.email}
                </li>

                <li>
                    <b>Phone: </b> {this.props.contact.phone}
                </li>

                <li>
                    <b>Address: </b> {this.props.contact.address}
                </li>

                <li>
                    <b>City: </b> {this.props.contact.city}
                </li>

                <li>
                    <b>State: </b> {this.props.contact.state}
                </li>

                <li>
                    <b>Zip: </b> {this.props.contact.zip}
                </li>

            </ul>



        )
    }
}

export default ContactItem;