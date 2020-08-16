// async/await error catcher
import { RequestHandler } from 'express';

export const catchAsyncErrors = (fn: RequestHandler): RequestHandler => (
  req,
  res,
  next
) => {
  const routePromise = fn(req, res, next);
  if (routePromise.catch) {
    routePromise.catch((err: any) => next(err));
  }
};
