import React from 'react';
import {FlatList, Text, Pressable, Button} from 'react-native';
import {useQuery} from 'graphql-react-sdk';
import {textStyles, viewStyles} from './styles';
import Loading from './Loading';

function navigate({navigation, route = {}, itemId}) {
  navigation.navigate(
    (route.name || itemId) + (route.name ? ' Detail' : ''),
    route.name && {id: itemId},
  );
}

export default ({itemType, listQuery, navigation, route}) => {
  // Setup the Add button
  if (route.name) {
    React.useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button
            title="Add"
            onPress={() => navigation.navigate(route.name + ' Add')}
          />
        ),
      });
    }, [navigation, route.name]);
  }

  const {loading, error, data} = useQuery(listQuery);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Text>{JSON.stringify(error)}</Text>;
  }

  return (
    <FlatList
      data={(data && data.results) || []}
      keyExtractor={item => item[itemType.idFieldName]}
      renderItem={({item}) => {
        const itemId = item[itemType.idFieldName];
        return (
          <Pressable
            style={viewStyles.item}
            onPress={() => navigate({navigation, route, itemId})}>
            <Text style={textStyles.header}>
              {item.title || item.Title || item.name || item.Name}
            </Text>
          </Pressable>
        );
      }}
    />
  );
};
