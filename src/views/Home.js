import React from 'react';
import {FlatList, Text, Pressable} from 'react-native';
import {textStyles, viewStyles} from '../common/styles';

export default ({navigation}) => {
  return (
    <FlatList
      data={[
        'News',
        'Blogs',
        'BlogPosts',
        'Events',
        'Calendars',
        'Books',
        'Authors',
      ]}
      keyExtractor={item => item}
      renderItem={({item}) => (
        <Pressable
          style={viewStyles.item}
          onPress={() => navigation.navigate(item)}>
          <Text style={textStyles.header}>{item}</Text>
        </Pressable>
      )}
    />
  );
};
