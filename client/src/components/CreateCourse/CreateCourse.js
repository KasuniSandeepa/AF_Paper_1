import axios from "axios";
import Select from "react-select";
import React, { Component }from "react";
import Swal from "sweetalert2";


const initialState = {
    courseName: '',
    code: '',
    passMark: 0,
    lectureInCharge: '',
    subject: [],
    options: [],
    selectedSubjects: []
}
class CreateCourse extends Component{
    constructor(props) {
        super(props);
        this.state = initialState;
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubjectSelect = this.onSubjectSelect.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:8087/subject/')
            .then(response => {
                this.setState({ subjects: response.data.data },() => {
                    let data = [];
                    this.state.subjects.map((item, index) => {
                        let subject = {
                            value: item._id,
                            label: item.name
                        }
                        data.push(subject)
                    });
                    this.setState({options: data})
                })
                console.log(this.state.subjects)
            })
            .catch(error => {
                console.log(error.message)
                alert(error.message)
            })

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e){
        e.preventDefault();
        let course = {
            name: this.state.courseName,
            code: this.state.code,
            passMark: this.state.passMark,
            lectureInCharge: this.state.lectureInCharge,
            subjects: this.state.selectedSubjects
        };
        console.log("Data to Send ",course);
        axios.post('http://localhost:8087/course/create',course)
            .then(response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Data Inserted Successfully',
                    text: 'New Course was created!',
                })
            })
            .catch(error => {
                console.log(error.message)

                Swal.fire({
                    icon: 'warning',
                    title: 'Data Inserted Not Successful',
                    text: error.message,
                })
            })


    }

    onSubjectSelect(e) {
        this.setState({ selectedSubjects: e ? e.map(item => item.value) : [] })
    }


    render(){
        return(
            <div className="container">
                <h1>Create Course</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="Course" className="form-label">Course</label>
                        <input
                            type="text"
                            className="form-control"
                            id="courseName"
                            name="courseName"
                            value={this.state.courseName}
                            onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Code" className="form-label">Code</label>
                        <input
                            type="text"
                            className="form-control"
                            id="code"
                            name="code"
                            value={this.state.code}
                            onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="PassMark" className="form-label">Pass Mark</label>
                        <input
                            type="number"
                            className="form-control"
                            id="passMark"
                            name="passMark"
                            value={this.state.passMark}
                            onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="LectureInCharge" className="form-label">Lecture In Charge</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lectureInCharge"
                            name="lectureInCharge"
                            value={this.state.lectureInCharge}
                            onChange={this.onChange}/>
                    </div>
                    <Select
                        options={ this.state.options }
                        onChange={this.onSubjectSelect}
                        className="basic-multi-select"
                        isMulti
                    />
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

export default CreateCourse;