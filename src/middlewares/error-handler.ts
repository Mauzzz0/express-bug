import { NextFunction, Request, Response } from 'express';

export const ErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (!err) next();

  res.status(501).json({
    code: 'error',
    message: err.message,
  });
};
