{/*All reducers get 2 arguments: current state, action.
State argmuent is not application state, only the state this reducer
is responsible for. */}
export default function (state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }

  return state;
}

{/*return state is going to be undefined, and React doesn't allow for reducers
to return underfind. Put state = null as argument - es6 syntax - if state comes
in as undefined, set it to null.*/}