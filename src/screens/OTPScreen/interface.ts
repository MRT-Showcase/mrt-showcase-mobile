export interface LoginResponse {
    user: {
        id: string,
        fullName: string | null,
        phoneNumber: string,
        firebaseId: string | null,
        createdAt: string
        updatedAt: string
    },
    token: {
        type: string
        name: string
        token: string
        lastUsedAt: string | null
        expiresAt: string | null
    }
}
