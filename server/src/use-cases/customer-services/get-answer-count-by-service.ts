import { Request, Response } from 'express'
import { prisma } from '../../database/client'

export async function getAnswerCountByService(req: Request, res: Response) {
  try {
    const { service } = req.query

    if (!service) {
      return res.status(400).json({ message: 'Service is required' })
    }

    const bad = await prisma.customerService.count({
      where: {
        option: '3',
        service: {
          contains: String(service),
        },
      }
    })

    const regular = await prisma.customerService.count({
      where: {
        option: '2',
        service: {
          contains: String(service),
        },
      }
    })

    const good = await prisma.customerService.count({
      where: {
        option: '1',
        service: {
          contains: String(service),
        },
      }
    })

    const total = await prisma.customerService.count({
      where: {
        service: {
          contains: String(service),
        },
      }
    })

    return res.json({
      counts: {
        good,
        regular,
        bad,
      },
      total,
    })
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}