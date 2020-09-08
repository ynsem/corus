import React from 'react';
import PropTypes from 'prop-types';

import u from '@core/util.js';

import * as L from 'leda';

const LoginLayout = ({ onLoginComplete }) => {
  const formData = {};

  const onLogin = (response) => {
    onLoginComplete(response.data);
  };

  const onClickSubmitBtn = () => {
    u.ajax('user/login', formData).then((response) => {
      if (response.success) {
        onLogin(response);
      }
    });
  };

  const onChange = ({ name, value }) => {
    formData[name] = value;
  };

  return (
    <L.Div _wrapper>
      <L.Input
        onChange={(event) => onChange(event.component)}
        isRequired
        form="loginForm"
        name="login"
      />
      <L.Input
        onChange={(event) => onChange(event.component)}
        isRequired
        form="loginForm"
        name="password"
      />
      <L.Button form="loginForm" onClick={onClickSubmitBtn}>
        Войти
      </L.Button>
    </L.Div>
  );
};

LoginLayout.propTypes = {
  onLoginComplete: PropTypes.func,
};

LoginLayout.defaultProps = {
  onLoginComplete: null,
};

export default LoginLayout;
