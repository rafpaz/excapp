import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    constructor(props){
        super(props);
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(){
        this.props.onSubmit();
    }

    render() {
        return (
            <div id="search-container">
                <input id="userName"
                        name={"userName"}
                        type="text"
                        placeholder={"User Name"}
                        value={this.props.userName}
                        onChange={this.props.handleInputChange}
                />
                <input id="repoName"
                        name={"repoName"}
                        type="text"
                        placeholder={"User Repo"}
                        value={this.props.repoName}
                        onChange={this.props.handleInputChange}
                />
                <button onClick={this.onSearch}>Search</button>
            </div>
        );
    }
}

Search.propTypes = {
    onSubmit: PropTypes.func,
    handleInputChange: PropTypes.func,
    userName: PropTypes.string,
    repoName: PropTypes.string,
};

export default Search;
