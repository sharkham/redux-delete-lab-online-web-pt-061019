import React from 'react';
import Band from './Band';

const Bands = (props) => {
  return (
    <ul>
      {props.bands.map(band => <Band key={band.id} band={band} delete={props.delete}/>)}
    </ul>
  );
}

export default Bands;
