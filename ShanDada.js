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
            uri="https://cdnm.meln.top/okr/?audio=102788067586327&title=Shaan%20%26%20Shreya%20Ghoshal%20-%20Chaar%20Kadam&rt=f8702a9c4c4ae05d404261e787ace323412d_580884526163_16542513&hash=cFiuwHfM15FlKfltApzrKmNS5i8="
            text="Chaar Kadam"
            bg color ="purple"
          />
        </View>



        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/mr/Shaan%20-%20Jab%20Se%20Tere%20Naina%20%28OST%20Saawariya%29.mp3?session_key=f894abc5e4dacf9d1cc5bc756c6642b5&hash=c4ccf99fb092c10a8321a53c825af74a"
            text="Jab se tere Naina"
            bg color ="purple"
          />
        </View>



        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/mr/Shankar-Ehsaan-Loy%20-%20Woh%20Ladki%20Hai%20Kahan.mp3?session_key=3cd3a47d581030c3a7ae2d013e16bda7&hash=336851e3f8619ecbb758ad19573ce806"
            text="Wo Ladki hai Kaha"
            bg color ="purple"
          />
        </View>



        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/okr/?audio=86556629205296&title=Dulhan%20Dilwale%20Ki%20-%20Hai%20Dil&rt=f8702a9c4c4ae05d404261e787ace323412d_580884526163_16542513&hash=cFiuwHfM15FiKfttAJzhKmdS5S8="
            text="Kuch to hua hai"
            bg color ="purple"
          />
        </View>



        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/mr/The%20Soundtrack%20-%20Hey%20Shona.mp3?session_key=a5fbc594b3f24b793831d0b19ab31f3f&hash=c254959cc606f1e9435b2bb9827d5ffd"
            text="Hey Shona"
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