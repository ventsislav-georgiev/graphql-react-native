import React from 'react';
import Add from '../../common/Add';
import {itemType} from './type';

export default ({navigation, route}) => {
  return (
    <Add
      itemType={itemType}
      addQuery={itemType.add()}
      navigation={navigation}
      route={route}
    />
  );
};
