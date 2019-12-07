import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import '../css/rt-custom.css';

export default ({ columns, data }) => <ReactTable columns={columns} data={data} />;
