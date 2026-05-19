export interface ContactMessageResponse {
    id: number;
    name: string;
    email: string;
    subject?: string;
    message: string;
  
    status: string;
    category: string;
  
    createdAt: string;
}