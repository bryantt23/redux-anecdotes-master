const getId = () => (100000 * Math.random()).toFixed(0);

const initialState = [];

export const initializeAnecdotes = anecdotes => {
  return {
    type: 'ANECDOTES_INIT',
    payload: anecdotes
  };
};

export const anecdoteVote = id => {
  return {
    type: 'VOTE',
    payload: id
  };
};

export const addNote = content => {
  return {
    type: 'ADD_NOTE',
    payload: content
  };
};

const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.payload;
      let index = state.findIndex(elem => elem.id === id);
      let stateCopy = [...state];
      stateCopy[index].votes++;
      return stateCopy;
    case 'ADD_NOTE':
      const content = action.payload;
      const updatedState = state.concat({ content, id: getId(), votes: 0 });
      return updatedState;
    case 'ANECDOTES_INIT':
      const anecdotes = action.payload;
      return anecdotes;
    default:
      return state;
  }
};

export default anecdoteReducer;
