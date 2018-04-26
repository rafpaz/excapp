import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            issues: []
        }
    }

    componentDidMount(){
        let fetchUrl = 'https://api.github.com/repos/' + this.props.userName + '/' + this.props.repoName + '/issues';
        fetch(fetchUrl).then(result => {
            return result.json();
        }).then(data => {
            const rows = data.map((issue, i) => <TableRow data={issue} i={i}/>);
            this.setState({
                issues: data,
                tableRows: rows
            });
        });
    }

    render() {
        return (
            <div className="table">
                <div className="header">
                    <div>Number</div>
                    <div>Title</div>
                    <div>Creation Date</div>
                </div>
                <div className="body">
                    {this.state.tableRows}
                </div>
            </div>
        );
    }
}

Table.propTypes = {
    showTable: PropTypes.bool,
    userName: PropTypes.string,
    repoName: PropTypes.string,
};

export default Table;
