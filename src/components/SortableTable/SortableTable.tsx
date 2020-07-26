import React from 'react';
import ISortableService from './SortableTable.service';
import SortableTableService from './SortableTable.service';
import { observer } from 'mobx-react';
import TableDetails from './TableDetails';

function SortableTable(props: {
    sortableService: ISortableService
}) {
    const {sortableService} = props;
    const data = sortableService.SortedTable;

    function renderRow(row: string[]) {
        return (
            <tr key={row.join(' ')}>
                {
                    row.map((text: string) => (
                        <td key={text}>{text}</td>
                    ))
                }
            </tr>
        )
    }

    function renderHeaderRow(headerRow: string[]) {
        return (
            <tr key={'headers'}>
                {
                    headerRow.map((text: string, index: number) => (
                        <th key={text} onClick={() => {sortableService.sort(index)}} >{text}</th>
                    ))
                }
            </tr>
        )
    }

    return (
        <div>
            <table>
                <thead>
                    {renderHeaderRow(data[0])}
                </thead>
                <tbody>
                    {data.map((row: string[], index: number) => {
                        if (index === 0) return null;
                        return (
                            renderRow(row)
                        )
                    })}
                </tbody>
            </table>
            <TableDetails sortableService={sortableService} />
        </div>
    )
}

export default observer(SortableTable);

function sortLogic(itemA: string, itemB: string) {
    return itemA.localeCompare(itemB);
}

SortableTable.defaultProps = {
    sortableService: new SortableTableService(sortLogic)
};