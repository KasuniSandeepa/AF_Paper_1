import axios from "axios";
import React, { Component }from "react";

class Courses extends Component{
    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
        this.navigateSubjectPage = this.navigateSubjectPage.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:8087/course/')
            .then(response => {
               this.setState({ courses: response.data.data })
                console.log(response.data.data)

            })
            .catch(error => {
                console.log(error.message)
                alert(error.message)
            })

    }

    navigateSubjectPage(e, courseId) {
        window.location = `/${courseId}`
    }


    render(){
        return(
            <div className="container">
                <h1>Courses</h1>
                {this.state.courses.length > 0 && this.state.courses.map((item,index) => (
                    <div key={index} className="card mb-3">
                        <div className="p-3" onClick={e => this.navigateSubjectPage(e, item._id)}>
                            <h4>Course Name: {item.name}</h4>
                            <h5>Lecture In Charge: {item.lectureInCharge}</h5>
                            <h6>Code: {item.code}</h6>
                            <h6>Pass Mark: {item.passMark}</h6>
                        </div>

                    </div>
                ))}
            </div>
        )
    }
}

export default Courses;