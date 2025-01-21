const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch all properties
const fetchProperties = async () => {
  try {
    // handle the case where the domain is not available yet
    if (!apiDomain) return [];

    const res = await fetch(`${apiDomain}/properties`, { cache: 'no-store' });

    if (!res.ok) throw new Error('Failed to fetch data');

    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// Fetch a single property
const fetchProperty = async (id) => {
  try {
    if (!apiDomain) return null;

    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) throw new Error('Failed to fecth data');

    const data = res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { fetchProperties, fetchProperty };
