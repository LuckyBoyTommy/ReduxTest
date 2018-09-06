import React, { Component } from 'react';
import { AlertIOS } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import PropTypes from 'prop-types';
class FingerprintPopup extends Component {

  componentDidMount() {
    FingerprintScanner
      .authenticate({ description: 'Scan your fingerprint on the device scanner to continue' })
      .then(() => {
        this.props.handlePopupSuccessDismissed();
        AlertIOS.alert('Authenticated successfully');
      })
      .catch((error) => {
        AlertIOS.alert(error);
        this.props.handlePopupFailDismissed();

      });
  }

  render() {
    return false;
  }
}

FingerprintPopup.propTypes = {
  handlePopupSuccessDismissed: PropTypes.func.isRequired,
  handlePopupFailDismissed: PropTypes.func.isRequired
};
//gg
export default FingerprintPopup;