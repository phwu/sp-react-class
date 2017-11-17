import React from 'react';

export default class PayeeSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSearch( event ) {
        this.setState( {searchText: event.target.value}, ()=>{this.props.onSearch(this.state.searchText);} );
    }

    handleSubmit( event ) {
        //this.props.onSearch(this.state.searchText);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Enter a payee name:
                    <input type="text"
                        className="form-control"
                        onChange={this.handleSearch}
                        value={this.state.searchText}/></label>
                </div>
               <div>
                    <button className="btn btn-default">Search</button>
                </div>
            </form>
        );
    }
}