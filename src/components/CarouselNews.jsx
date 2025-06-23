import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card } from "./CardNews";
import { CardContent } from "./CardContentNews";

// Carousel untuk Mobile
export const CarouselNews = ({ data }) => {
  return (
    <div className="md:hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-[85%] pl-2 pr-4"
            >
              <Card className="w-full">
                <CardContent>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-45 object-cover rounded-sm mb-3"
                  />
                  <span className="text-xs font-medium text-gray-500 border rounded-sm p-0.5">
                    {item.postTags?.[0]?.title || "Umum"}
                  </span>
                  <h2 className="text-base font-medium mt-1 mb-2">
                    {item.title}
                  </h2>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

// Carousel untuk Desktop
export const CarouselNewsDesktop = ({ data }) => {
  return (
    <div className="hidden md:block">
      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent>
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/4 pl-2 pr-2"
            >
              <Card className="w-full">
                <CardContent>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-sm mb-3"
                  />
                  <span className="text-xs font-medium text-gray-500 border rounded-sm p-0.5">
                    {item.postTags?.[0]?.title || "Umum"}
                  </span>
                  <h3 className="text-sm font-medium mt-1 line-clamp-3">
                    {item.content}
                  </h3>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};
