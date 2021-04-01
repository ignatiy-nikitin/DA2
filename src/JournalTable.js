import React, { Component } from 'react';
import { Table} from "react-bootstrap";


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
                        </tr>
                    })}
                    </tbody>
                </Table>
        )
    }
}