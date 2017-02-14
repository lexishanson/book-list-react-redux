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
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
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
  books: state.books
  };
}

{/* state has 2 props right now - books array, activeBook. books reducer is retrning back book list*/}
{/*Anything returned from this list will end up as props
on the BookList container*/}

function mapDispatchToProps(dispatch) {
{/*Whenever selectBook is called, the result should be passed
to all of our reducers */}
  return bindActionCreators ({ selectBook: selectBook }, dispatch)
}

{/*selectBook value in obj. is selectBook action imported from top */}
{/*Promot BookList from a component to a conainer - it neesd to know
about htis new dispatch method, selectBook. Make it available
as a prop.*/}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);

{/* connect takes function and component to produce container.
a container is aware of the state that is contained by Redux */}

