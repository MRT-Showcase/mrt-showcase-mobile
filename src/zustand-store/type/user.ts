export type User = {
    id: string
    fullName: string | null;
    phoneNumber: string;
    email: string
    token: Token | null;
}

export type Token = {
    type: string;
    name: string;
    token: string;
    lastUsedAt: string | null;
    expiresAt: string | null;
}