export interface ApiResponse<T> {
    status: "ok" | "error";
    totalResults: number;
    articles: T[];

    code?: string;
    message?: string;
}