import type { RouterRoute } from "hono/types";

const cleanRoutes = (routes: RouterRoute[], remove?: string): string[] => {
  return routes
    .map((route) => {
      if (!!remove && route.path === remove) return undefined;
      if (!!remove && route.path.includes(remove))
        return route.path.replace(remove, "");
      return route.path;
    })
    .filter((route) => !!route) as string[];
};

export default cleanRoutes;
