import {StyleSheet} from 'react-native';

export const viewStyles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  subheader: {
    paddingTop: 10,
  },
});

export const textStyles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
  },
  normal: {},
});
