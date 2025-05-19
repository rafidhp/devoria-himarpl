import { Card } from "../components/CardNews";
import { CardContent } from "./CardContentNews";


export const CarouselNews = ({ data }) => {
  return (
    <div className="md:hidden overflow-x-auto snap-x snap-mandatory flex gap-4 px-4 scroll-smooth w-full">
      {data.map((news, index) => (
        <Card
          key={index}
          className="flex-shrink-0 w-[90%] snap-center"
        >
          <CardContent>
            <img src={news.image} alt={news.title} className='w-full h-56 object-cover rounded-sm mb-3' />
            <span className='text-xs font-medium text-gray-500 border rounded-sm p-0.5'>{news.category}</span>
            <h2 className='text-base font-medium mt-1 mb-2'>{news.title}</h2>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};