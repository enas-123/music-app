import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet, Button } from 'react-native';
import MusicButton from './MusicButton';
import AppHeader from '../components/AppHeader'

export default class LataDidi extends Component {
  render() {
    return (
      <View>
        <AppHeader/>



        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/okr/?audio=123645191102746&title=Sonu%20Nigam%20-%20Main%20Agar%20Kahoon&rt=f8702a9c4c4ae05d404261e787ace323412d_580884526163_16542513&hash=cFiuwHfM15FlKfhtDZzpKm1S5C8="
            text="Mai agar Kahoon"
            bg color ="purple"
          />
        </View>



        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/mr/Shankar-Ehsaan-Loy%20-%20Kal%20Ho%20Naa%20Ho.mp3?session_key=abf49014a490d66b0f9c5ff3ab99966c&hash=545a0c6c52c828c611168e19d7b01af1"
            text="Kal ho na Ho"
            bg color ="purple"
          />
        </View>



        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/mr/Sonu%20Nigam%26Neeti%20Mohan%20-%20Sapna%20Jahan.mp3?session_key=b8eab94c47f3b30691348d3cba65c4c5&hash=121613d37381835b23445a724125fa33"
            text="Sapna Jahan"
            bg color ="purple"
          />
        </View>



        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/mr/Sonu%20Nigam%20-%20Abhi%20Mujh%20Main%20Kahin.mp3?session_key=b2e792d5f19061d5151f8e13835082ef&hash=6b53cd139a69b737150eb8284fa6460a"
            text="Abhi muzme Kahin"
            bg color ="purple"
          />
        </View>



        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/okr/?audio=122929743135936&title=Sonu%20Nigam%20-%20Tanhai&rt=f8702a9c4c4ae05d404261e787ace323412d_580884526163_16542513&hash=cFiuwHfM15FlKfltBJzoKm1S4S8="
            text="Tanhayee"
            bg color ="purple"
          />
        </View>

        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
     justifyContent:'center', 
      alignItems:'center',
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"green",
    margin: 10,
    width: 200,
    height: 50,
  }
})