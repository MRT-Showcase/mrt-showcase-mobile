import customFetch from "../../helper/customFetch";

export type ArticleList = {
    id: string;
    title: string;
    createdAt: string;
    headerUrl: string;
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


