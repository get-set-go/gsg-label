import '../node_modules/gsg-common-style/less/label/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class GSGLabel extends React.Component {
  render() {
    let _bClass = {
      'label': true,
      [`label-${this.props.bStyle}`]: true
    };

    _bClass = classNames(_bClass);

    return(
      <span className={_bClass}>{this.props.children}</span>
    );
  }
};

GSGLabel.propTypes = {
  bStyle: PropTypes.string
};

GSGLabel.defaultProps = {
  bStyle: 'default'
};
