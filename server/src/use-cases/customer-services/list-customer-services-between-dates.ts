import { Request, Response } from "express"
import { prisma } from "../../database/client"
import dayjs from "dayjs"

// import utc from 'dayjs/plugin/utc' 
// import timezone from 'dayjs/plugin/timezone' 

// dayjs.extend(utc)
// dayjs.extend(timezone)

export async function listCustomerServicesBetweenDates(req: Request, res: Response) {
  try {
    const { startDate, endDate } = req.query

    if (!startDate || !endDate) {
      return res.status(400).json({ message: 'Start date e end date are required' })
    }
    
    const startDateFromParams = dayjs(startDate as string).toDate()
    const endDateFromParams = dayjs(endDate as string).toDate()

    console.log(startDateFromParams)
    console.log(endDateFromParams)

    const customerServices = await prisma.customerService.findMany({
      where: {
        date: {
          gte: startDateFromParams,
          lte: endDateFromParams,
        }
      }
    })

    return res.json(customerServices)
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
}