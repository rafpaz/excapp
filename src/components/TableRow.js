import React from 'react';
const TableRow = ({data, i}) => (
	<div key={i} className="row">
        <div>{data.number}</div>
        <div>{data.title}</div>
        <div>{data.created_at}</div>
    </div>
);

export default TableRow;
