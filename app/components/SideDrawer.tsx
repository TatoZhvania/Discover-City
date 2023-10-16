import Image from 'next/image';
import React from 'react';
import { AiOutlineClose, AiOutlineStar } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { BsFillPersonFill, BsMap, BsShare } from 'react-icons/bs';

const BASE_PHOTO_URL =
  'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400';

const SideDrawer = ({ place, close }: any) => {
  const onDirectionClick = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=' +
        place.name +
        place.formatted_address
    );
  };
  const photoReference =
    place?.photos && place.photos.length > 0
      ? place.photos[0].photo_reference
      : '';

  return (
    <div className="h-screen w-screen md:w-[400px] bg-white shadow-lg p-5 z-20 overflow-auto">
      <button onClick={() => close()} className="absolute right-1">
        <AiOutlineClose size={25} />
      </button>
      <div>
        <h2 className="line-clamp-2 text-[20px] font-semibold mb-3">
          {place.name}
        </h2>
        <Image
          src={
            BASE_PHOTO_URL +
            '&photo_reference=' +
            photoReference +
            '&key=' +
            process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY
          }
          alt="placeholder"
          width={200}
          height={80}
          className="w-full rounded-xl h-[170px] object-cover"
        />
        <div className="flex gap-2 mt-3">
          <CiLocationOn className="w-7 h-7 text-red-500" />
          <h2 className="text-[16px] text-gray-400 line-clamp-2">
            {place.formatted_address}
          </h2>
        </div>
        <div className="flex gap-2 mt-3">
          <AiOutlineStar className="w-7 h-7 text-red-500" />
          <h2 className="text-[16px]text-gray-400 line-clamp-2 tracking-wider flex">
            {place.rating} (
            <BsFillPersonFill className="w-7 h-7 text-red-500" />
            <span>{place.user_ratings_total}</span>)
          </h2>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            onClick={() => onDirectionClick()}
            className="flex gap-2 p-1 px-3 bg-red-500 rounded-full text-white hover:scale-105 transition-all"
          >
            <BsMap className="w-5 h-5" />
            <span>Direction</span>
          </button>
          <button className="flex gap-2 p-1 px-3 bg-red-500 rounded-full text-white hover:scale-105 transition-all">
            <BsShare className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
        <div className="mt-5">
          <iframe
            width={450}
            height={250}
            loading="lazy"
            className="w-full h-[200px] rounded-lg"
            src={
              'https://www.google.com/maps/embed/v1/place?key=' +
              process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY +
              '&q=' +
              place.formatted_address
            }
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
