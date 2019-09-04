import React, { Component }   from 'react';
import QrInput                from './ui/qr/Input';
import QrSheet                from './ui/qr/Sheet';
import './App.css';


export default class App extends Component {
  state = { qrList: [] }

  updateQrList = (newList) => {
    this.setState({ qrList: newList });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header noprint">
          QR Print
        </header>
        <div className="noprint">
          <QrInput onChange={ this.updateQrList } />
        </div>

        <QrSheet list={ this.state.qrList } />
      </div>
    );
  }
}

