import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SortableTableService from './SortableTable.service';
import SortableTable from './SortableTable';
import TableData from './TableData';

const data = [
    ['Name', 'Country', 'Email'],
    ['zina', 'UK', 'zina@gmail.com'],
    ['dan', 'Israel', 'dan@gmail.com'],
    ['dana', 'Israel', 'dana@gmail.com'],
    ['anna', 'Israel', 'anna@gmail.com']
];

function sortLogic(itemA: string, itemB: string) {
    return itemA.localeCompare(itemB);
}

test('should sort', () => {
    const sortableTable = new SortableTableService(sortLogic);
    sortableTable.SortedTable = data;
    let result = sortableTable.sort(0);
    expect(result).toEqual([
        ['Name', 'Country', 'Email'],
        ['anna', 'Israel', 'anna@gmail.com'],
        ['dan', 'Israel', 'dan@gmail.com'],
        ['dana', 'Israel', 'dana@gmail.com'],
        ['zina', 'UK', 'zina@gmail.com'],
    ]);

    result = sortableTable.sort(0);
    expect(result).toEqual([
        ['Name', 'Country', 'Email'],
        ['zina', 'UK', 'zina@gmail.com'],
        ['dana', 'Israel', 'dana@gmail.com'],
        ['dan', 'Israel', 'dan@gmail.com'],
        ['anna', 'Israel', 'anna@gmail.com']
    ])
});

test('should sort on second column', () => {
    const sortableTable = new SortableTableService(sortLogic);
    sortableTable.SortedTable = data;
    let result = sortableTable.sort(1);
    expect(result).toEqual([
        ['Name', 'Country', 'Email'],
        ['dan', 'Israel', 'dan@gmail.com'],
        ['dana', 'Israel', 'dana@gmail.com'],
        ['anna', 'Israel', 'anna@gmail.com'],
        ['zina', 'UK', 'zina@gmail.com']
    ]);
});

test('render sorted table', () => {
    const sortableTable = new SortableTableService(sortLogic);
    const tableData = new TableData();
    tableData.data = data;
    const table = render(<SortableTable  sortableService={sortableTable} tableData={tableData} />);
    table.getByText('zina');
    table.getByText('Country');
});

test('sort rendered table', () => {
    const sortableTable = new SortableTableService(sortLogic);
    const tableData = new TableData();
    tableData.data = data;
    const table = render(<SortableTable sortableService={sortableTable} tableData={tableData} />);
    const countryElem = table.getByText('Country');
    fireEvent.click(countryElem);
    const firstRowCell = document.querySelector('tr > td:first-child');
    expect(firstRowCell?.textContent).toBe('dan');
    table.findByText('DESC');
});