'use client';
import { useState, useEffect } from 'react';
import PropertyCard from '@/components/PropertyCard';
import Spinner from '@/components/Spinner';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

const FeaturedPropertiesPage = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchFeaturedProperties = async () => {
      try {
        const res = await fetch('/api/properties/featured');

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        }
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch featured properties');
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedProperties();
  }, []);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </div>
      </section>
      <section className="px-4 py-6">
        <h2 className="text-center text-2xl mb-4">Featured Properties</h2>
        <div className="container-xl lg:container m-auto px-4 py-6">
          {properties.length === 0 ? (
            <div>No featured properties</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default FeaturedPropertiesPage;
