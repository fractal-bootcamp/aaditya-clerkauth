import 'dotenv/config';
import express, { Request, Response } from 'express';
import { requireAuth, getAuth } from '@clerk/express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { clerkClient } from '@clerk/clerk-sdk-node';

const app = express();
const prisma = new PrismaClient();

// Enable CORS for requests from the React frontend
app.use(cors({
  origin: 'http://localhost:5173', // React frontend URL
  credentials: true,  // Allow credentials (cookies, etc.)
}));

app.use(express.json()); // Middleware to parse JSON bodies

// Root route to handle requests to "/"
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the backend!');
});

// Protected route that returns user data
app.get('/protected', requireAuth({ signInUrl: '/sign-in' }), async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req);  // Get the authenticated Clerk user ID
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized access' });
    }

    const user = await prisma.user.findUnique({ where: { clerkId: userId } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json({ user });
  } catch (error) {
    console.error('Error in /protected route:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Handle other undefined routes with a 404 response
app.use((req: Request, res: Response) => {
  res.status(404).send('Not Found');
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
