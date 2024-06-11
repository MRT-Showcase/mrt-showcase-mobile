import customFetch from "../../helper/customFetch";

export type ArticleList = {
    id: string;
    title: string;
    createdAt: string;
    headerUrl: string;
}

export type ArticleDetail = {
    id: string;
    title: string;
    content: string | null;
    author: string | null;
    textToSpeechUrl: string | null;
    createdAt: string;
    updatedAt: string;
    headerUrl: string;
    headerAltText: string | null;
}

export async function fetchArticleList(): Promise<ArticleList[]> {
    console.log("getArticleList");
    let response = await customFetch<ArticleList[]>('/articles', {
        isAuthorized: false
    })

    if (!response.success) {
        throw new Error("Error fetching articles")
    }
    return response.data
}

export async function fetchArticleDetail({
                                             id
                                         }: {
                                             id: string;
                                         }
): Promise<ArticleDetail> {
    console.log("getArticleDetail");
    let response = await customFetch<ArticleDetail>('/articles/' + id, {
        isAuthorized: false
    })

    if (!response.success) {
        throw new Error("Error fetching article")
    }

    let data = response.data.content
    if (data === null) {
        return response.data
    }
    const base64 = require('base-64');
    response.data.content = base64.decode(response.data.content)
    return response.data
}


