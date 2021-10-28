import { useLocation } from "react-router";

export function useRouteQuery() {
    return new URLSearchParams(useLocation().search);
}