import { Request, Response } from 'express'
import { prisma } from '../../database/client'

export async function deleteAllCustomerServices(req: Request, res: Response) {
  try {
    await prisma.customerService.deleteMany()
    return res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}