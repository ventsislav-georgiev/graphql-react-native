import React, {useState} from 'react';
import {FlatList, Text, TextInput, View, Button} from 'react-native';
import {textStyles, viewStyles} from './styles';

export default ({
  itemType,
  initialEntity,
  action,
  navigation,
  route,
  complete,
}) => {
  const [entity, updateEntity] = useState(initialEntity);

  if (!complete) {
    complete = () => {};
  }

  return (
    <View>
      <FlatList
        data={itemType.inputFields.map(f => f.name.value)}
        renderItem={({item: fieldName}) => (
          <View style={viewStyles.item}>
            <Text style={textStyles.header}>{fieldName + ':'}</Text>

            <TextInput
              style={textStyles.normal}
              value={entity[fieldName]}
              onChangeText={text => {
                updateEntity(fields => ({
                  ...fields,
                  [fieldName]: text,
                }));
              }}
            />
          </View>
        )}
      />

      <Button
        title={'Save'}
        onPress={() => action(entity).then(() => complete())}
      />
    </View>
  );
};
