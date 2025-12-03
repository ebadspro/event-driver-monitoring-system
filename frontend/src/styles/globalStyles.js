import { StyleSheet } from 'react-native-web';

const globalStyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 16,
    color: '#212529',
  },
  navBar: {
    backgroundColor: '#007bff',
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navLink: {
    color: '#cce5ff',
    fontWeight: 'bold',
    fontSize: 16,
    textDecorationLine: 'none',
  },
  navLinkActive: {
    color: '#ffffff',
    textDecorationLine: 'underline',
  },
});

export default globalStyles;
