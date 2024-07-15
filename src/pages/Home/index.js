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
      color: '#DD002C'
    },
    {
      image: require('../../assets/A2.png'),
      title: 'PENGURANGAN',
      operator: '-',
      background: '#CBE558',
      color: '#829F00'
    },
    {
      image: require('../../assets/A3.png'),
      title: 'PERKALIAN',
      operator: 'x',
      background: '#FFEA60',
      color: '#E0C829'
    },
    {
      image: require('../../assets/A4.png'),
      title: 'PEMBAGIAN',
      operator: ':',
      background: '#66E0F7',
      color: '#23A5BD'
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

      }}>


        <FlatList numColumns={2} data={MENU} renderItem={({ item, index }) => {
          return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Menu', item)}>
              <View style={{
                flex: 1,
                margin: 10,
              }}>
                <View style={{
                  backgroundColor: MENU[index].background,
                  height: 150,
                  borderWidth: 5,
                  borderRadius: 20,
                  borderColor: colors.white,
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
                  marginTop: 16,
                  color: MENU[index].color,
                  fontSize: 20,
                }}>{MENU[index].title}</Text>
              </View>
            </TouchableWithoutFeedback>
          )
        }} />

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