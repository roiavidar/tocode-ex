import { observable, decorate } from 'mobx';
import { ITableData } from './SortableTable.model';

export default class TableData implements ITableData {
    public data: any[][] = [];
}

decorate(TableData, {
    data: observable,
});
