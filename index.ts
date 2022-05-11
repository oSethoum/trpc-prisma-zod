import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./prisma/trpc/routers";
import { PrismaClient } from "@prisma/client";
import * as trpc from "@trpc/server";
const app = express();
const port = 3001;

export const createContext = () => {
  const prisma = new PrismaClient();
  return {
    prisma,
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;

app.use(cors());
app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({ router: appRouter, createContext })
);

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
