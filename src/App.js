import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {JournalTable} from "./JournalTable"
import {JournalTypeTable} from "./JournalTypeTable"
import {PerformanceTable} from "./PerformanceTable"
import Request from "./Services/Request"
import "./App.css"

import { Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/DropdownMenu";
// import * as Console from "console";


class App extends Component {
    constructor() {
        super();
        this.state = {
            activeGroup: 1,
            students: null,
            type: null,
            markPerformance: null,
            groups: null
        };
    }
    componentDidMount() {
        Request.getCourseType().then((type) =>{
            this.setState({type: type});
            console.log(this.state.type)
        });

        Request.getStudents().then((students) => {
            this.setState({students: students});
            console.log(this.state.students)
        });

        Request.getCourseMark().then((markPerformance) => {
            this.setState({markPerformance: markPerformance});
            console.log(this.state.markPerformance)
        });

        Request.getGroups().then((groups) => {
            console.log(this.state.groups)
            this.setState({groups: groups});
            console.log(this.state.groups)
        });
    }

    getStudentsByGroup(state){
      var list= new Array();
      state.students.forEach(function (entry){
          if (entry.study_group_id === state.activeGroup){
              list.push(entry);
          }
      })
        return list;
    };

    render() {
        return (
            <div className="App">

                {this.state.type ? <JournalTypeTable
                    type={this.state.type}/> : null}

                {/*{this.state.groups ? <DropdownMenu*/}
                {/*groups={this.state.groups}/>: null}*/}

                {console.log(this.state.groups)}


                {this.state.students ? <JournalTable
                    students={this.getStudentsByGroup(this.state)} groups={this.state.groups}/> : null
                }

                {this.state.markPerformance ? <PerformanceTable
                    markPerformance={this.state.markPerformance}/> : null}

                <button onClick={() => {
                    this.setState({activeGroup: 1});
                }}>Группа 1</button>

                <button onClick={() => {
                    this.setState({activeGroup: 2});
                }}>Группа 2</button>

                <button onClick={() => {
                    this.setState({activeGroup: 3});
                }}>Группа 3</button>

            </div>
        );
    }
}


export default App;
