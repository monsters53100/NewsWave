import type {NewsSource} from "./Source.ts";

export interface Article {
    source: NewsSource;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;

}

// export type NewsCategory =