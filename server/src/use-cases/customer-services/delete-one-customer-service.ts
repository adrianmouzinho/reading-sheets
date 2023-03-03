import { Request, Response } from 'express'
import { prisma } from '../../database/client'

export async function deleteOneCustomerService(req: Request, res: Response) {
  try {
    const { id } = req.params

    await prisma.customerService.delete({
      where: {
        id,
      }
    })

    return res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}