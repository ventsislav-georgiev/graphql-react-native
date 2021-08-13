import React from 'react';
import List from '../../common/List';
import {itemType} from './type';

export default ({navigation, route}) => {
  return (
    <List
      itemType={itemType}
      listQuery={itemType.list({selectedFields: {title: 1}})}
      navigation={navigation}
      route={route}
    />
  );
};
