export interface WorkRes {
    id: number;
    company: string;
    role: string;
    period: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    skill: {
        id: number;
        skillName: string;
        workId: number;
        createdAt: string;
    }[]
}