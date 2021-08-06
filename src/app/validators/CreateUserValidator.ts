import * as Yup from 'yup'
import { Request, Response, NextFunction } from 'express'

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      lastname: Yup.string().required(),
      nickname: Yup.string().required().max(30),
      address: Yup.string().required(),
      bio: Yup.string().max(100),
    })

    await schema.validate(req.body, { abortEarly: false })

    return next()
  } catch (err) {
    return res.status(400).json({
      error: 'Validation fails',
      messages: err.inner.map((m: any) => ({ message: m.message })),
    })
  }
}
