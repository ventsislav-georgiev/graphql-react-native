import React from 'react';
import List from '../../common/List';
import {itemType} from './type';

export default ({navigation, route}) => {
  return (
    <List
      itemType={itemType}
      listQuery={itemType.list()}
      navigation={navigation}
      route={route}
    />
  );
};
