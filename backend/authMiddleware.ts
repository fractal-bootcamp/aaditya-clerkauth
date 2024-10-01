import type { NextFunction, Request, Response } from 'express';
import { clerkClient, getAuth } from '@clerk/express';


// Middleware to protect routes and retrieve user info
export const clerkAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get the auth context from the request using Clerk
    const { userId } = getAuth(req);

    // If no userId is found, it means the user is not authenticated
    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized access. Please sign in.' });
    }

    // Fetch the user information from Clerk API
    const user = await clerkClient.users.getUser(userId);

    // Attach the user to the request object for further use in the route
    req.user = user;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error('Error in Clerk authentication middleware:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
