import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

function useSetting() {
  const {
    data: settingsData = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  return { settingsData, isLoading };
}

export default useSetting;
