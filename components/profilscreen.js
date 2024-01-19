import {
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Pressable,
    Image,
} from 'react-native';
import * as Linking from 'expo-linking';
import { AntDesign } from '@expo/vector-icons';

import Nom from "./nom.js"
import Des from "./des.js"

export default function HomeScreen() {
    return (
        <View style={styles.cp}>
            <View style={styles.profil}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <View style={styles.circle}>
                        <Image
                            source={{
                                uri: 'https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg',
                            }} style={{ width: "100%", height: "100%", borderRadius: 100 / 2 }}
                        />
                    </View>
                </View>

                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'gray',
                        justifyContent: 'center',
                    }}>
                    <Nom nom="Toni" prenom="PASTRE" metier="dev" />
                    <Des des="test" />
                </View>
            </View>
            <View style={styles.contact}>
                <View
                    style={{
                        flex: 2,
                        backgroundColor: '#11235A',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                    <View style={styles.reseau}>
                        <AntDesign name="facebook-square" size={24} color="black" />
                    </View>
                    <View style={styles.reseauc}>
                        <AntDesign name="facebook-square" size={24} color="blue" />

                    </View>
                    <View style={styles.reseau}>
                        <AntDesign name="facebook-square" size={24} color="black" />
                    </View>
                </View>
                <View
                    style={{
                        flex: 2,
                        backgroundColor: '#596FB7',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <View
                        style={{
                            width: '50%',
                            height: 50,
                            backgroundColor: '#C6CF9B',
                        }}>
                        <Pressable
                            style={{
                                fontWeight: '500',
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                Linking.openURL('tel:0762475314');
                            }}>
                            <Text>CALL</Text>
                        </Pressable>
                    </View>
                </View>
                <View
                    style={{
                        flex: 0.5,
                        backgroundColor: '#596FB7',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                    <View
                        style={{
                            backgroundColor: '#C6CF9B',
                            justifyContent: 'left',
                            alignItems: 'left',
                            margin: 45,
                            height: 30,
                            width: 120,
                        }}>
                        <Pressable
                            style={{
                                fontWeight: '500',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: '100%',
                            }}
                            onPress={() => {
                                Linking.openURL('sms:0762475314');
                            }}>
                            <Text>SMS</Text>
                        </Pressable>
                    </View>

                    <View
                        style={{
                            backgroundColor: '#C6CF9B',
                            justifyContent: 'right',
                            alignItems: 'right',
                            margin: 45,
                            height: 30,
                            width: 120,
                        }}>
                        <Pressable
                            style={{
                                fontWeight: '500',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: '100%',
                            }}
                            onPress={() => {
                                Linking.openURL('mailto:pastre.toni@gmail.com');
                            }}>
                            <Text>Mail</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cp: {
        flex: 5
    },
    profil: {
        backgroundColor: 'black',
        flex: 1
    },
    contact: {
        backgroundColor: 'purple',
        flex: 1
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: 'red',
    },
    reseau: {
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
        backgroundColor: 'blue',
        margin: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    reseauc: {
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
        backgroundColor: 'black',
        alignItems: "center",
        justifyContent: "center"
    },
});
