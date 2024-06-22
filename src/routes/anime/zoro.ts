import cleanRoutes from "@/utils/clean_routes";
import { Hono } from "hono";
import { ANIME } from "@consumet/extensions";

const zoroRouter = new Hono().basePath("/zoro");

const zoro = new ANIME.Zoro();

zoroRouter.get("/:query", async (c) => {
  const query = c.req.param("query");
  const data = await zoro.search(query);
  return c.json(data, 200);
});

zoroRouter.get("/info/:id", async (c) => {
  const id = c.req.param("id");
  const data = await zoro.fetchAnimeInfo(id);
  return c.json(data, 200);
});

zoroRouter.get("/watch/:episodeId", async (c) => {
  const episodeId = c.req.param("episodeId").substring(0);
  const data = await zoro.fetchEpisodeSources(episodeId);
  return c.json(data, 200);
});

zoroRouter.get("/", (c) => {
  return c.json(
    {
      message: "Everything is fine!",
      routes: cleanRoutes(zoroRouter.routes, "/zoro"),
    },
    200
  );
});

export default zoroRouter;
