import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { colors, fonts } from '../../utils';

export default function Submenu({ navigation, route }) {
    const ITEM = route.params;
    const DATA = [10, 50, 100]
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <View style={{
                height: 60,
                backgroundColor: ITEM.background,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{
                    width: 30,
                    height: 30,
                    left: 10,
                }}>
                    <Icon color={colors.black} size={30} type='ionicon' name='arrow-back-outline' />
                </TouchableOpacity>
                <View style={{
                    flex: 0.9,
                    justifyContent: 'center',
                    flexDirection: 'row',
                }}>
                    <Image source={ITEM.image} style={{
                        width: 20,
                        height: 20,
                        resizeMode: 'contain'
                    }} />
                    <Text style={{
                        fontFamily: fonts.primary.normal,
                        color: colors.black,
                        fontSize: 20,
                        left: 10,
                    }}>{ITEM.title}</Text>
                </View>
            </View>
            <View style={{
                flex: 1,
                margin: 16,
            }}>

                <Text style={{
                    fontFamily: fonts.primary.normal,
                    fontSize: 20,
                    textAlign: 'center',
                    color: ITEM.color,
                    marginBottom: 16,
                }}>{ITEM.tipe}</Text>
                <FlatList data={DATA} renderItem={({ item, index }) => {
                    return (
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Soal', {
                            ...ITEM,
                            jumlah: item
                        })}>
                            <View style={{
                                padding: 10,
                                backgroundColor: ITEM.background,
                                marginVertical: 10,
                                borderRadius: 10,

                            }}>
                                <Text style={{
                                    fontFamily: fonts.primary[800],
                                    color: colors.black,
                                    fontSize: 50,
                                    textAlign: 'center',
                                }}>{item}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})