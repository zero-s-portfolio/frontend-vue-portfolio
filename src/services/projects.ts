import type { ProjectRes } from "@/interfaces/response/project.interface";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/vue-query";

export const useGetAllProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await api.get<{
        data: ProjectRes[];
      }>(`/projects`);

      return response.data.data;
    },
  });
};