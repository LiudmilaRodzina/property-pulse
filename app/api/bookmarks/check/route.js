import connectDB from '@/config/database';
import { getSessionUser } from '@/utils/getSessionUser';
import User from '@/models/User';

export const dynamic = 'force-dynamic';

export const POST = async (request) => {
  try {
    connectDB();

    const { propertyId } = await request.json();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.user.id)
      return new Response('User ID is required', { status: 401 });
    const { userId } = sessionUser;

    const user = await User.findOne({ _id: userId });

    let isBookmarked = user.bookmarks.includes(propertyId);

    return new Response(JSON.stringify({ isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response('Something went wrong', { status: 500 });
  }
};
