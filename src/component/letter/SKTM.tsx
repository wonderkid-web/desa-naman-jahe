// @ts-nocheck
// File: SKTM.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Header from './Header';

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
    letterNumber:{
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
        fontWeight:"ultrabold"
    },
    signature: {
        marginTop: 30,
        fontSize: 12,
        textAlign: 'right',
    },
    signatureName: {
        marginTop: 60,
    },
});

const currYear = new Date().getFullYear()

const SKTM = ({ nomorSurat, name, dob, address, nik, gender, status, occupation, religion, skDate, applicantName, applicantDob, schoolName, issuer, date }) => (
    <Document>
        <Page style={styles.page}>
            <Header />
            <Text style={styles.title}>SURAT KETERANGAN TIDAK MAMPU</Text>
            <Text style={styles.letterNumber}>Nomor: {nomorSurat}/SKTM/IX/{currYear}</Text>
            <Text style={styles.content}>
                Desa Naman Jahe dengan ini menerangkan bahwa:
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
                Berdasarkan surat pengantar dari RT 008 RW 002 No. 032/RT.008/RW.002/IX/2019 Tanggal {skDate}, bahwa benar yang bersangkutan keluarga tidak mampu.
            </Text>
            <Text style={styles.content}>
                Surat keterangan ini untuk persyaratan Bantuan Pendidikan Sekolah atas nama:
            </Text>
            <View style={styles.section}>
                <View style={styles.row}>
                    <Text style={styles.label}>Nama</Text>
                    <Text style={styles.value}>: {applicantName}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Tempat/Tanggal Lahir</Text>
                    <Text style={styles.value}>: {applicantDob}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Sekolah</Text>
                    <Text style={styles.value}>: {schoolName}</Text>
                </View>
            </View>
            <Text style={styles.content}>
                Surat Keterangan dinyatakan tidak berlaku apabila terjadi pelanggaran, peraturan Perundang-undangan dan Pemkab Langkat serta apabila terdapat kekeliruan dalam penulisan surat keterangan ini menjadi tanggung jawab pemohon/pemegang bersedia mempertanggungjawabkan secara hukum tanpa melibatkan pihak manapun.
            </Text>
            <Text style={styles.content}>
                Surat keterangan ini berlaku untuk satu kali keperluan.
            </Text>
            <Text style={styles.content}>
                Demikian surat keterangan ini kami buat, untuk dipergunakan sebagaimana mestinya.
            </Text>
            <View style={styles.signature}>
                <Text>Salapian, {date}</Text>
                <Text style={styles.signatureName}>{issuer}</Text>
                <Text>Kepala Desa Naman Jahe</Text>
                <Text>Nobdi Nanda Ginting Suka</Text>
            </View>
        </Page>
    </Document>
);

export default SKTM;
