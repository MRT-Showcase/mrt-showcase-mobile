export interface LoginResponse {
    user: {
        id: string,
        fullName: string,
        phoneNumber: string,
        firebaseId: string | null,
        email: string,
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
