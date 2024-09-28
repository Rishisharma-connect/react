// hooks/useServerData.t
import { fetchData } from "@/app/server/action";
import { useQuery } from "@tanstack/react-query";

export const useActionData = () => {
  return useQuery({
    queryKey: ["actionData"],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5, // Cache the data for 5 minutes
    retry: 1, // Retry once on failure
  });
};
