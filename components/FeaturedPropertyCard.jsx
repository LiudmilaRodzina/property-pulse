'use client';
import { useRouter } from 'next/navigation';
import FeaturedPropertyCardDetails from '@/components/FeaturedPropertyCardDetails';

const FeaturedPropertyCard = ({ property }) => {
  const router = useRouter();

  const handleCardClick = (e) => {
    if (e.target.closest('a')) return;
    router.push(`/properties/${property._id}`);
  };

  return (
    <div onClick={handleCardClick}>
      <FeaturedPropertyCardDetails property={property} />
    </div>
  );
};

export default FeaturedPropertyCard;
