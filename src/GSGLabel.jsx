import '../node_modules/gsg-common-style/less/label/index.less';

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class GSGLabel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let _bStyle = 'default';
    _bStyle = classNames({
      'label': true,
      [`label-${this.props.bStyle}`]: true
    });

    return(
      <span className={_bStyle}>{this.props.children}</span>
    );
  }
};

GSGLabel.propTypes = {
  bStyle: PropTypes.string
};

GSGLabel.defaultProps = {
  bStyle: 'default'
};
