"use client"

// File: Document.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Header from './Header';

// Membuat gaya untuk komponen surat
const styles = StyleSheet.create({
    page: {
        padding: 30,
    },
    section: {
        marginBottom: 10,
    },
    subject: {
        fontSize: 14,
        marginBottom: 10,
    },
    body: {
        fontSize: 12,
    },
    footer: {
        marginTop: 20,
        fontSize: 10,
        textAlign: 'center',
    },
});

const Dokumen = ({ logo, sender, recipient, date, subject, body }:any) => (
    <Document>
        <Page style={styles.page}>
            <Header />
            <View style={styles.section}>
                <Text>{sender}</Text>
                <Text>{recipient}</Text>
                <Text>{date}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.subject}>{subject}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.body}>{body}</Text>
            </View>
            <View style={styles.footer}>
                <Text>Terima kasih,</Text>
                <Text>{sender.split('\n')[0]}</Text>
            </View>
        </Page>
    </Document>
);

export default Dokumen;
