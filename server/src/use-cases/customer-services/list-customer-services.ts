import { Request, Response } from 'express'
import { prisma } from '../../database/client'

export async function listCustomerServices(req: Request, res: Response) {
  const { limit, offset } = req.query

  let limitNumber = Number(limit)
  let offsetNumber = Number(offset)
  const url = req.url

  if (!limitNumber) {
    limitNumber = 10
  }

  if (!offsetNumber) {
    offsetNumber = 0
  }
  
  try {
    const customerServices = await prisma.customerService.findMany({
      skip: offsetNumber,
      take: limitNumber,
      orderBy: {
        date: 'asc'
      }
    })

    const count = await prisma.customerService.count()

    const totalPages = Math.ceil(count / limitNumber)

    const next = offsetNumber + limitNumber
    const nextUrl = next < count ? `/customerServices?limit=${limitNumber}&offset=${next}` : null

    const prev = offsetNumber - limitNumber
    const prevUrl = prev >= 0 ? `/customerServices?limit=${limitNumber}&offset=${prev}` : null

    return res.json({
      prevUrl,
      nextUrl,
      limit: limitNumber,
      offset: offsetNumber,
      totalPages,
      results: customerServices,
    })
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}