import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class Pagination extends Component {
  render() {
    const { first, prev, next, last } = this.props;
    return (
      <div className="pagination">
        <button
          type="button"
          disabled={!first}
          onClick={() => this.props.onGetRepos(this.props.first)}
        >
          First
        </button>
        <button
          type="button"
          disabled={!prev}
          onClick={() => this.props.onGetRepos(this.props.prev)}
        >
          Prev
        </button>
        <button
          type="button"
          disabled={!next}
          onClick={() => this.props.onGetRepos(this.props.next)}
        >
          Next
        </button>
        <button
          type="button"
          disabled={!last}
          onClick={() => this.props.onGetRepos(this.props.last)}
        >
          Last
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    first: state.searchReducer.first,
    prev: state.searchReducer.prev,
    next: state.searchReducer.next,
    last: state.searchReducer.last
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetRepos: url => dispatch(actions.getRepositories(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
