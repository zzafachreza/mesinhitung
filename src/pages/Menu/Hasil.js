import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { colors, fonts } from '../../utils';
import moment from 'moment';
import 'moment/locale/id'
import { color } from 'react-native-reanimated';
import { MyButton, MyGap } from '../../components';

export default function Hasil({ navigation, route }) {

    const ITEM = route.params.item;
    const SOAL = route.params.soal;
    const MULAI = route.params.mulai;
    const HABIS = route.params.habis;


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
                {/* <TouchableOpacity onPress={() => navigation.goBack()} style={{
                    width: 30,
                    height: 30,
                    left: 10,
                }}>
                    <Icon color={colors.white} size={30} type='ionicon' name='arrow-back-outline' />
                </TouchableOpacity> */}
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
                    }}>HASIL {route.params.tipe == 'Persiapan Pembagian' ? 'PEMBAGIAN' : ITEM.title}</Text>
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
                    <Text style={{
                        fontFamily: fonts.primary.normal,
                        fontSize: 20,
                        textAlign: 'center',
                        color: colors.black,
                        marginBottom: 16,
                    }}>{moment().format('dddd, DD MMMM YYYY')}</Text>

                    <View style={{
                        padding: 10,
                    }}>
                        <Text style={{
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            color: colors.primary,
                        }}>Waktu Mulai</Text>
                        <Text style={{
                            fontFamily: fonts.primary[400],
                            fontSize: 20,
                            color: colors.primary,
                        }}>{MULAI}</Text>
                    </View>


                    <View style={{
                        padding: 10,
                    }}>
                        <Text style={{
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            color: colors.primary,
                        }}>WAKTU LAMA MENGERJAKAN :</Text>
                        <Text style={{
                            fontFamily: fonts.primary[400],
                            fontSize: 20,
                            color: colors.primary,
                        }}>{HABIS}</Text>
                    </View>
                    <View style={{
                        padding: 10,
                    }}>
                        <Text style={{
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            color: colors.primary,
                        }}>JUMLAH SOAL :</Text>
                        <Text style={{
                            fontFamily: fonts.primary[400],
                            fontSize: 20,
                            color: colors.primary,
                        }}>{ITEM.jumlah}</Text>
                    </View>
                    <View style={{
                        padding: 10,
                    }}>
                        <Text style={{
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            color: colors.primary,
                        }}>JUMLAH BENAR :</Text>
                        <Text style={{
                            fontFamily: fonts.primary[400],
                            fontSize: 20,
                            color: colors.primary,
                        }}>{SOAL.filter(i => i.status == 'BENAR').length}</Text>
                    </View>

                    <View style={{
                        padding: 10,
                    }}>
                        <Text style={{
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            color: colors.primary,
                        }}>JUMLAH SALAH :</Text>
                        <Text style={{
                            fontFamily: fonts.primary[400],
                            fontSize: 20,
                            color: colors.primary,
                        }}>{SOAL.filter(i => i.status == 'SALAH').length}</Text>
                    </View>
                    <MyGap jarak={20} />
                    <MyButton onPress={() => {
                        navigation.navigate('Pembahasan', {
                            item: ITEM,
                            soal: SOAL,
                        })
                    }} warna={colors.primary} title="PEMBAHASAN" />




                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})