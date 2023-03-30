import { Request, Response } from 'express'
import { prisma } from '../../database/client'

export async function listCustomerServicesByAnswer(req: Request, res: Response) {

  try {
    const customerServices = await prisma.customerService.findMany({
      select: {
        date: true,
        option: true,
      },
      orderBy: {
        date: 'asc'
      }
    })

    return res.json(customerServices)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}