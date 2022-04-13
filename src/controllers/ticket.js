const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/*
Expected request body:
{
  "screeningId": 1,
  "customerId": 1,
  "seatIds": [
    1, 
    2,
    3
  ]
}*/

const bookTicket = async (req, res) => {


  // We need to transform the array of seatIds in to an array of 
  // objects that we can pass to prisma to link the seats to the 
  // ticket:
  //
  // In the request:             What prisma needs:
  // [1, 2, 3]                => [ { id: 1 }, { id: 2}, {id: 3} ]
  //
  // We can use the map method to do that
  const seatIds = req.body.seatIds.map(seatId => ({ id: seatId }))

  //Create the ticket
  const bookedTicket = await prisma.ticket.create({
    data: {
      //link the customer record using the customerId from the
      //request
      customer: {
        connect: {
          id: req.body.customerId
        }
      },
      //link the screening record using the screeningId from the
      //request
      screening: {
        connect: {
          id: req.body.screeningId
        }
      },
      //Link the seats using the array we created earlier
      seats: {
        connect: seatIds
      }
    }
  })

  res.json({ ticket: bookedTicket })
}

module.exports = { bookTicket }