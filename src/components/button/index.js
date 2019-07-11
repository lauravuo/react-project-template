import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './style';

const Button = ({ pressed, onPress }) => (
  <Container type="button" onClick={onPress} pressed={pressed} />
);

Button.propTypes = {
  pressed: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default Button;
