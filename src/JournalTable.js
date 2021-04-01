import React, {Component} from 'react';
import {Dropdown, Table} from "react-bootstrap";
import Request from "./Services/Request";

class DropDownMenu extends Component {
    render() {
        return (
            <Dropdown>
                {/*{this.props.groups ? <JournalTable*/}
                {/*    students={this.getStudentsByGroup(this.state)} groups={this.state.groups}/> : null*/}
                {/*}*/}
                <Dropdown.Toggle variant="link" size="sm">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Header>Перевести в другую группу</Dropdown.Header>
                    {console.log(this.props.groups)}
                    {
                        this.props.groups ?
                        this.props.groups.map((group, index) => {
                            return <Dropdown.Item
                                key={index+1}

                                onClick={() => ( Request.transferStudent().then((groups) => {
                                    alert('Перевод студента с id ' +
                                        this.props.studentId +
                                        ' в группу ' + group.id  + ' произведён');
                                }) )}
                            >
                                {group.name}
                            </Dropdown.Item>
                        })
                        : null
                    }
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

// eslint-disable-next-line no-unused-vars
export class JournalTable extends Component {
    render() {
        return (
            <Table bordered>
                <thead>
                <tr>
                    <th>#</th>
                    <th>ФИО</th>
                    <th>ГРУППА</th>
                </tr>
                </thead>
                <tbody>
                {this.props.students.map((student, index) => {
                    return <tr>
                        <td>{index + 1}</td>
                        <td>{student.surname} {student.name} {student.secondName}</td>
                        <td>{student.study_group_id}</td>
                        <td>
                            <DropDownMenu
                                groups={this.props.groups}
                                studentId={student.study_group_id}
                            />
                        </td>
                    </tr>
                })}
                </tbody>
            </Table>
        )
    }
}