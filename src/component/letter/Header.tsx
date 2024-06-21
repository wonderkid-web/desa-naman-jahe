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
        width: 120,
        height: 120,
        position: 'relative',
    },
    logo: {
        width: '90%',
        height: '90%',
        objectFit: 'cover',
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
        <Image  src={"/logo.jpg"} />
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>PEMERINTAH KABUPATEN LANGKAT</Text>
            <Text style={styles.titleText}>KECAMATAN BINJAI</Text>
            <Text style={styles.titleText}>Desa Suka Makmur</Text>
            <Text style={styles.address}>Alamat: Jl. Ponpes As`adiyah Km. 1 Email: desasukamakmur@desaku.com</Text>
            <Text style={styles.contact}>Telp/Hp. 085729129241 Website: http://desasukamakmur.vercel.app</Text>
            <Text style={styles.contact}> Kode Pos: 42320</Text>
        </View>
    </View>
);

export default Header;
