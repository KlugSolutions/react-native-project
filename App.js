import React, { useState } from 'react';
/*import type {Node} from 'react';*/
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App/*: () => Node */ = () => {

  return (
    <View style={styles.mainView}>
      <View style={styles.columnA}>
        <View style={styles.first}>
          <Text style={styles.text}>1</Text>
        </View>

        <View style={styles.rowA}>
          <View style={styles.second}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.column}>
            <View style={styles.third}>
              <Text style={styles.text}>3</Text>
            </View>
            <View style={styles.fourth}>
              <Text style={styles.text}>4</Text>
            </View>
          </View>
        </View>
        <View style={styles.rowB}>
          <View style={styles.fifth}>
            <Text style={styles.text}>5</Text>
          </View>
          <View style={styles.sixth}>
            <Text style={styles.text}>6</Text>
          </View>
          <View style={styles.seventh}>
            <Text style={styles.text}>7</Text>
          </View>
        </View>


        <View style={styles.eighth}>
          <Text style={styles.text}>8</Text>
        </View>
      </View>
    </View>


  );
};

const styles = StyleSheet.create({
  /* mainView: {
     height: '100%',
     width: '100%',
 
   },*/
  text: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: "#000",
  },
  rowA: {
    flexDirection: 'row',
    width: '100%',
    height: '20%',
  },
  rowB: {
    flexDirection: 'row',
    width: '100%',
    height: '30%',
  },
  columnA: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  column: {
    flexDirection: 'column',
    width: '100%',

  },

  first: {
    height: '40%',
    width: '100%',
    backgroundColor: '#FFFF00',
  },
  second: {


    width: '40%',
    backgroundColor: '#ADD8E6',
  },
  third: {

    height: '50%',
    width: '60%',
    backgroundColor: '#90ee90',

  },
  fourth: {

    height: '50%',
    width: '60%',
    backgroundColor: '#d3D3D3',

  },
  fifth: {


    width: '20%',
    backgroundColor: '#FFD580',

  },
  sixth: {


    width: '60%',
    backgroundColor: '#90ee90',

  },
  seventh: {


    width: '20%',
    backgroundColor: '#d3D3D3',

  },
  eighth: {

    height: '10%',
    width: '100%',
    backgroundColor: '#a9a9a9',

  },
});

export default App;
