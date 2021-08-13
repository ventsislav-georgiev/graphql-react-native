import React from 'react';
import Edit from '../../common/Edit';
import {itemType} from './type';

export default ({navigation, route}) => {
  return (
    <Edit
      itemType={itemType}
      getQuery={itemType.get({variables: {id: route.params.id}})}
      editQuery={itemType.edit()}
      removeQuery={itemType.remove({variables: {id: route.params.id}})}
      navigation={navigation}
      route={route}
    />
  );
};
