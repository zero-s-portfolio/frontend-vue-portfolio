import type { SkillRes } from "@/interfaces/response/skill.interface";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/vue-query";

export const useGetAllSkill = () => {
  return useQuery({
    queryKey: ["skill"],
    queryFn: async () => {
      const response = await api.get<{
        data: SkillRes[];
      }>(`/skills`);

      return response.data.data;
    },
  });
};