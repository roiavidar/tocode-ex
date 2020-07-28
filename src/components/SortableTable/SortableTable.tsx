import React from 'react';
import ISortableService from './SortableTable.service';
import SortableTableService from './SortableTable.service';
import { observer } from 'mobx-react';
import TableDetails from './TableDetails';

function SortableTable(props: {
    sortableService: ISortableService,
    getRowKey: (cell: any) => string,
    getCellKey: (cell: any) => string,
    getCell: (cell: any) => JSX.Element,
    getHeaderCell: (cell: any) => JSX.Element,
    getHeaderCellKey: (cell: any) => string
}) {
    const {sortableService, getRowKey, getCellKey, getCell, getHeaderCell, getHeaderCellKey} = props;
    const data = sortableService.SortedTable;

    // 1.
    // These internal render() functions are better written as render props
    // (in the default props section)
    // that would make your component shorter and allow customisation

    // 2.
    // Sorting logic is better put in the component than in the MobX store
    // because multiple SortableTable components may be connected to the same table data
    // So a better way is to:
    // const data = sortableService.getSortedData(sortColumn, asc)
    // That way if the data changes your component will re-render, but you can have
    // multiple components showing different views of the same data

    function renderRow(row: any[]) {
        return (
            <tr key={getRowKey(row)}>
                {
                    row.map((cell: any) => (
                        <td key={getCellKey(cell)}>{getCell(cell)}</td>
                    ))
                }
            </tr>
        )
    }

    function renderHeaderRow(headerRow: any[]) {
        return (
            <tr key={'headers'}>
                {
                    headerRow.map((headerCell: any, index: number) => (
                        <th key={getHeaderCellKey(headerCell)} onClick={() => {sortableService.sort(index)}} >{getHeaderCell(headerCell)}</th>
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
                    {data.map((row: any[], index: number) => {
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

function sortLogic(itemA: string, itemB: string) {
    return itemA.localeCompare(itemB);
}

function getRowKey(row: string[]) {
    return row.join(' ');
}

function getCellKey(cell: string) {
    return cell;
}

function getCell(cell: string) {
    return cell;
}

function getHeaderCellKey(headerCell: string) {
    return headerCell;
}

function getHeaderCell(headerCell: string) {
    return headerCell;
}

SortableTable.defaultProps = {
    sortableService: new SortableTableService(sortLogic),
    getRowKey,
    getCellKey,
    getCell,
    getHeaderCell,
    getHeaderCellKey
};

export default observer(SortableTable);
