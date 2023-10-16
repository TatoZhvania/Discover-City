import category from '@/data/category';
import Image from 'next/image';
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const Hero = ({ userInput }: any) => {
  const [searchInput, setSearchInput] = useState<string>();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    userInput(searchInput);
  };

  return (
    <div className="text-center">
      <div>
        <div className="mt-5">
          <h2 className="text-[55px] text-red-600 tracking-widest font-semibold">
            DISCOVER
          </h2>
          <h2 className="text-[20px]">Your Amazing City</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="mt-5 z-10 flex gap-2 items-center justify-center">
              <input
                type="text"
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput || ''}
                placeholder="Search Anything"
                className=" bg-white p-3 z-10 border-[1px] rounded-full px-5 w-[36%] shadow-lg outline-red-300"
              />
              <button
                type="submit"
                className="bg-red-600 rounded-full p-3 shadow-md z-10 cursor-pointer hover:scale-105 transition-all"
              >
                <BsSearch className="w-6 h-6 text-white" />
              </button>
            </div>
          </form>
          <div className="mt-5 flex flex-col justify-center items-center">
            <h2>Or Browse the category</h2>
            <div className="grid grid-cols-3 md:grid-cols-7 w-[50%] justify-center gap-5 mt-3">
              {category.map((item, index) => (
                <div
                  key={index}
                  onClick={() => userInput(item.name)}
                  className="border-[1px] w-[60px] p-4 bg-white rounded-full z-10 hover:border-red-600 shadow-lg hover:scale-110 cursor-pointer transition-all duration-300"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
