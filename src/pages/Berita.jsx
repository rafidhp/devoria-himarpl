import { useState, useEffect } from "react";
import AnimatedLongText from "../components/AnimatedLongText";
import AnimatedLongText2 from "../components/AnimatedLongText2";
import { Link } from "react-router-dom";
import { Card } from "../components/CardNews";
import { CardContent } from "../components/CardContentNews";
import { CarouselNews } from "../components/CarouselNews";
import axios from "axios";
import { CarouselNewsDesktop } from "../components/CarouselNews";


const pageNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get("/api/api/v1/news")
      .then((response) => {
        setNews(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-80">
        <h4 className="text-black">Loading...</h4>
      </div>
    );
  }
  const latestNews = [...news]
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  .slice(0, 4); 

  const [firstNews, ...otherNews] = latestNews;

  return (
    <div className={`container mx-auto px-6 md:px-10 ${location.pathname === "/berita" ? "mt-[40px]" : "mt-10"}`} id="scrollableDiv">
      {/* Latest News */}
      <AnimatedLongText text="Berita Terkini" className="text-2xl font-bold mb-4"/>
      <p className="text-base mb-6">Dapatkan berita terbaru seputar kegiatan kampus dan HIMARPL. Ikuti informasi penting, event, serta pencapaian mahasiswa RPL.</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Card for Desktop */}
        {firstNews && (
          <Card className="md:col-span-2 hidden md:block">
            <CardContent>
              <img src={firstNews.image} alt={firstNews.title} className="w-full h-56 object-cover rounded-sm mb-3" />
              <span className="text-xs font-medium text-gray-500 border rounded-sm p-0.5">{firstNews.postTags[0]?.title}</span>
              <h2 className="text-base font-medium mt-1 mb-2">{firstNews.title}</h2>
            </CardContent>
          </Card>
        )}        

        {/* Carousel for Mobile */}
        <CarouselNews data={latestNews} />

        {/* Will disappear in mobile view */}
        <div className="hidden md:flex flex-col gap-3 border border-gray-200 rounded-lg p-3 md:col-span-2 flex-shrink-0 w-[85%] snap-start md:w-auto ">
          {otherNews.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-2">
              <img src={item.image} alt={item.title} className="w-18 h-18 object-cover rounded-sm" />
              <div>
                <span className="text-xs font-regular text-gray-500 border rounded-sm p-0.5">{item.postTags[0]?.title|| 'umum'}</span>
                <h3 className="text-base line-clamp-2">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All News */}
      <AnimatedLongText text="Semua Berita" className="text-2xl font-bold mt-10 mb-4"/>
      <p className="text-base mb-6">Telusuri seluruh berita seputar HIMARPL dan aktivitas kampus. Jangan lewatkan informasi terbaru, agenda penting, dan kisah inspiratif dari mahasiswa RPL.</p>

      {/* Carousel & card for deskrop */}
      <CarouselNewsDesktop data={news}/>

      {/* Carousel for Mobile */}
      <CarouselNews data={news} />
    </div>
  );
};

export default pageNews;
