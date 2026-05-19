import type { SectionSettingRes } from "@/interfaces/response/section.interface";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/vue-query";

export const useGetSectionbyKey = (key?: string) => {
  return useQuery({
    queryKey: ["sectionKey", key],
    queryFn: async () => {
      const response = await api.get<{
        data: SectionSettingRes;
      }>(`/setting-sections/${key}`);

      return response.data.data;
    },
  });
};