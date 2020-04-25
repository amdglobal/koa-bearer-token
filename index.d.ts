declare module '@amdglobal/koa-bearer-token' {
import * as Koa from 'koa';
  type Options = {
    queryKey?: string;
    bodyKey?: string;
    headerKey?: string;
    reqKey?: string;
  };
  export default function bearerToken(opts?: Options): Koa.Middleware;
}
