import React, { Component } from 'react';
import { Table} from "react-bootstrap";


// eslint-disable-next-line no-unused-vars
export class JournalTypeTable extends Component {
    render() {
        return (
            <Table bordered>
                <thead>
                <tr>
                    <th>ПРЕДМЕТ</th>
                    <th>ТИП</th>
                </tr>
                </thead>
                <tbody>
                {this.props.type.map((subject) => {
                    return <tr>
                        <td>{subject.NAME}</td>
                        <td>{subject.TYPE}</td>
                    </tr>
                })}
                </tbody>
            </Table>
        )
    }
}
