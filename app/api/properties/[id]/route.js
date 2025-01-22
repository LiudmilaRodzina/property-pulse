import connectDB from '@/config/database';
import Property from '@/models/Property';
import { getSessionUser } from '@/utils/getSessionUser';

// GET /api/properties/:id
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const { id } = await params;
    const property = await Property.findById(id);

    if (!property) return new Response('Property not found', { status: 404 });

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    return new Response('Error fetching data', { status: 500 });
  }
};

// DELETE /api/properties/:id
export const DELETE = async (request, { params }) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId)
      return new Response('User ID is required', { status: 401 });

    const { userId } = sessionUser;

    const { id: propertyId } = await params;
    const property = await Property.findById(propertyId);
    if (!property) return new Response('Property Not Found', { status: 404 });

    if (property.owner.toString() !== userId)
      return new Response('Unauthorized', { status: 401 });

    await property.deleteOne();

    return new Response('Property deleted', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Something Went wrong', { status: 500 });
  }
};
