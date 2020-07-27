import React from 'react';
import { ISortableService, Order } from './SortableTable.model';

const { ASC }  = Order;

export default function TableDetails(props: {
    sortableService: ISortableService
}) {
    const {sortableService} = props;

    return (
        <div>
            <div>{sortableService.tableOrder.order === ASC ? 'ASC' : 'DESC' }</div>
        </div>
    )
}