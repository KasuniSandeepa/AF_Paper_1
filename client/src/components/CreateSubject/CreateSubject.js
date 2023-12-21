import axios from "axios";
import React, {Component} from "react";
import Swal from "sweetalert2";



const initialState = {
    subjectName: '',
    description: '',
    amount: 0
}

class CreateSubject extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault();
        let subject = {
            name: this.state.subjectName,
            description: this.state.description,
            amount: this.state.amount
        }
        console.log("Data to Send ",subject);
        axios.post('http://localhost:8087/subject/create',subject)
            .then(response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Data Inserted Successfully',
                    text: 'New Subject was created!',
                })
            })
            .catch(error => {
                console.log(error.message)
                alert(error.message)
            })
    }

    render() {
        return (
            <div className="container">
                <h1>Create Subject</h1>

                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="subjectName" className="form-label">Subject</label>
                        <input
                            type="text"
                            className="form-control"
                            id="subjectName"
                            name="subjectName"
                            value={this.state.subjectName}
                            onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Description" className="form-label">Description</label>
                        <textarea
                            className="form-control"
                            id="description" rows="3"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Amount</label>
                        <input
                            type="number"
                            className="form-control"
                            id="amount"
                            name="amount"
                            value={this.state.amount}
                            onChange={this.onChange}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateSubject;