import { Card } from "../components/CardNews";
import { CardContent } from "./CardContentNews";
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export const CarouselNews = ({ data }) => {
  return (
    <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 px-4 scroll-smooth w-full">
      {data.map((item, index) => (
        <Card
          key={index}
          className="flex-shrink-0 max-w-[350px] w-[100%] snap-center"
        >
          <CardContent>
            <img src={item.image} alt={item.title} className='w-full h-45 object-cover rounded-sm mb-3' />
            <span className='text-xs font-medium text-gray-500 border rounded-sm p-0.5'>{item.postTags[0]?.title}</span>
            <h2 className='text-base font-medium mt-1 mb-2'>{item.title}</h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export const CarouselNewsDesktop = ({ data }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' }); // Geser ke kiri
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' }); // Geser ke kanan
  };

  return (
    <div className="relative mb-10">
      {/* Tombol Kiri */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Container Carousel */}
      <div
        ref={scrollRef}
        className="hidden md:flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 scroll-smooth w-full"
      >
        {data.map((item, index) => (
          <Card
            key={index}
            className="flex-shrink-0 w-full max-w-[300px] snap-center"
          >
            <CardContent>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-sm mb-3"
              />
              <span className="text-xs font-medium text-gray-500 border rounded-sm p-0.5">
                {item.postTags[0]?.title || 'umum'}
              </span>
              <h3 className="text-sm font-medium mt-1 line-clamp-3">{item.content}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tombol Kanan */}
      <button
        onClick={scrollRight}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};


