import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

class Table extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // let fetchUrl = 'https://api.github.com/repos/' + this.props.userName + '/' + this.props.repoName + '/issues';
        // fetch(fetchUrl).then(result => {
        //     return result.json();
        // }).then(data => {
        //
        //     this.setState({
        //         issues: data,
        //         tableRows: rows
        //     });
        // });
    }

    render() {
        const rows = this.props.tableData.map((issue, i) => <TableRow data={issue} i={i}/>);
        return (
            <div className="table">
                <div className="header">
                    <div>Number</div>
                    <div>Title</div>
                    <div>Creation Date</div>
                </div>
                <div className="body">
                    {rows}
                </div>
            </div>
        );
    }
}

Table.propTypes = {
    showTable: PropTypes.bool,
    tableData: PropTypes.object
};

export default Table;
