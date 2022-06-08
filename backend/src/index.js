const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = { message: "backend API" };
});

app.use(bodyParser());
app.use(router.routes());

const port = 5000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
