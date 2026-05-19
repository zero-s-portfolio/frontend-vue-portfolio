import { useMutation, useQuery } from "@tanstack/vue-query";
import { api } from "@/lib/axios";

import type { ContactMessageRequest } from "@/interfaces/request/contact.interface";
import type { ContactMessageResponse } from "@/interfaces/response/contact.interface";

export const useCreateContactMessage = () => {
  return useMutation({
    mutationFn: async (payload: ContactMessageRequest) => {
      const response = await api.post("/contact", payload);

      return response.data;
    },
  });
};

export const useGetContactMessages = () => {
  return useQuery({
    queryKey: ["contact"],
    queryFn: async () => {
      const response = await api.get<{
        data: ContactMessageResponse;
      }>("/contact");

      return response.data.data;
    },
  });
};
