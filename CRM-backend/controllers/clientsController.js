import prisma from '../db/index.js'

export const getAllClients = async (req, res) => {
  try {
    const clients = await prisma.client.findMany({
      orderBy: { createdAt: 'desc' },
    })
    res.json(clients)
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении клиентов' })
  }
}
