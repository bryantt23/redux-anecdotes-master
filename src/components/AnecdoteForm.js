import React from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../reducers/anecdoteReducer';
import {
  notificationAddNote,
  notificationHide
} from '../reducers/notificationReducer';

import { createAnecdote, addAnecdote } from '../services/anecdoteService';

function AnecdoteForm() {
  const dispatch = useDispatch();

  const newNote = e => {
    e.preventDefault();
    const content = e.target.note.value;
    e.target.note.value = '';
    const anecdote = createAnecdote(content);
    console.log(anecdote);
    addAnecdote(anecdote);
    dispatch(addNote(anecdote));
    dispatch(notificationAddNote(content));
    setTimeout(() => {
      dispatch(notificationHide());
    }, 5000);
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={newNote}>
        <div>
          <input name='note' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  );
}

export default AnecdoteForm;
