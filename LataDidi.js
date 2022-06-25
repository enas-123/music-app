import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet, Button } from 'react-native';
import {Audio} from 'expo-av';
import MusicButton from './MusicButton';
import AppHeader from '../components/AppHeader'

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
            uri="https://cdnm.meln.top/mr/Lata%20Mangeshkar%20-%20Lag%20Ja%20Gale%20Se.mp3?session_key=969ae26b7c9424652335148d2e100c3e&hash=8a5540a9511685495561aece34e2c522"
            text="Lag ja gale se"
            bg color ="purple"
          />
        </View>



        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/mr/Lata%20Mangeshkar%20-%20Kora%20Kagaz%20Tha%20Yeh%20Man%20Mera.mp3?session_key=29a6fb58317c0656373fe3c481c6827a&hash=04b8fd4ff92d8a583c90b1b4cd1c0cc7"
            text="Kora Kagaz tha"
            bg color ="purple"
          />
        </View>



        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/mr/Kishore%20Kumar%20%26%20Lata%20Mangeshkar%20-%20Gaata%20Rahe%20Mera%20Dil.mp3?session_key=70b28d9b4ad5e7383825160798a4912c&hash=cf01ced0ad8502934ec89e791bb28f01"
            text="Gaata Rahe mera Dil"
            bg color ="purple"
          />
        </View>



        <View style={styles.container}>
          <MusicButton
            uri="https://cdnm.meln.top/mr/Lata%20Mangeshkar%20-%20Kitna%20Maza%20Aa%20Raha%20Hai.mp3?session_key=7cb9834601d96bf3a001bfdd0b9bf2b8&hash=75d54717fb2344f8cc739bc60f0a53e5"
            text="Kitna Maza aa raha Hai"
            bg color ="purple"
          />
        </View>

        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
     

        <View style={styles.stopButtonContainer}>
          <TouchableOpacity style = {styles.stopButton} onPress={()=>{
            Audio.setIsEnableAsync(false)
            }}>
            <Text>Stop Button</Text>
          </TouchableOpacity>
        </View>

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
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor:"green",
    margin: 10,
    width: 200,
    height: 50,
  },
  stopButton:{
    width:'80%',
    height:70,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:30,
    backgroundColor:'red',
    borderWidth:2,
    borderColor:'rgba(0,0,0,0.3)',
    marginTop:20
  },
  stopButtonContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:40
  }
})