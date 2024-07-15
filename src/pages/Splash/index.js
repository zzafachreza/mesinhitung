import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { MyButton } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';
import LinearGradient from 'react-native-linear-gradient';

export default function Splash({ navigation }) {
  const top = new Animated.Value(0.3);

  const animasi = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(top, {
          toValue: 1,
          duration: 1000,
        }),
        Animated.timing(top, {
          toValue: 0.3,
          duration: 1000,
        }),
      ]),
      {
        iterations: 1,
      },
    ).start();
  };



  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home')
    }, 1500)
  }, []);


  return (

    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center'
    }}>

      <Image source={require('../../assets/logo.png')} style={{
        width: windowWidth / 2,
        height: windowWidth / 2
      }} />

      <Text style={{
        fontFamily: fonts.primary.normal,
        fontSize: 30,
        marginTop: 10,
        color: colors.primary
      }}>Mesin Hitung</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
