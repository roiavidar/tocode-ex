import { ITableOrder, Order } from "./SortableTable.model";
import { observable, decorate, computed } from 'mobx';

const {ASC, DESC} = Order;

export default class SortableTableService {
    public sortedTable: any[][] = [];
    public tableOrder: ITableOrder = {
        columnIndex: undefined,
        order: undefined
    };
    private sortLogic: (itemA: any, itemB: any) => number;

    constructor(sortLogic: (itemA: any, itemB: any) => number) {
        this.sortLogic = sortLogic;
    }

    set SortedTable(data: any[][]) {
        this.sortedTable = data;
    }

    get SortedTable() {
        return this.sortedTable;
    }

    public sort(columnIndex: number) {
        if (this.tableOrder.columnIndex === undefined || this.tableOrder.order === DESC) {
            this.tableOrder.columnIndex = columnIndex;
            this.sortDirection(ASC, columnIndex);
        } else {
            this.sortDirection(DESC, columnIndex);
        }
        return this.sortedTable;
    }

    private sortDirection(direction: Order, columnIndex: number) {
        this.tableOrder.order = direction;
        const tableRows = this.sortedTable.slice(1);
        tableRows.sort((itemA: any, itemB: any) => {
            const directionCoefficient = direction === ASC ? 1 : -1;
            return directionCoefficient*this.sortLogic(itemA[columnIndex], itemB[columnIndex]);
        });
        this.sortedTable = [this.sortedTable[0], ...tableRows];
    }
}

decorate(SortableTableService, {
    SortedTable: computed,
    sortedTable: observable,
    tableOrder: observable
});
