import React from 'react';
import Card from './card';
import css from './css/index.css';

function NotebookModal( props ) {
  const { notebookSize: size, close } = props;

  return (
    <div>
      <h3>Hosted Jupyter Notebook Resources</h3>
      <div className={ css.row }>
        <Card { ...props } type='Small' selected={ size === 'small' } />
        <Card { ...props } type='Medium' selected={ size === 'medium' }  />
        <Card { ...props } type='Large' selected={ size === 'large' } />
      </div>
    </div>
  );
}

export default NotebookModal;
