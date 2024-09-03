import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, TouchableWithoutFeedback } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyHeader, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { color } from 'react-native-elements/dist/helpers';


export default function Home({ navigation, route }) {

  const MENU = [
    {
      image: require('../../assets/A1.png'),
      title: 'PENJUMLAHAN',
      operator: '+',
      background: '#FF5D7D',
      color: '#FF5D7D'
    },
    {
      image: require('../../assets/A2.png'),
      title: 'PEMBAGIAN',
      operator: ':',
      background: '#CBE558',
      color: '#A9CF00'
    },
    {
      image: require('../../assets/A3.png'),
      title: 'PENGURANGAN',
      operator: '-',
      background: '#FFEA60',
      color: '#FFEA60'
    },
    {
      image: require('../../assets/A4.png'),
      title: 'PERKALIAN',
      operator: 'x',
      background: '#66E0F7',
      color: '#66E0F7'
    },
  ]

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.background,
    }}>
      <View style={{
        flex: 1,
        padding: 16,
        justifyContent: 'center',


      }}>

        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image source={require('../../assets/logo2.png')} style={{
            width: windowWidth / 3,
            height: windowWidth / 3
          }} />
          <Text style={{
            fontFamily: fonts.primary.normal,
            fontSize: 20,
            marginTop: 10,
            textAlign: 'center',
            color: colors.primary
          }}>MI. KAHASRI{'\n'}KOTA PROBOLINGGO{'\n'}“Belajar, Berpikir, Beramal Shalih”</Text>
        </View>

        <View style={{
          marginTop: 10,
          flex: 1,
        }}>

          <FlatList numColumns={2} data={MENU} renderItem={({ item, index }) => {
            return (
              <TouchableWithoutFeedback onPress={() => navigation.navigate('Menu', item)}>
                <View style={{
                  flex: 1,
                  margin: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <View style={{
                    backgroundColor: MENU[index].background,
                    height: windowWidth / 3,
                    width: windowWidth / 3,
                    borderWidth: 8,
                    borderRadius: 20,
                    borderColor: colors.black,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Image source={MENU[index].image} style={{
                      width: 100,
                      height: 100,
                      resizeMode: 'contain'
                    }} />


                  </View>
                  <Text style={{
                    textAlign: 'center',
                    fontFamily: fonts.primary.normal,
                    marginTop: 10,
                    color: MENU[index].color,
                    fontSize: 18,
                  }}>{MENU[index].title}</Text>
                </View>
              </TouchableWithoutFeedback>
            )
          }} />

        </View>

      </View>
      <View style={{
        height: 60,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-around'
      }}>
        <TouchableOpacity style={{
          width: windowWidth / 3,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Icon type='ionicon' name='home-outline' color={colors.white} />
        </TouchableOpacity>
        <TouchableOpacity style={{
          width: windowWidth / 3,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Icon type='ionicon' name='log-out-outline' color={colors.white} />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})