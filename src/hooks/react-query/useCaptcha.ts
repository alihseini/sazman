// hooks/useCaptcha.ts
import { useQuery } from "@tanstack/react-query";
import { getCaptcha } from "../../services/user";

export const useCaptcha = () => {
  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["captcha"],
    queryFn: getCaptcha,
    refetchOnWindowFocus: false,
  });

  return {
    captcha: data,
    isLoading,
    isFetching,
    error,
    refetchCaptcha: refetch,
  };
};
