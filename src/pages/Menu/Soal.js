import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from 'react-native-elements';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import CountDown from 'react-native-countdown-component';
import { showMessage } from 'react-native-flash-message';
import moment from 'moment';
import { cos, multiply } from 'react-native-reanimated';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'
import { useIsFocused } from '@react-navigation/native';
import 'intl/locale-data/jsonp/id-ID';

export default function Soal({ navigation, route }) {
    const ITEM = route.params;
    console.log(ITEM.tipe)
    const DATA = [10, 50, 100];
    const MULAI = moment().format('HH:mm:ss');
    const [habis, setHabis] = useState('');
    const [tinggi, setTinggi] = useState(0);
    const [JAWABAN, setJAWABAN] = useState('')



    const [soal, setSoal] = useState([
        {
            a: 0,
            b: 0,
        }
    ]);



    const [nomor, setNomor] = useState(0)

    const onLayout = (event) => {
        const { x, y, height, width } = event.nativeEvent.layout;

        setTinggi(event.nativeEvent.layout.height)


    }

    const BUTTON = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'AC'];


    // const generateSoal = () => {

    //     let ARR = [];

    //     for (let index = 0; index < 10000; index++) {


    //         let TEST1 = 0;
    //         let TEST2 = 0;
    //         let HASIL = 0;
    //         if (ITEM.title == 'PENJUMLAHAN' && ITEM.id == 1) {
    //             console.log(ITEM.title)
    //             TEST1 = Math.floor(Math.random() * (5 - 0 + 1)) + 0
    //             TEST2 = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    //             HASIL = parseInt(TEST1) + parseInt(TEST2);

    //             if (HASIL <= 5 && HASIL > 0 && Number.isInteger(HASIL)) {
    //                 ARR.push({ a: TEST1, b: TEST2, c: HASIL });
    //             }
    //         } else if (ITEM.title == 'PENJUMLAHAN' && ITEM.id == 2) {
    //             console.log(ITEM.title)
    //             TEST1 = Math.floor(Math.random() * (10 - 0 + 1)) + 0
    //             TEST2 = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    //             HASIL = parseInt(TEST1) - parseInt(TEST2);

    //             if (HASIL == 6 && Number.isInteger(HASIL)) {
    //                 ARR.push({ a: TEST1, b: TEST2, c: HASIL });
    //             }
    //         } else if (ITEM.title == 'PENGURANGAN' && ITEM.id == 1) {
    //             TEST1 = Math.floor(Math.random() * (5 - 0 + 1)) + 0
    //             TEST2 = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    //             HASIL = parseInt(TEST1) - parseInt(TEST2);
    //             if (HASIL <= 5 && HASIL > 0 && Number.isInteger(HASIL)) {
    //                 ARR.push({ a: TEST1, b: TEST2, c: HASIL });
    //             }
    //         } else if (ITEM.title == 'PERKALIAN' && ITEM.id == 1) {
    //             TEST1 = Math.floor(Math.random() * (5 - 0 + 1)) + 0
    //             TEST2 = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    //             HASIL = parseInt(TEST1) * parseInt(TEST2);
    //             if (HASIL <= 5 && HASIL > 0 && Number.isInteger(HASIL)) {
    //                 ARR.push({ a: TEST1, b: TEST2, c: HASIL });
    //             }
    //         } else if (ITEM.title == 'PEMBAGIAN' && ITEM.id == 1) {
    //             TEST1 = Math.floor(Math.random() * (5 - 0 + 1)) + 0
    //             TEST2 = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    //             HASIL = parseInt(TEST1) / parseInt(TEST2);
    //             if (HASIL <= 5 && HASIL > 0 && Number.isInteger(HASIL)) {
    //                 ARR.push({ a: TEST1, b: TEST2, c: HASIL });
    //             }
    //         }



    //         if (ARR.length == ITEM.jumlah) {
    //             break;
    //         }

    //     }
    //     console.log(ARR);
    //     setSoal(ARR);


    // }


    const generateSoal = () => {

        const SOAL = require('../../assets/soal.json');
        let dataArr = SOAL.filter(i => i.operator == ITEM.title && i.tipe == ITEM.tipe);
        console.log('jumlah soal', dataArr.length)

        let dataArrLimit = [];
        if (dataArr.length >= ITEM.jumlah) {
            dataArrLimit = dataArr.slice(0, ITEM.jumlah);

        } else {
            let x1 = [...dataArr];
            let x2 = [...dataArr, ...dataArr];
            let x3 = [...dataArr, ...dataArr, ...dataArr];
            let x4 = [...dataArr, ...dataArr, ...dataArr, ...dataArr];
            let x5 = [...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr];
            let x6 = [...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr];
            let x7 = [...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr];
            let x8 = [...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr];
            let x9 = [...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr];
            let x10 = [...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr];
            let x11 = [...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr];
            let x12 = [...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr];
            let xMax = [...x12, ...x12, ...x12, ...x12, ...x12, ...x12, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr, ...dataArr];

            console.log(xMax.length)
            if (x1.length >= ITEM.jumlah) {
                dataArrLimit = x1.slice(0, ITEM.jumlah);

            } else if (x2.length >= ITEM.jumlah) {
                dataArrLimit = x2.slice(0, ITEM.jumlah);

            } else if (x3.length >= ITEM.jumlah) {
                dataArrLimit = x3.slice(0, ITEM.jumlah);

            } else if (x4.length >= ITEM.jumlah) {
                dataArrLimit = x4.slice(0, ITEM.jumlah);

            } else if (x5.length >= ITEM.jumlah) {
                dataArrLimit = x5.slice(0, ITEM.jumlah);

            }
            else if (x6.length >= ITEM.jumlah) {
                dataArrLimit = x6.slice(0, ITEM.jumlah);

            } else if (x7.length >= ITEM.jumlah) {
                dataArrLimit = x7.slice(0, ITEM.jumlah);

            } else if (x8.length >= ITEM.jumlah) {
                dataArrLimit = x8.slice(0, ITEM.jumlah);

            } else if (x9.length >= ITEM.jumlah) {
                dataArrLimit = x9.slice(0, ITEM.jumlah);

            } else if (x10.length >= ITEM.jumlah) {
                dataArrLimit = x10.slice(0, ITEM.jumlah);



            } else if (x11.length >= ITEM.jumlah) {
                dataArrLimit = x11.slice(0, ITEM.jumlah);

            } else if (x12.length >= ITEM.jumlah) {
                dataArrLimit = x12.slice(0, ITEM.jumlah);

            } else if (xMax.length >= ITEM.jumlah) {
                dataArrLimit = xMax.slice(0, ITEM.jumlah);

            }


        }

        console.log('jumlah yang didapat', dataArrLimit.length);
        console.log('Jumlah Maksimal Soal', ITEM.jumlah)



        shuffleArray(dataArrLimit);
        setSoal(dataArrLimit.map(i => {
            return {
                a: i.a,
                b: i.b,
                isi: i.isi,
                status: 'NONE'
            }
        }));


        // let testArr = dataArrLimit.slice(0, 2);

        // console.log('aaray awal', testArr);
        // console.log('aaray double', testArrDouble);

        // shuffleArray(dataArrLimit);

    }

    const getFormattedTime = (time) => {
        // console.log(time);
        setHabis(time);
    };


    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const isFocus = useIsFocused();
    useEffect(() => {

        if (isFocus) {
            generateSoal();

        }


    }, [isFocus])

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.background,
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
                    }}>{ITEM.title} {MULAI}</Text>
                </View>
            </View>
            <View style={{
                flex: 1,

                margin: 16,
            }}>

                <Text style={{
                    fontFamily: fonts.primary[400],
                    fontSize: 12,
                    textAlign: 'center',
                    color: ITEM.color,
                    marginBottom: 16,
                }}>{ITEM.tipe}</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                    <View style={{
                        paddingHorizontal: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        borderRightWidth: 1,
                        borderColor: colors.primary,
                    }}>
                        <Text style={{
                            color: colors.primary,
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                        }}>SOAL</Text>
                        <Text style={{
                            marginTop: 10,
                            color: colors.primary,
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                        }}>{nomor + 1}/{soal.length}</Text>
                    </View>
                    <View style={{
                        flex: 1,
                        paddingHorizontal: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: colors.primary,
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                        }}>WAKTU</Text>
                        <Stopwatch getTime={getFormattedTime} options={
                            {
                                container: {
                                    backgroundColor: colors.background,
                                    padding: 5,
                                    borderRadius: 5,
                                    width: '100%',
                                },
                                text: {
                                    textAlign: 'center',
                                    fontSize: 20,
                                    color: colors.primary,
                                }
                            }
                        } start={true}
                            reset={false}
                        />

                    </View>
                </View>
                <View style={{
                    padding: 10,
                    backgroundColor: colors.white,
                    height: 150,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {
                        ITEM.tipe !== 'Perkalian Susun Bilangan 2 Digit (Acak)'
                            && ITEM.tipe !== 'Perkalian Susun Bilangan 3 Digit (Acak)'
                            && ITEM.tipe !== 'Pembagian Susun Cara Cepat (2 Digit & 3 Digit)'
                            && ITEM.tipe !== 'Pembagian Susun Cara Cepat (4 Digit, 5 Digit, 6 Digit)' ?

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                {soal[nomor].a !== '?' &&

                                    <Text style={{
                                        marginHorizontal: 10,
                                        fontFamily: fonts.primary[800],
                                        fontSize: 40,

                                    }}>{new Intl.NumberFormat("id-ID").format(soal[nomor].a)}</Text>
                                }

                                {soal[nomor].a == '?' &&

                                    <Text style={{
                                        marginHorizontal: 10,
                                        fontFamily: fonts.primary[800],
                                        fontSize: 40,

                                    }}>{JAWABAN.length == 0 ? '?' : new Intl.NumberFormat("id-ID").format(JAWABAN)}</Text>
                                }
                                <Text style={{
                                    marginHorizontal: 10,
                                    fontFamily: fonts.primary[800],
                                    fontSize: 40,

                                }}>{ITEM.operator}</Text>
                                {soal[nomor].b !== '?' &&

                                    <Text style={{
                                        marginHorizontal: 10,
                                        fontFamily: fonts.primary[800],
                                        fontSize: 40,

                                    }}>{new Intl.NumberFormat("id-ID").format(soal[nomor].b)}</Text>
                                }

                                {soal[nomor].b == '?' &&

                                    <Text style={{
                                        marginHorizontal: 10,
                                        fontFamily: fonts.primary[800],
                                        fontSize: 40,

                                    }}>{JAWABAN.length == 0 ? '?' : new Intl.NumberFormat("id-ID").format(JAWABAN)}</Text>
                                }

                                <Text style={{
                                    marginHorizontal: 10,
                                    fontFamily: fonts.primary[800],
                                    fontSize: 40,

                                }}>=</Text>

                                {(soal[nomor].b == '?' || soal[nomor].a == '?') &&

                                    <Text style={{
                                        marginHorizontal: 10,
                                        fontFamily: fonts.primary[800],
                                        fontSize: 40,

                                    }}>{soal[nomor].isi}</Text>
                                }

                                {(soal[nomor].b !== '?' && soal[nomor].a !== '?') &&

                                    <Text style={{
                                        marginHorizontal: 10,
                                        fontFamily: fonts.primary[800],
                                        fontSize: 40,

                                    }}>{new Intl.NumberFormat("id-ID").format(JAWABAN)}</Text>
                                }
                            </View>
                            : <View></View>


                    }

                    {(ITEM.tipe == 'Perkalian Susun Bilangan 2 Digit (Acak)'
                        || ITEM.tipe == 'Perkalian Susun Bilangan 3 Digit (Acak)'
                        || ITEM.tipe == 'Pembagian Susun Cara Cepat (2 Digit & 3 Digit)'
                        || ITEM.tipe == 'Pembagian Susun Cara Cepat (4 Digit, 5 Digit, 6 Digit)')
                        && <View style={{

                            // alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {soal[nomor].a !== '?' &&

                                <Text style={{
                                    textAlign: 'right',
                                    fontFamily: fonts.primary[800],
                                    fontSize: 30,
                                    lineHeight: 35,

                                }}>{soal[nomor].a}</Text>
                            }

                            {soal[nomor].a == '?' &&

                                <Text style={{
                                    textAlign: 'right',
                                    fontFamily: fonts.primary[800],
                                    fontSize: 30,
                                    lineHeight: 35,

                                }}>{JAWABAN.length == 0 ? '?' : JAWABAN}</Text>
                            }

                            {ITEM.operator == ':' && <View style={{
                                height: 5,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    flex: 1,
                                    borderBottomWidth: 1,
                                    width: '100%',
                                }} />
                                <Text style={{
                                    right: -14,
                                    bottom: -14,
                                    position: 'absolute',
                                    fontFamily: fonts.primary[800],
                                    lineHeight: 35,
                                    fontSize: 20
                                }}>=</Text>
                                {(soal[nomor].b !== '?' && soal[nomor].a !== '?' &&

                                    ITEM.operator == ':') &&

                                    <Text style={{
                                        right: -100,
                                        bottom: -14,
                                        position: 'absolute',
                                        fontFamily: fonts.primary[800],
                                        fontSize: 30,
                                        lineHeight: 35,
                                    }}>{JAWABAN}</Text>
                                }
                            </View>}

                            {soal[nomor].b !== '?' &&

                                <Text style={{
                                    textAlign: 'right',
                                    fontFamily: fonts.primary[800],
                                    fontSize: 30,
                                    lineHeight: 35,

                                }}>{soal[nomor].b}</Text>
                            }

                            {soal[nomor].b == '?' &&

                                <Text style={{
                                    textAlign: 'right',
                                    fontFamily: fonts.primary[800],
                                    fontSize: 30,
                                    lineHeight: 35,

                                }}>{JAWABAN.length == 0 ? '?' : JAWABAN}</Text>
                            }

                            {ITEM.operator == 'x' && <View style={{
                                height: 5,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    flex: 1,
                                    borderBottomWidth: 1,
                                    width: '100%',
                                }} />
                                <Text style={{
                                    right: -14,
                                    bottom: -14,
                                    position: 'absolute',
                                    fontFamily: fonts.primary[800],
                                    lineHeight: 35,
                                    fontSize: 20
                                }}>{ITEM.operator}</Text>


                            </View>}




                            {(soal[nomor].b == '?' || soal[nomor].a == '?') &&

                                <Text style={{
                                    fontFamily: fonts.primary[800],
                                    fontSize: 30,
                                    lineHeight: 35,

                                }}>{soal[nomor].isi}</Text>
                            }

                            {(soal[nomor].b !== '?' && soal[nomor].a !== '?') &&

                                ITEM.operator == 'x' &&

                                <Text style={{
                                    marginHorizontal: 10,
                                    fontFamily: fonts.primary[800],
                                    fontSize: 30,
                                    lineHeight: 35,
                                }}>{JAWABAN}</Text>
                            }
                        </View>

                    }
                </View>

                <View style={{
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-around'

                }}>
                    <View style={{
                        padding: 10,
                        backgroundColor: colors.primary,
                        borderRadius: 10,
                        width: windowWidth / 3,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontFamily: fonts.primary[600],
                            color: colors.white,
                            fontSize: 20,
                        }}>BENAR : {soal.filter(i => i.status == 'BENAR').length}</Text>
                    </View>
                    <View style={{
                        padding: 10,
                        backgroundColor: colors.danger,
                        borderRadius: 10,
                        width: windowWidth / 3,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontFamily: fonts.primary[600],
                            color: colors.white,
                            fontSize: 20,
                        }}>SALAH : {soal.filter(i => i.status == 'SALAH').length}</Text>
                    </View>
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <View onLayout={onLayout} style={{
                        flex: 1,
                    }}>
                        <FlatList showsVerticalScrollIndicator={false} data={BUTTON} numColumns={3} renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    if (item !== 'AC') {
                                        setJAWABAN(JAWABAN + item.toString())
                                    } else {
                                        if (JAWABAN.length >= 4) {
                                            setJAWABAN('')
                                        } else {
                                            setJAWABAN(JAWABAN.substring(0, JAWABAN.length - 1))
                                        }
                                    }
                                }} style={{
                                    flex: item == 0 ? 2 : 1,
                                    backgroundColor: item == 'AC' ? colors.danger : colors.white,
                                    margin: 5,
                                    height: tinggi / 4.6,
                                    borderRadius: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        fontFamily: fonts.primary[600],
                                        fontSize: 20,
                                        color: item == 'AC' ? colors.white : colors.black,

                                    }}>{item}</Text>
                                </TouchableOpacity>
                            )
                        }} />
                    </View>
                    <View style={{
                        width: 60,
                        paddingVertical: 4,
                    }}>
                        <TouchableOpacity onPress={() => {
                            if (soal[nomor].a !== '?' && soal[nomor].b !== '?' && parseInt(JAWABAN) == soal[nomor].isi) {

                                let TMP = [...soal];
                                TMP[nomor].jawaban = JAWABAN;
                                TMP[nomor].status = 'BENAR';
                                setSoal(TMP);
                                showMessage({
                                    type: 'success',
                                    message: 'Selamat Jawaban Betul !'
                                })


                            } else if (soal[nomor].a == '?' && soal[nomor].b !== '?') {

                                console.log('a tanda tanya');
                                let NEW_JAWABAN = 0;
                                if (ITEM.title == 'PENJUMLAHAN') {
                                    NEW_JAWABAN = parseInt(JAWABAN) + parseFloat(soal[nomor].b);
                                } else if (ITEM.title == 'PENGURANGAN') {
                                    NEW_JAWABAN = parseInt(JAWABAN) - parseFloat(soal[nomor].b);
                                } else if (ITEM.title == 'PERKALIAN') {
                                    NEW_JAWABAN = parseInt(JAWABAN) * parseFloat(soal[nomor].b);
                                } else if (ITEM.title == 'PEMBAGIAN') {
                                    NEW_JAWABAN = parseInt(JAWABAN) / parseFloat(soal[nomor].b);
                                }



                                if (NEW_JAWABAN == soal[nomor].isi) {
                                    let TMP = [...soal];
                                    TMP[nomor].jawaban = JAWABAN;
                                    TMP[nomor].status = 'BENAR';
                                    setSoal(TMP);
                                    showMessage({
                                        type: 'success',
                                        message: 'Selamat Jawaban Betul !'
                                    })
                                } else {

                                    let TMP = [...soal];
                                    TMP[nomor].jawaban = JAWABAN;
                                    TMP[nomor].status = 'SALAH';
                                    setSoal(TMP);
                                    showMessage({
                                        type: 'danger',
                                        message: 'Maaf Jawaban Salah !'
                                    })

                                }





                            } else if (soal[nomor].a !== '?' && soal[nomor].b == '?') {

                                console.log(soal[nomor]);
                                let NEW_JAWABAN = 0;
                                if (ITEM.title == 'PENJUMLAHAN') {
                                    NEW_JAWABAN = parseFloat(soal[nomor].a) + parseInt(JAWABAN);

                                    console.log(soal[nomor].isi)
                                } else if (ITEM.title == 'PENGURANGAN') {
                                    NEW_JAWABAN = parseFloat(soal[nomor].a) - parseInt(JAWABAN);
                                } else if (ITEM.title == 'PERKALIAN') {
                                    NEW_JAWABAN = parseFloat(soal[nomor].a) * parseInt(JAWABAN);
                                } else if (ITEM.title == 'PEMBAGIAN') {
                                    NEW_JAWABAN = parseFloat(soal[nomor].a) / parseInt(JAWABAN);
                                }




                                if (NEW_JAWABAN == soal[nomor].isi) {
                                    let TMP = [...soal];
                                    TMP[nomor].jawaban = JAWABAN;
                                    TMP[nomor].status = 'BENAR';
                                    setSoal(TMP);
                                    showMessage({
                                        type: 'success',
                                        message: 'Selamat Jawaban Betul !'
                                    })
                                } else {

                                    let TMP = [...soal];
                                    TMP[nomor].jawaban = JAWABAN;
                                    TMP[nomor].status = 'SALAH';
                                    setSoal(TMP);
                                    showMessage({
                                        type: 'danger',
                                        message: 'Maaf Jawaban Salah !'
                                    })

                                }





                            } else {
                                let TMP = [...soal];
                                TMP[nomor].jawaban = JAWABAN;
                                TMP[nomor].status = 'SALAH';
                                setSoal(TMP);
                                showMessage({
                                    type: 'danger',
                                    message: 'Maaf Jawaban Salah !'
                                })
                            }

                            if (nomor < ITEM.jumlah - 1) {
                                setNomor(nomor + 1);
                                setJAWABAN('');
                            } else {
                                console.log({
                                    item: ITEM,
                                    soal: soal,
                                    mulai: MULAI,
                                    habis: habis

                                })
                                navigation.navigate('Hasil', {
                                    item: ITEM,
                                    soal: soal,
                                    mulai: MULAI,
                                    habis: habis

                                })
                            }
                        }} style={{
                            backgroundColor: '#2D86C0',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            // height: '100%'
                        }}>
                            <Text style={{
                                fontFamily: fonts.primary[600],
                                fontSize: 20,
                                color: colors.white,
                            }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({})