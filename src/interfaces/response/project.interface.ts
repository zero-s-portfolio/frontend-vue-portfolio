export interface ProjectRes {
    id: number;
    title: string;
    category: string;
    image: string;
    hoverImage: string;
    description: string;
    hoverDescription: string;
    period: string;
    gradient: string;
    url: string | null;
    codeDocumentation: string | null;
    createdAt: string;
    updatedAt: string;
    stack: {
        id: number;
        stackName: string;
        projectId: number;
        createdAt: string;
    }[];
}