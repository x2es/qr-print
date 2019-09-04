import React    from 'react';
import isEmpty  from '../../../helpers/isEmpty';
import css      from './css/index.module.scss';

function textToArray(text) {
  const arr = text.split('\n');
  return isEmpty(arr) ? [] : arr;
}

export default function QrInput(props) {
  const { onChange } = props;

  return (
    <textarea 
      className={ css.input }
      onChange={ e => { onChange(textToArray(e.target.value)) } } 
    />
  );
}
