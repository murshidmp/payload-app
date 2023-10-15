import express from 'express'
import payload from 'payload'

require('dotenv').config()
const app = express()

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

app.get('/posts/videos/stream', async (req, res) => {
  try {
    const shortVideoPosts = await payload.find({
      collection: 'posts',
      where: {
        "media.type": {
          equals: 'shortVideo',
        },
      },
    });
    res.json(shortVideoPosts);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching short video posts.' });
  }
});

const start = async () => {
  
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  

  app.listen(3000)
}

start()
