import React from 'react';
import {Text, Button} from 'react-native';
import {useQuery, useMutation} from 'graphql-react-sdk';
import Loading from './Loading';
import EditView from './EditView';

export default ({
  itemType,
  getQuery,
  editQuery,
  removeQuery,
  navigation,
  route,
}) => {
  const {loading, error, data} = useQuery(getQuery);
  const [editItem, edit] = useMutation(editQuery);
  const [removeItem, remove] = useMutation(removeQuery);

  // Setup the Remove button
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Remove"
          onPress={() =>
            removeItem().then(
              () => navigation.goBack(),
              () => {},
            )
          }
        />
      ),
    });
  }, [navigation, removeItem, itemType]);

  if (loading || edit.loading || remove.loading) {
    return <Loading />;
  }
  if (error || edit.error || remove.error) {
    return <Text>{JSON.stringify(error || edit.error || remove.error)}</Text>;
  }

  return (
    <EditView
      itemType={itemType}
      initialEntity={(data && data.result) || {}}
      action={editItem}
      navigation={navigation}
      route={route}
      complete={() => {
        navigation.goBack();
      }}
    />
  );
};
