import connectDB from '@/config/database';
import { getSessionUser } from '@/utils/getSessionUser';
import User from '@/models/User';
import Property from '@/models/Property';

export const dynamic = 'force-dynamic';

// GET /api/bookmarks
export const GET = async (request) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.user.id)
      return new Request('User ID is required', { status: 401 });
    const { userId } = sessionUser;

    const user = await User.findOne({ _id: userId });

    const bookmarks = await Property.find({ _id: { $in: user.bookmarks } });

    return new Response(JSON.stringify(bookmarks), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Something went wrong', { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    connectDB();

    // get propertyId from body data
    const { propertyId } = await request.json();

    // get session user
    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.user.id)
      return new Response('User ID is required', { status: 401 });
    const { userId } = sessionUser;

    // find user in database
    const user = await User.findOne({ _id: userId });

    let isBookmarked = user.bookmarks.includes(propertyId);
    let message;

    if (isBookmarked) {
      user.bookmarks.pull(propertyId);
      isBookmarked = false;
      message = 'Bookmark removed successfully';
    } else {
      user.bookmarks.push(propertyId);
      isBookmarked = true;
      message = 'Bookmark added successfully';
    }

    await user.save();

    return new Response(JSON.stringify({ message, isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response('Something went wrong', { status: 500 });
  }
};
