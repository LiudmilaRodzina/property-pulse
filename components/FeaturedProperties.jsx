import { fetchProperties } from '@/utils/requests';
import FeaturedPropertyCard from './FeaturedPropertyCard';
import Link from 'next/link';

const FeaturedProperties = async () => {
  const data = await fetchProperties({ showFeatured: true });
  const properties = data.sort(() => Math.random() - Math.random()).slice(0, 2);

  return (
    properties.length > 0 && (
      <>
        <section className="bg-blue-50 px-4 pt-6 pb-10">
          <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
              Featured Properties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {properties.map((property) => (
                <FeaturedPropertyCard key={property._id} property={property} />
              ))}
            </div>
          </div>
          <div className="m-auto max-w-lg mt-10 mb-2 px-6">
            <Link
              href="/properties/featured"
              className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
            >
              View All Featured Properties
            </Link>
          </div>
        </section>
      </>
    )
  );
};

export default FeaturedProperties;
