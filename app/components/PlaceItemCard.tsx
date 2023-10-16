import Image from 'next/image';
import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';

const BASE_URL_PHOTO =
  'https://maps.googleapis.com/maps/api/place/photo?maxwidth=800';

const PlaceItemCard = ({ place }: any) => {
  return (
    <div
      className="w-full z-10 border-[1px] 
    rounded-xl shadow-md min-h-full hover:scale-105 transition-all cursor-pointer"
    >
      {place?.photos ? (
        <Image
          src={
            BASE_URL_PHOTO +
            '&photo_reference=' +
            place?.photos[0]?.photo_reference +
            '&key=' +
            process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY
          }
          alt="placeholder"
          width={200}
          height={80}
          className="w-full h-[150px] object-cover rounded-t-xl"
        />
      ) : (
        <Image
          src="/placeholder.jpg"
          alt="placeholder"
          width={200}
          height={80}
          className="w-full h-[150px] object-cover rounded-t-xl"
        />
      )}
      <div className="p-2">
        <h2 className="line-clamp-2">{place.name}</h2>
        <div className="flex gap-2 mt-3">
          <CiLocationOn className="text-red-500" size={30} />
          <h2 className="text-[12px]text-gray-400 line-clamp-2">
            {place.formatted_address}
          </h2>
        </div>
        <div className="flex gap-2 mt-3">
          <AiOutlineStar className="text-red-500" size={20} />
          <h2 className="text-[12px]text-gray-400 line-clamp-2 tracking-wider">
            {place.rating} ({place.user_ratings_total})
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PlaceItemCard;
