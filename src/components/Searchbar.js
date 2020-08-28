import React, { Component } from 'react';
import styles from './searchbar.module.css';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
    state = {
        queryToSearch: '',
    }
    componentDidMount() {
        if (this.props.query) {
            this.setState({ queryToSearch: this.props.query });
        }
    }

    handleSubmitSearchTxt = e => {
        e.preventDefault();
        if (this.state.queryToSearch !== '') 
          { this.props.onSubmit(this.state.queryToSearch) }
    }

    handleChange = e => {
        this.setState({ queryToSearch: e.target.value });
    }

    render() {
        const { queryToSearch } = this.state;
        return (
            <header className={styles.Searchbar}>
                <form className={styles.SearchForm} onSubmit={this.handleSubmitSearchTxt}>
                    <button type="submit" className={styles['SearchForm-button']}>
                        <span className={styles['SearchForm-button-label']}>Search</span>
                    </button>

                    <input
                        className={styles['SearchForm-input']}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search movies"
                        value={queryToSearch}
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        )
    }
};

SearchBar.propTypes = {
    query: PropTypes.string,
};