const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getSeatsForScreen = async (req, res) => {
  //load the seats for the screen Id
  const seats = await prisma.seat.findMany({
    where: {
      screenId: parseInt(req.params.screenId)
    }
  })
  res.json({ seats })
}

module.exports = { getSeatsForScreen } 