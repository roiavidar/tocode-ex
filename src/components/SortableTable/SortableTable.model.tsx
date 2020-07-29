export interface ITableOrder {
    columnIndex: number | undefined;
    order: Order | undefined;
}

export enum Order {
    ASC = 1,
    DESC = 2
}

export interface ISortableService {
    sort: (columnIndex: number) => any[][];
    SortedTable: any[][];
    tableOrder: ITableOrder;
}

export interface ITableData {
    data: any[][];
}