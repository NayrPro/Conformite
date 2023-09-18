'use client'

import React, { Component } from 'react';

import './css/searchbar.css';

class SearchBar extends Component {
    state = {
        query: ''
    };

    handleInputChange = (event) => {
        this.setState({
            query: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Recherche pour: ${this.state.query}`);
        // Dans une application réelle, vous lancerez probablement une recherche ici.
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="search-bar">
                <input
                    type="text"
                    value={this.state.query}
                    onChange={this.handleInputChange}
                    placeholder="Rechercher une régulation, une politique, un audit..."
                />
                <button type="submit">Rechercher</button>
            </form>
        );
    }
}

export default SearchBar;
