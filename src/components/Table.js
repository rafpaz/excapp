import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            issues: {}
        }
    }

    componentDidMount(){
        let fetchUrl = 'https://api.github.com/repos/' + this.props.userName + '/' + this.props.repoName + '/issues';
        fetch(fetchUrl).then(result => {
           return result.json();
        }).then(data => {
            this.setState({
                issues: data
            });
        });
    }

    render() {
        return (
            <div id={"table"}>
                <table style="width:100%">
                    <tr>
                        <th>Number</th>
                        <th>Title</th>
                        <th>Creation Date</th>
                    </tr>
                    this.state.issues.map((issue) => {
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    }
                });
                </table>
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
