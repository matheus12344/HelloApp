import { StyleSheet } from 'react-native';
import { alignItems, borderRadius, color, flexDirection, fontSize, justifyContent, marginLeft, marginTop, width } from 'styled-system';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 2,
    marginTop: 20

    
  },
  avatar: {
    marginTop: 32,
    width: 82,
    borderRadius: 25,
    marginLeft: 10,
    height: 82
  },

  chat: {
  },
  name: {
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 100,
    marginTop: -75,
    fontSize: 23,
    fontWeight: 'bold',
    color: '#131313'

  },
  message: {
    marginTop: 2,
    flexDirection: 'column',
    alignContent: 'flex-start',
    marginLeft: 100,
    color: theme.colors.blue,
    fontSize: 16,
    fontFamily: 'Gilroy-Bold'
  }

});