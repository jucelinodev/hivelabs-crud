import { NextFunction, Request, Response } from 'express'
import CustomError from '../utils/CustomError'

export default function handleError(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof CustomError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    })
  }

  console.error(err)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
}
