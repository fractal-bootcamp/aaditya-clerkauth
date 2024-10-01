import 'dotenv/config'
import express from 'express'
import { clerkClient, getAuth, requireAuth } from '@clerk/express'

const app = express()

app.get('/protected', requireAuth({ signInUrl: '/sign-in' }), async (req, res) => { 
  try {
    const { userId } = getAuth(req)
    const user = await clerkClient.users.getUser(userId)  // 'await' used in async function
    return res.json({ user })
  } catch (error) {
    return res.status(500).json({ error: 'Unable to retrieve user information' })
  }
})

app.get('/sign-in', (req, res) => {
  // Assuming you have a template engine installed and are using a Clerk JavaScript SDK on this page
  res.render('sign-in')
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
