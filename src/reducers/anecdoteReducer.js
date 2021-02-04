// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ];

const getId = () => (100000 * Math.random()).toFixed(0);

// const asObject = anecdote => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: (10 * Math.random()).toFixed(0)
//   };
// };

// const initialState = anecdotesAtStart.map(asObject);
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
      console.log(anecdotes);
      return anecdotes;
    // const updatedState = state.concat({ content, id: getId(), votes: 0 });
    // return updatedState;
    default:
      return state;
  }
};

export default anecdoteReducer;
