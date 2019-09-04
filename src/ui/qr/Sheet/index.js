import React        from 'react';
import isEmpty      from '../../../helpers/isEmpty';
import QRCode       from 'qrcode';
import uniq         from 'lodash.uniq';
import {
  T_TO_PASTE_CODES,
  T_LIST_NOT_UNIQ,
  T_CTRL_P,
}                   from '../../i18n';
import css          from './css/index.module.scss';


export default function QrSheet(props) {
  const { list } = props;

  const actualList = list.filter(item => !isEmpty(item));

  if (isEmpty(actualList)) return T_TO_PASTE_CODES;
  if (uniq(actualList).length !== actualList.length) return T_LIST_NOT_UNIQ;

  let qrCodes = [];

  for (let code of actualList) {
    QRCode.toDataURL(code, { errorCorrectionLevel: 'H' }, function(err, src) {
      qrCodes.push({ code, src });
    });
  }

  return (
    <div>
      <div className={ `noprint ${ css.ctrlp }` }>{ T_CTRL_P }</div>
      <div>
        { qrCodes.map(item => <div key={ item.code } className={ css.item }><img alt={ item.code } src={ item.src } /></div>) }
      </div>
    </div>
  );
}
