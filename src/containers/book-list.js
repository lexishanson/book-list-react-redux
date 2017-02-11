//purpose of this component is to render list of books
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  {/*Takes in application state (all of it). Whatever is returned will show up as props inside BookList above*/}
  return {
  books: state.books {/* state has 2 props right now - books array, activeBook. books reducer is returning book book list*/}
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators ({ selectBook: selectBook }, dispatch)
}  {/*selectBook value in obj. is selectBook action imported from top */}

export default connect(mapStateToProps)(BookList)(mapDispatchToProps);
{/* connect takes function and component to product container.
a container is aware of the state that is contained by Redux */}

