import React from 'react';
import css from './css/card.css';

function Card( props ) {
  const { notebookSize, type, changeTo } = props;

  const selected = notebookSize === type.toLowerCase();

  return ( 
    <div className='col-sm-4'>
      <div className={ css.compare }>
        <div className={ css.compareTitle }>{ type }</div>
        <div className={ css.compareBody }>
          <p>
            <span className={ css.meta }>Memory:</span><br />
            512MB
          </p>
          <p>
            <span className={ css.meta }>Processor:</span><br />
            1 Core
          </p>
          <p>
            <span className={ css.meta }>Disk:</span><br />
            20GB SSD
          </p>
        </div>
        <div className={ css.compareFooter }>
          <a href="#" onClick={ () => changeTo( type.toLowerCase() ) } className={ selected ? css.btnSuccess : css.btn }>
            { selected ? <i className="glyphicon glyphicon-ok" /> : 'Choose' }
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
