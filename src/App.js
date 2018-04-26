import React, {Component} from 'react';
import './App.css';
import Search from "./components/Search";
import Table from "./components/Table";

class App extends Component {
    constructor(props){
        super(props);
        this.onSearch = this.onSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            showTable: false,
            userName: "",
            repoName: ""
        }
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSearch(){
        console.log("On App Search");
        this.setState({
            showTable: true
        });
        console.log(this.state.repoName);
    }

    render() {
        return (
            <div className="App">
                <Search
                    onSubmit={this.onSearch}
                    handleInputChange={this.handleInputChange}
                    userName={this.state.userName}
                    userRepo={this.state.repoName}
                />
                {this.state.showTable &&
                    <Table
                        showTable={this.state.showTable}
                        userName={this.state.userName}
                        repoName={this.state.repoName}
                    />
                }
            </div>
        );
    }
}

export default App;
