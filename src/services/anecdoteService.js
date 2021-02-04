const baseUrl = 'http://localhost:3001/anecdotes';

export const getAllAnecdotes = async () => {
  const data = await fetch(baseUrl);
  const res = await data.json();
  return res;
};

const getId = () => (100000 * Math.random()).toFixed(0);

export const createAnecdote = content => {
  return { content, id: getId(), votes: 0 };
};

export const addAnecdote = async anecdote => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(anecdote)
  };
  const response = await fetch(baseUrl, requestOptions);
  const data = await response.json();

  return data;
};
