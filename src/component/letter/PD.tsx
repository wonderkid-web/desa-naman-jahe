// File: DomisiliPDF.js
"use client"
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Header from './Header';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    textDecoration: 'underline',
    fontWeight: 'bold',
    marginBottom: 20,
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
    fontSize: 12,
  },
  label: {
    width: '30%',
  },
  value: {
    width: '70%',
    fontWeight: 'ultrabold',
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

const PD = ({ name, gender, dob, nik, occupation, religion, nationality, address }: any) => (
  <Document>
    <Page style={styles.page}>
      <Header />
      <Text style={styles.title}>SURAT KETERANGAN PINDAH DOMISILI</Text>
      <Text style={styles.content}>
        Yang bertanda tangan di bawah ini Ketua RT. 07 RW.10 Desa Naman Jahe Kecamatan Binjai Kabupaten Langkat, Menerangkan bahwa:
      </Text>
      <View>
        <View style={styles.row}>
          <Text style={styles.label}>Nama Lengkap</Text>
          <Text style={styles.value}>: {name}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Jenis Kelamin</Text>
          <Text style={styles.value}>: {gender}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Tempat/Tgl Lahir</Text>
          <Text style={styles.value}>: {dob}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>No. KK/KTP</Text>
          <Text style={styles.value}>: {nik}</Text>
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
          <Text style={styles.label}>Kewarganegaraan</Text>
          <Text style={styles.value}>: {nationality}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Alamat</Text>
          <Text style={styles.value}>: {address}</Text>
        </View>
      </View>
      <Text style={styles.content}>
        Adalah benar-benar penduduk di alamat tersebut dan berwenang untuk membuat surat keterangan ini.
      </Text>
      <Text style={styles.signature}>Anam Jahe, {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</Text>
      <Text style={styles.signature}>(Ketua RT. 07 RW.10)</Text>
    </Page>
  </Document>
);


export default PD