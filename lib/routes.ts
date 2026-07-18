export const ROUTES = {
  home: "/",
  dashboard: "/dashboard",
  profile: "/profile",
  opportunities: "/opportunities",
  opportunity: (id: string | number) => `/opportunities/${id}`,
} as const;
