import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component{
    constructor(props){
        super(props)

        this.state = { search: '' }
    }

    handleChange = (e) => {
        this.setState({search: e.target.value})
    }

    render () {
        const { handleSearch } = this.props;
        const { search } = this.state;

        return(
            <div className="serach-container">
                <input
                    value={this.state.search}
                    onChange={this.handleChange}
                    className="search-input" 
                    type="text" 
                />
                <button className="search-btn" onClick={() => handleSearch(search)}>SEARCH</button>
            </div>
        )
    }
}

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired
}

export default Search;