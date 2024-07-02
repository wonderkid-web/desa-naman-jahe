import { UUID } from "crypto"

export type NomorSurat = {
    id: UUID;
    created_at: Date,
    nomor: number;
}

export type FormLogin = {
    nik: string;
    password: string;
}

export type FormRegister = {
    nik: string;
    nama: string;
    password: string;
}