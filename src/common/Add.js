import React from 'react';
import {Text} from 'react-native';
import {useMutation} from 'graphql-react-sdk';
import Loading from './Loading';
import EditView from './EditView';

export default ({itemType, addQuery, navigation, route}) => {
  const [addItem, add] = useMutation(addQuery);

  if (add.loading) {
    return <Loading />;
  }
  if (add.error) {
    return <Text>{JSON.stringify(add.error)}</Text>;
  }

  return (
    <EditView
      itemType={itemType}
      initialEntity={{}}
      action={addItem}
      navigation={navigation}
      route={route}
      complete={() => {
        navigation.goBack();
      }}
    />
  );
};
