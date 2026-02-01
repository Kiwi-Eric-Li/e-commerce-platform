export type SortValue = "latest" | "low" | "high"

export type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
    imageUrl: string;
    variant: string[];
}

