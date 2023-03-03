import { Request, Response } from 'express'
import { prisma } from '../../database/client'

export async function listCustomerServiceById(req: Request, res: Response) {
  try {
    const { id } = req.params

    const customerService = await prisma.customerService.findUnique({
      where: {
        id,
      }
    })
  
    return res.json(customerService)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}