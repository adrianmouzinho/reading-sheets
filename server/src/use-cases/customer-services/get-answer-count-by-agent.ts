import { Request, Response } from 'express'
import { prisma } from '../../database/client'

export async function getAnswerCountByAgent(req: Request, res: Response) {
  try {
    const { agent } = req.query

    if (!agent) {
      return res.status(400).json({ message: 'Agent is required' })
    }

    const bad = await prisma.customerService.count({
      where: {
        option: '3',
        agent: {
          contains: String(agent),
        },
      }
    })

    const regular = await prisma.customerService.count({
      where: {
        option: '2',
        agent: {
          contains: String(agent),
        },
      }
    })

    const good = await prisma.customerService.count({
      where: {
        option: '1',
        agent: {
          contains: String(agent),
        },
      }
    })

    const total = await prisma.customerService.count({
      where: {
        agent: {
          contains: String(agent),
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