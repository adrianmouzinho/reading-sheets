import { Request, Response } from 'express'
import { prisma } from '../../database/client'

export async function listCustomerServices(req: Request, res: Response) {
  try {
    const customerServices = await prisma.customerService.findMany()

    return res.json(customerServices)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}