import type { WorkRes } from "@/interfaces/response/work.interface";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/vue-query";

export const useGetAllWork = () => {
  return useQuery({
    queryKey: ["work-experience"],
    queryFn: async () => {
      const response = await api.get<{
        data: WorkRes[];
      }>(`/work-experiences`);

      return response.data.data;
    },
  });
};