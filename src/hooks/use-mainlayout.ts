import { useOutletContext } from "react-router-dom";

type ContextType = {
  toggleSidebar: () => void;
};

export function useMainLayout() {
  return useOutletContext<ContextType>();
}