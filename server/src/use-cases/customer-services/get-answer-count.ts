import { Request, Response } from 'express'
import { prisma } from '../../database/client'

export async function getAnswerCount(req: Request, res: Response) {
  try {
    const bad = await prisma.customerService.count({
      where: {
        option: '3',
      }
    })

    const regular = await prisma.customerService.count({
      where: {
        option: '2',
      }
    })

    const good = await prisma.customerService.count({
      where: {
        option: '1',
      }
    })

    const total = await prisma.customerService.count()

    return res.json({
      counts: {
        'Bom/ótimo': good,
        'Regular': regular,
        'Ruim': bad,
      },
      total,
    })
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}