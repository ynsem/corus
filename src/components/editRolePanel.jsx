import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Panel from '@components/panel.jsx';
import Table from '@components/table.jsx';

import * as L from 'leda';

import u from '@core/util.js';

const EditRolePanel = ({ roleId }) => {
  let activeRightInTableAll = null;

  let activeRightInTableRole = null;

  const [roleData, setRoleData] = useState({});
  const [rightsList, setRightsList] = useState([]);

  useEffect(() => {
    (async () => {
      const role = await u.ajax('role/get', { roleId });
      const rights = await u.ajax('right/list');

      setRoleData(role.data);
      setRightsList(rights.data);
    })();
  }, []);

  const onClickSaveBtn = async () => {
    const { id, roleName, roleKey } = roleData;
    const rightList = roleData.rightList.map((el) => el.rightId);
    const params = {
      roleId: id,
      roleName,
      roleKey,
      rightList,
    };

    await u.ajax('role/update', params);
  };

  const getRight = (id) => rightsList.find((el) => el.rightId === id);

  const onClickRemoveBtn = () => {
    const newRights = roleData.rightList.filter((el) => el.rightId !== activeRightInTableRole);
    setRoleData({ ...roleData, rightList: newRights });
  };

  const onClickAddBtn = () => {
    const newRights = roleData.rightList;

    if (!roleData.rightList.find((el) => el.rightId === activeRightInTableAll)) {
      newRights.push(getRight(activeRightInTableAll));
    }
    setRoleData({ ...roleData, rightList: newRights });
  };

  const onClickTableRightsAll = (data) => {
    activeRightInTableAll = data.id;
  };

  const onClickTableRightsRole = (data) => {
    activeRightInTableRole = data.id;
  };

  return (
    <Panel title={roleData.roleName}>
      <L.Div className="col s4">
        Все права
        <Table
          tableData={rightsList}
          dataTemplate={(element) => element.rightName}
          onClick={(data) => onClickTableRightsAll(data)}
        />
      </L.Div>

      <L.Div className="col s4">
        <L.Button onClick={onClickAddBtn}>Add</L.Button>
        <L.Button onClick={onClickRemoveBtn}>Del</L.Button>
      </L.Div>

      <L.Div className="col s4">
        Выбранные права
        <Table
          tableData={roleData.rightList}
          dataTemplate={(element) => element.rightName}
          onClick={(data) => onClickTableRightsRole(data)}
        />
      </L.Div>

      <L.Div className="col s12">
        <Link to="/home/roles" className="waves-effect waves-light btn">
          Отмена
        </Link>

        <Link to="/home/roles" className="waves-effect waves-light btn" onClick={onClickSaveBtn}>
          Сохранить
        </Link>
      </L.Div>
    </Panel>
  );
};

EditRolePanel.propTypes = {
  roleId: PropTypes.string.isRequired,
};

export default EditRolePanel;
