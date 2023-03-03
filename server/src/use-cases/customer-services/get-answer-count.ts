import { Request, Response } from 'express'
import { prisma } from '../../database/client'
import dayjs from 'dayjs'

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


    console.log(dayjs("2023-02-02T23:07:10.000Z").startOf('day').toDate())

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