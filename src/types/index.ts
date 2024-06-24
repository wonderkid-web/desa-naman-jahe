import { UUID } from "crypto"

export type NomorSurat = {
    id: UUID;
    created_at: Date,
    nomor: number;
}