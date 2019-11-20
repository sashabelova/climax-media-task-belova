import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Repository from '../../components/Repository/Repository';

class Search extends Component {
  state = {
    value: '',
    validationMessage: false,
    activeSearch: false
  };

  onInputChange = event => {
    this.props.onChange();
    this.setState({ value: event, activeSearch: false });
  };

  onSearch = event => {
    event.preventDefault();
    if (this.state.value === '') {
      this.setState({ validationMessage: true });
      return false;
    }
    this.setState({ validationMessage: false, activeSearch: true });
    this.props.onGetRepos(this.state.value);
  };

  render() {
    const repos = this.props.repos;

    return (
      <div>
        <section className="search-section">
          <form onSubmit={this.onSearch}>
            <label htmlFor="repo-search">
              Enter Github username or organization in search bar below:
            </label>
            <input
              id="repo-search"
              type="text"
              placeholder="Search"
              onChange={event => this.onInputChange(event.target.value)}
            />
            {this.state.validationMessage ? <span>Search value cannot be empty</span> : ''}
            <button>Search for repos</button>
          </form>
        </section>
        {this.state.activeSearch ? (
          <section className="repositories-section">
            {repos.length > 0 ? (
              <div className="repositories-list">
                {repos.map(repo => (
                  <Repository
                    key={repo.id}
                    name={repo.name}
                    url={repo.html_url}
                    stars={repo.stargazers_count}
                    language={repo.language}
                    updated={repo.updated_at}
                  />
                ))}
              </div>
            ) : (
              <div>We couldn’t find anything that matches your search</div>
            )}
          </section>
        ) : (
          ''
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    repos: state.searchReducer.repos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetRepos: user => dispatch(actions.getRepositories(user)),
    onChange: () => dispatch(actions.clearRepositories())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
