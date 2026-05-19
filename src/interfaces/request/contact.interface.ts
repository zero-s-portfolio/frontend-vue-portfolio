export interface ContactMessageRequest {
  name?: string;
  email: string;
  subject?: string;
  message: string;
  category?:
    | "GENERAL"
    | "FREELANCE"
    | "COLLABORATION"
    | "CONSULTATION"
    | "BUG";
}