import * as trpc from "@trpc/server";

import { Context } from "../../../..";

export function createRouter() {
  return trpc.router<Context>();
}
