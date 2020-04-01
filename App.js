/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Modal} from './src/components';

const App: () => React$Node = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    getData().then(res => {
      setData(res);
    })
  },[]);

  const getData = async () => {
    const response = await fetch('http://14e8l.mocklab.io/json/1', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Content-Encoding': 'compress',
      },
    });

    const result = await response.json();
    return result;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setIsVisibleModal(true);
        }}>
        <Text>Click me</Text>
      </TouchableOpacity>
      <Modal
        isVisibleModal={isVisibleModal}
        onClose={() => {
          setIsVisibleModal(false);
        }}
        data={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
