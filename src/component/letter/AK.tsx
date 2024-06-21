// File: DeathCertificatePDF.js

import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Header from './Header'; // Pastikan Anda memiliki Header.js sesuai dengan komponen PDF lainnya

const styles = StyleSheet.create({
    page: {
        padding: 30,
    },
    section: {
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        textDecoration: 'underline',
        fontWeight: 'bold',
    },
    letterNumber: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    content: {
        fontSize: 12,
        marginBottom: 10,
        textAlign: 'justify',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        fontSize: 12
    },
    label: {
        width: '30%',
    },
    value: {
        width: '70%',
        fontWeight: "ultrabold"
    },
    signature: {
        marginTop: 50,
        fontSize: 12,
        textAlign: 'right',
    },
    signatureName: {
        marginTop: 60,
    },
});

const AK = ({ name, nik, dob, gender, status, occupation, religion, address, skDate, applicantName, applicantDob, schoolName, issuer, date }:any) => (
    <Document>
        <Page style={styles.page}>
            <Header />
            <Text style={styles.title}>KUTIPAN AKTA KEMATIAN</Text>
            <Text style={styles.letterNumber}>Nomor: 1234/AK/VI/2023</Text>
            <Text style={styles.content}>
                Berdasarkan Surat Kematian Nomor: {nik}, dengan ini kami menerangkan bahwa:
            </Text>
            <View style={styles.section}>
                <View style={styles.row}>
                    <Text style={styles.label}>Nama</Text>
                    <Text style={styles.value}>: {name}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>NIK</Text>
                    <Text style={styles.value}>: {nik}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Tempat/Tanggal Lahir</Text>
                    <Text style={styles.value}>: {dob}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Jenis Kelamin</Text>
                    <Text style={styles.value}>: {gender}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Status Perkawinan</Text>
                    <Text style={styles.value}>: {status}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Pekerjaan</Text>
                    <Text style={styles.value}>: {occupation}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Agama</Text>
                    <Text style={styles.value}>: {religion}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Alamat</Text>
                    <Text style={styles.value}>: {address}</Text>
                </View>
            </View>
            <Text style={styles.content}>
                Telah meninggal dunia pada tanggal {skDate}. Berdasarkan pengantar dari RT/RW setempat, bahwa benar yang bersangkutan meninggal dunia.
            </Text>
            <Text style={styles.content}>
                Data keluarga yang bersangkutan adalah sebagai berikut:
            </Text>
            <View style={styles.section}>
                <View style={styles.row}>
                    <Text style={styles.label}>Nama Anak</Text>
                    <Text style={styles.value}>: {applicantName}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Tempat/Tanggal Lahir Anak</Text>
                    <Text style={styles.value}>: {applicantDob}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Sekolah Anak</Text>
                    <Text style={styles.value}>: {schoolName}</Text>
                </View>
            </View>
            <Text style={styles.content}>
                Surat keterangan ini berlaku untuk keperluan administrasi yang bersangkutan.
            </Text>
            <Text style={styles.content}>
                Demikian surat keterangan ini kami buat, untuk dipergunakan sebagaimana mestinya.
            </Text>
            <View style={styles.signature}>
                <Text>{date}</Text>
                <Text style={styles.signatureName}>{issuer}</Text>
                <Text>Lurah Naman Jahe</Text>
            </View>
        </Page>
    </Document>
);

export default AK;
