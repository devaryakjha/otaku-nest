import cleanRoutes from "@/utils/clean_routes";
import { Hono } from "hono";

const anime = new Hono().basePath("/anime");

anime.get("/", (c) => {
  return c.json(
    {
      message: "Everything is fine!",
      routes: cleanRoutes(anime.routes, "/anime"),
    },
    200
  );
});

export default anime;
