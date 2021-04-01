import React, { Component } from 'react';
import { Table} from "react-bootstrap";


// eslint-disable-next-line no-unused-vars
export class PerformanceTable extends Component {
    render() {
        const red = "red";
        return (
            <Table bordered>
                <thead>
                <tr>
                    <th>#</th>
                    <th>ФИО</th>
                    <th>ПРЕДМЕТ</th>
                    <th>ТИП</th>
                    <th>В СРОК</th>
                    <th>КОЛ-ВО ПЕРЕСДАЧ</th>
                    <th>ОЦЕНКА</th>
                </tr>
                </thead>
                <tbody>
                {this.props.markPerformance.map((markPerformance, index) => {
                    return <tr>
                        <td>{index + 1}</td>
                        <td key="ФИО">{markPerformance.SURNAME} {markPerformance.NAME} {markPerformance.SECOND_NAME}</td>
                        <td key="ПРЕДМЕТ">{markPerformance.SUBJECT}</td>
                        <td key="ТИП">{markPerformance.TYPE}</td>
                        <td key="В СРОК">{String(markPerformance.IN_TIME)}</td>
                        <td key="КОЛ-ВО ПЕРЕСДАЧ">{markPerformance.COUNT}</td>
                        <td key="ОЦЕНКА"
                            style={{ backgroundColor: markPerformance.VALUE > String(2) ? 'green' : 'red' }}>
                            {markPerformance.MARK}
                        </td>
                    </tr>
                })}
                </tbody>
            </Table>
        )
    }
}