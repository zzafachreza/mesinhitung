import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { colors, fonts } from '../../utils';
import moment from 'moment';
import 'moment/locale/id'
import { color } from 'react-native-reanimated';
import { MyButton, MyGap } from '../../components';

export default function Pembahasan({ navigation, route }) {

    const ITEM = route.params.item;
    const SOAL = route.params.soal;



    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.background
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
                    <Icon color={colors.white} size={30} type='ionicon' name='arrow-back-outline' />
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
                        color: colors.white,
                        fontSize: 20,
                        left: 10,
                    }}>PEMBAHASAN {ITEM.title}</Text>
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


                <View style={{
                    backgroundColor: colors.white,
                    flex: 1,
                    borderRadius: 20,
                    padding: 10,
                }}>

                    <FlatList data={SOAL.filter(i => i.status == 'SALAH')} renderItem={({ item, index }) => {
                        return (

                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    marginRight: 10,
                                    fontFamily: fonts.primary[600],
                                    fontSize: 14,
                                    color: colors.primary
                                }}>{index + 1}. </Text>
                                <Text style={{
                                    fontFamily: fonts.primary[600],
                                    fontSize: 14,
                                    color: colors.primary
                                }}>{new Intl.NumberFormat("id-ID").format(item.a)}</Text>
                                <Text style={{
                                    marginHorizontal: 10,
                                    fontFamily: fonts.primary[600],
                                    fontSize: 14,
                                    color: colors.primary
                                }}>{ITEM.operator}</Text>
                                <Text style={{
                                    fontFamily: fonts.primary[600],
                                    fontSize: 14,
                                    color: colors.primary
                                }}>{new Intl.NumberFormat("id-ID").format(item.b)}</Text>
                                <Text style={{
                                    marginHorizontal: 10,
                                    fontFamily: fonts.primary[600],
                                    fontSize: 14,
                                    color: colors.primary
                                }}>=</Text>
                                <Text style={{
                                    marginHorizontal: 10,
                                    fontFamily: fonts.primary[600],
                                    fontSize: 14,
                                    color: colors.primary
                                }}>{new Intl.NumberFormat("id-ID").format(item.jawaban)}</Text>
                                <Text style={{
                                    fontFamily: fonts.primary[600],
                                    fontSize: 14,
                                    color: colors.primary
                                }}>( {new Intl.NumberFormat("id-ID").format(item.isi)} )


                                    {item.b == '?' && ITEM.title == 'PENJUMLAHAN' ? `(${item.isi - item.a})` : ''}
                                    {item.a == '?' && ITEM.title == 'PENJUMLAHAN' ? `(${item.isi - item.b})` : ''}

                                    {item.b == '?' && ITEM.title == 'PENGURANGAN' ? `(${item.isi + item.a})` : ''}
                                    {item.a == '?' && ITEM.title == 'PENGURANGAN' ? `(${item.isi + item.b})` : ''}

                                    {item.b == '?' && ITEM.title == 'PERKALIAN' ? `(${item.isi / item.a})` : ''}
                                    {item.a == '?' && ITEM.title == 'PERKALIAN' ? `(${item.isi / item.b})` : ''}


                                    {item.b == '?' && ITEM.title == 'PEMBAGIAN' ? `(${item.isi * item.a})` : ''}
                                    {item.a == '?' && ITEM.title == 'PEMBAGIAN' ? `(${item.isi * item.b})` : ''}
                                </Text>
                                <Text style={{
                                    marginHorizontal: 10,
                                    fontFamily: fonts.primary[600],
                                    fontSize: 14,
                                    color: item.status == 'BENAR' ? colors.success : colors.danger
                                }}>{item.status}</Text>
                            </View>
                        )
                    }} />


                    <MyButton onPress={() => {
                        navigation.replace('Home')
                    }} warna={colors.primary} title="HALAMAN UTAMA" />




                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})