'use client';
import { useRouter } from 'next/navigation';
import PropertyCardDetails from '@/components/PropertyCardDetails';

const PropertyCard = ({ property }) => {
  const router = useRouter();

  const handleCardClick = (e) => {
    if (e.target.closest('a')) return;
    router.push(`/properties/${property._id}`);
  };

  return (
    <div onClick={handleCardClick}>
      <PropertyCardDetails property={property} />
    </div>
  );
};

export default PropertyCard;
