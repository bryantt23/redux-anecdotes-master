const baseUrl = 'http://localhost:3001/anecdotes';

export const getAllAnecdotes = async () => {
  const data = await fetch(baseUrl);
  const res = await data.json();
  return res;
};
