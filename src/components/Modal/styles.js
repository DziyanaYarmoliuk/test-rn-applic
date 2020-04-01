import {StyleSheet} from 'react-native';

const fontFamily = 'Poppins-Regular';

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'rgba(55, 57, 64, 0.55)',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    width: '80%',
    padding: 15,
    height: '70%',
    backgroundColor: 'white',
    borderRadius: 30,
    position: 'relative',
  },
  modalCloseContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 15,
  },
  modalCloseContent: {
    fontSize: 30,
  },
  title: {
    fontFamily,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 50,
    marginBottom: 15,
  },
  subtitle: {
    fontFamily,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 25,
    color: 'gray',
    marginBottom: 25,
  },
  sectionTitle: {
    fontFamily,
    textAlign: 'left',
    fontSize: 16,
    lineHeight: 25,
    color: 'gray',
    marginBottom: 10,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  submitButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'gold',
    padding: 15,
    width: '45%',
  },
  submitButtonText: {
    color: 'white',
    fontFamily,
    fontWeight: '900',
    fontSize: 20,
  },
  cancelButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'lightgray',
    padding: 15,
    width: '45%',
  },
  cancelButtonText: {
    color: 'darkgray',
    fontFamily,
    fontWeight: '900',
    fontSize: 20,
  }
});

export {styles};
