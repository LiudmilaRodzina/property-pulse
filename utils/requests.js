const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

const fetchProperties = async ({ showFeatured = false } = {}) => {
  try {
    if (!apiDomain) return [];

    const res = await fetch(
      `${apiDomain}/properties${showFeatured ? '/featured' : ''}`,
      { cache: 'no-store' }
    );

    if (!res.ok) throw new Error('Failed to fetch data');

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchProperty = async (id) => {
  try {
    if (!apiDomain) return null;

    const res = await fetch(`${apiDomain}/properties/${id}`);

    if (!res.ok) throw new Error('Failed to fecth data');

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchProperties, fetchProperty };
