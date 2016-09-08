import React from 'react';
import Card from './card';
import css from './css/index.css';

function NotebookModal( props ) {
  return (
    <div>
      <h3>Hosted Jupyter Notebook Resources</h3>
      <div className={ css.row }>
        <Card { ...props } type='Small' />
        <Card { ...props } type='Medium' />
        <Card { ...props } type='Large' />
      </div>
    </div>
  );
}

export default NotebookModal;
