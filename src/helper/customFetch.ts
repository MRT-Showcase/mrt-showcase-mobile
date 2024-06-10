interface CustomRequestInit extends RequestInit {
    isAuthorized?: boolean;
}

interface CustomResponse<T> {
    data: T;
    message: string;
    statusCode: number;
    success: boolean;
}

export default async function customFetch<T>(
    url: string,
    options: CustomRequestInit = {},
    user?: { token: string } | null
) {
    let baseUrl = 'https://mrtftui-be.fly.dev'
    const headers = {authorization: '', 'Content-Type': 'application/json'}
    const fullUrl = new URL(url, baseUrl)

    if (options.isAuthorized) {
        if (user) {
            if (user.token) {
                headers.authorization = `Bearer ${user.token}`
            } else {
                throw new Error("Invalid token")
            }
        } else {
            throw new Error("Invalid user")
        }
    }

    let rawResult = await fetch(fullUrl.toString(), {
        headers,
        ...options,
    })
    return await rawResult.json() as CustomResponse<T>
}