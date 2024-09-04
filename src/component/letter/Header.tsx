// @ts-nocheck
"use client"
// File: Header.js
import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import logo from '../lett../letter/logo.jpger/logo.jpg'

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '4px solid black',
        marginBottom: 20,
        paddingBottom: 10,
        width: '95%',
        marginHorizontal: 'auto',
    },
    logoContainer: {
        width: 100,
        height: 100,
        left: -15,
        position: 'relative',
    },
    logo: {
        // width: '90%',
        // height: '90%',
        borderRadius: 100
        // objectFit: 'cover',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 5,
        fontWeight: 'bold',
    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold"
    },
    address: {
        fontSize: 12,

    },
    contact: {
        fontSize: 12,
    },
});

const Header = () => (
    <View style={styles.header}>
        <View style={styles.logoContainer}>
        <Image  src={"/langkat.png"} style={styles.logo} />
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>PEMERINTAH KABUPATEN LANGKAT</Text>
            <Text style={styles.titleText}>KECAMATAN BINJAI</Text>
            <Text style={styles.titleText}>Desa Naman Jahe</Text>
            <Text style={styles.address}>Alamat: Jl. Ponpes As`adiyah Km. 1 </Text>
            <Text style={styles.contact}>Telp/Hp. 085729129241 Website: http://desa-naman-jahe.vercel.app</Text>
            <Text style={styles.contact}> Kode Pos: 42320</Text>
        </View>
    </View>
);

export default Header;
