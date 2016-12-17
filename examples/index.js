import './index.less';

import React from 'react';
import ReactDOM from 'react-dom';

import Label from '../dist/index.min';

class Page extends React.Component {
  render() {
    return (
      <div className="label-eg-container">
        <h1>Get-Set-Go Label Component</h1>

        <p className="label-eg-group">
          <h4>Label Styles</h4>

          <Label>Default Label</Label>
          <Label bStyle="primary">Primary Label</Label>
          <Label bStyle="success">Success Label</Label>
          <Label bStyle="info">Info Label</Label>
          <Label bStyle="warning">Warning Label</Label>
          <Label bStyle="danger">Danger Label</Label>
        </p>

      </div>
    );
  }
};

ReactDOM.render(
  <Page />,
  document.getElementById('container')
);
