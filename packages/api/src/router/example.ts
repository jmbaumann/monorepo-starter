import { createTRPCRouter, publicProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return "Hello from trpc!";
  }),
});
