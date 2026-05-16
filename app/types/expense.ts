export interface Expense {
    id: string;
    amount: number;
    merchant: string;
    description: string;
    date: string; // ISO format date string
    category: string;
    subcategory: string;
}
