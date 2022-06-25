import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import MusicButton from './MusicButton'

export default class LataDidi extends Component {
  render() {
    return (
      <View>
        <AppHeader/>



        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/mr/Kalyanji%20Anandji%20-%20Dil%20To%20Hai%20Dil.mp3?session_key=fdb71e168f9e5f5bed62aa2932960d1c&hash=07bde143f66402e913191cda7e5f9261"
            text="Dil to Hai Dil"
            bg color ="purple"
          />
        </View>



        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/okr/?audio=122914890507310&title=Arijit%20Singh%20-%20Manwa%20Laage&rt=f8702a9c4c4ae05d404261e787ace323412d_580884526163_16542513&hash=cFiuwHfM15FlKfhtA5zqKmJS4C8="
            text="Maanwa Laage"
            bg color ="purple"
          />
        </View>



        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/okr/?audio=102342465791002&title=Sonu%20Nigam%20%26%20Shreya%20Ghoshal%20-%20Pal%20Pal..Har%20Pal&rt=f8702a9c4c4ae05d404261e787ace323412d_580884526163_16542513&hash=cFiuwHfM15FlKfhtA5ztKm1S5i8="
            text="Pal Pal Pal Pal Har Pal"
            bg color ="purple"
          />
        </View>



        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/mr/Shreya%20Ghoshal%20-%20Sunn%20Raha%20Hai.mp3?session_key=c1d6017c96917889d005080ed5191824&hash=69e742ee5fb9e423470793a2abc37266"
            text="Sun raha Hai na tu"
            bg color ="purple"
          />
        </View>



        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/mr/%D0%9A%D0%B0%D0%BA%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D1%82%D1%8C%20%D1%8D%D1%82%D1%83%20%D0%BB%D1%8E%D0%B1%D0%BE%D0%B2%D1%8C%3F%20110%20%D1%81%D0%B5%D1%80%D0%B8%D1%8F%20Iss%20Pyaar%20Ko%20Kya%20Naam%20Doon%20-%20Jadu%20Hai%20Nasha%20Hai.mp3?session_key=9762a58056c2a0a0598eadcba20d1a2c&hash=e2d4f18db252163e8def793c65238480"
            text="Jadu hai nasha"
            bg color ="purple"
          />
        </View>

        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/mr/Shantanu%20Moitra%20-%20Piyu%20Bole.mp3?session_key=43d3a18e7f02ec9956c758350135ea2b&hash=d25366b7610fb621dd900f5f1b06f0a5"
            text="Piyu dole"
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