import React, { useEffect } from 'react';
import ISortableService from './SortableTable.service';
import SortableTableService from './SortableTable.service';
import { observer } from 'mobx-react';
import TableDetails from './TableDetails';
import { ITableData } from './SortableTable.model';

function SortableTable(props: {
    tableData: ITableData
    sortableService: ISortableService,
    getRowKey: (cell: any) => string,
    getCellKey: (cell: any) => string,
    getCell: (cell: any) => JSX.Element,
    getHeaderCell: (cell: any) => JSX.Element,
    getHeaderCellKey: (cell: any) => string
}) {
    const {sortableService, getRowKey, getCellKey, getCell, getHeaderCell, getHeaderCellKey, tableData} = props;
    const data = getTableData();
    
    useEffect(() => {
        sortableService.SortedTable = data;
        sortableService.sort();    
    }, [tableData.data]);

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

    function getTableData() {
        return sortableService.SortedTable.length !== 0 ? sortableService.SortedTable : tableData.data;
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
