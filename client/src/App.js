import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Courses from './components/Courses/Courses';
import Subjects from "./components/Courses/Subjects";
import CreateCourse from './components/CreateCourse/CreateCourse';
import CreateSubject from './components/CreateSubject/CreateSubject';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App(){
    return(
        <div>
            <Router>
                <Navbar/>
                <section>
                    <Switch>
                        <Route path="/create-subject" component={CreateSubject}/>
                        <Route path="/create-course" component={CreateCourse}/>
                        <Route path="/:id" component={Subjects} />
                        <Route path="/" component={Courses} exact />
                    </Switch>
                </section>
            </Router>
        </div>
    );
}

export  default App;