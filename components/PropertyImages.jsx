import Image from 'next/image';

const PropertyImages = ({ images }) => {
  return (
    <section className="bg-blue-50 p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${
                // if the number of images is odd and if the current index is the last image
                images.length % 2 === 1 && index === images.length - 1
                  ? 'col-span-2'
                  : 'col-span-1'
              }`}
            >
              <Image
                src={image}
                alt="Property image"
                className="object-cover h-[400px] w-full rounded-xl"
                width={0}
                height={0}
                sizes="100vw"
                priority={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyImages;
