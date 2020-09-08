import React from 'react';
import { Link } from 'react-router-dom';

import u from '@core/util.js';
import * as L from 'leda';

const EditUserPanel = () => {
  const formData = {
    roleList: [86],
  };

  const onClickSaveBtn = async () => {
    await u.ajax('user/add', formData);
  };

  const onChange = ({ name, value }) => {
    formData[name] = value;
  };

  return (
    <L.Div _wrapper>
      <L.Label>
        Логин
        <L.Input
          onChange={(event) => onChange(event.component)}
          isRequired
          form="editUserForm"
          name="login"
        />
      </L.Label>
      <L.Label>
        Пароль
        <L.Input
          onChange={(event) => onChange(event.component)}
          isRequired
          form="editUserForm"
          name="password"
        />
      </L.Label>
      <L.Label>
        Имя
        <L.Input
          onChange={(event) => onChange(event.component)}
          isRequired
          form="editUserForm"
          name="name"
        />
      </L.Label>
      <L.Label>
        Фамилия
        <L.Input
          onChange={(event) => onChange(event.component)}
          isRequired
          form="editUserForm"
          name="surname"
        />
      </L.Label>
      <Link to="/home/users" className="waves-effect waves-light btn">
        Отмена
      </Link>
      <Link to="/home/users" onClick={onClickSaveBtn} className="waves-effect waves-light btn">
        Сохранить
      </Link>
    </L.Div>
  );
};

export default EditUserPanel;
