// hooks/useServerData.ts
import { useQuery } from "@tanstack/react-query";


const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const useServerData = () => {
  return useQuery({
    queryKey: ["serverData"],
    queryFn: fetchData,
    staleTime: 1000 * 60 * 5, // Cache the data for 5 minutes
    retry: 1, // Retry once on failure
  });
};
