import type { NextFunction, Request, Response } from 'express';
import { clerkClient, getAuth } from '@clerk/express';
import prisma from './prisma';

export const clerkAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = getAuth(req);

    if (!userId) {
      return res.status(401).json({ error: 'Unauthorized access. Please sign in.' });
    }

    const clerkUser = await clerkClient.users.getUser(userId);

    let user = await prisma.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          clerkId: userId,
          email: clerkUser.emailAddresses[0].emailAddress,
          name: clerkUser.firstName + ' ' + clerkUser.lastName,
        },
      });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error('Error in Clerk authentication middleware:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
