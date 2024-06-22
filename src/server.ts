import { Hono } from "hono";
import anime from "@/anime";
import cleanRoutes from "@/utils/clean_routes";

const app = new Hono({
  strict: false,
}).basePath("/api");

app.route("/", anime);

app.get("/", (c) => {
  return c.json(
    {
      message: "All is well!",
      routes: cleanRoutes(app.routes, "/api"),
    },
    200
  );
});

export default app;
