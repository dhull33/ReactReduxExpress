import React, { Component } from 'react';
import uuid from 'uuid';


class AddContacts extends Component{

    constructor(){
        super();

        this.state = {
            newContacts: {}
        }
    }

    handleSubmit(e){
        console.log(this.refs.name.value);

        e.preventDefault();

        //Test Input
        if(this.refs.name.value === ''){
            alert('A name is required');
        }

        else{
            this.setState(
                {newContact: {
                        name: this.refs.name.value,
                        email: this.refs.email.value,
                        phone: this.refs.phone.value,
                        address: this.refs.address.value,
                        city: this.refs.city.value,
                        state: this.refs.state.value,
                        zip: this.refs.zip.value,
                        id: uuid.v4(),

                    }
                }, function(){
                    this.props.addContacts(this.state.newContact);
                }
            )
        }
    }



    render(){

        return(
            <div>
                <h1>Add Contact Information</h1>

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                        <label>Name:</label>
                        <input type="text" ref="name" /> <br />

                        <label>Email:</label>
                        <input type="text" ref="email" /> <br />

                        <label>Phone:</label>
                        <input type="text" ref="phone" /> <br />

                        <label>Address:</label>
                        <input type="text" ref="address" /> <br />

                        <label>City:</label>
                        <input type="text" ref="city" /> <br />

                        <label>State:</label>
                        <input type="text" ref="state" /> <br />

                        <label>Zip:</label>
                        <input type="text" ref="zip" /> <br />

                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default AddContacts;