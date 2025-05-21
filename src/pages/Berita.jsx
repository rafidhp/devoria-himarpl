import { useState, useEffect } from "react";
import AnimatedLongText from "../components/AnimatedLongText";
import AnimatedLongText2 from "../components/AnimatedLongText2";
import { Link } from "react-router-dom";
import { Card } from "../components/CardNews";
import { CardContent } from "../components/CardContentNews";
import { CarouselNews } from "../components/CarouselNews";
import axios from "axios";

const pageNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("/api/api/v1/news?page=1&limit=10&order=desc", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        setNews(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  const [latestNews] = useState([
    {
      category: "Pengabdian",
      title: "The Secret to a Healthy Diet: Finding the Right Way to Lose Weight and Improve Your Health",
      image: "../dedications/dedikasi2.jpg",
    },
    {
      category: "Pengabdian",
      title: "Detoxing for a Better Life: Finding Balance and Happiness with a Healthy Body",
      image: "../dedications/dedikasi2.jpg",
    },
    {
      category: "Pengabdian",
      title: "Change Your Life with Exercise: Practical Tips for Achieving an Ideal Body and Improving Fitness",
      image: "../dedications/dedikasi2.jpg",
    },
    {
      category: "Pengabdian",
      title: "Exposing the Dark Side of Drugs: The Hidden Dangers Behind the Pills You Take",
      image: "../dedications/dedikasi2.jpg",
    },
  ]);

  const [sideNews] = useState([
    {
      category: "Pengabdian",
      title: "Detoxing for a Better Life: Finding Balance and Happiness with a Healthy Body",
      image: "../dedications/dedikasi2.jpg",
    },
    {
      category: "Pengabdian",
      title: "Change Your Life with Exercise: Practical Tips for Achieving an Ideal Body and Improving Fitness",
      image: "../dedications/dedikasi2.jpg",
    },
    {
      category: "Pengabdian",
      title: "Exposing the Dark Side of Drugs: The Hidden Dangers Behind the Pills You Take",
      image: "../dedications/dedikasi2.jpg",
    },
  ]);

  const [allNews] = useState([
    {
      category: "Meditation",
      title: "Finding Calm in the Midst of Busyness: Meditation for Overcoming Stress and Anxiety",
      image: "../dedications/dedikasi1.jpg",
    },
    {
      category: "Massage",
      title: "These are the extraordinary benefits of relaxing massage for physical and mental health.",
      image: "../dedications/dedikasi1.jpg",
    },
    {
      category: "Lime",
      title: "Complete Guide to the Benefits and Uses of Lime",
      image: "../dedications/dedikasi1.jpg",
    },
    {
      category: "Washing hands",
      title: "Simple Ways to Prevent the Spread of Deadly Diseases",
      image: "../dedications/dedikasi1.jpg",
    },
  ]);

  return (
    <div className={`container mx-auto px-6 md:px-10 ${location.pathname === "/berita" ? "mt-[40px]" : "mt-10"}`} id="scrollableDiv">
      {/* Latest News */}
      <AnimatedLongText text="Berita Terkini" className="text-2xl font-bold mb-4"/>
      <p className="text-base mb-6">Check out our latest health articles. And get health information that is useful for you.</p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Card for Desktop */}
        <Card className="md:col-span-2 hidden md:block">
          <CardContent>
            <img src={latestNews[0].image} alt={latestNews[0].title} className="w-full h-56 object-cover rounded-sm mb-3" />
            <span className="text-xs font-medium text-gray-500 border rounded-sm p-0.5">{latestNews[0].category}</span>
            <h2 className="text-base font-medium mt-1 mb-2">{latestNews[0].title}</h2>
          </CardContent>
        </Card>

        {/* Carousel for Mobile */}
        <CarouselNews data={latestNews} />

        {/* Will disappear in mobile view */}
        <div className="hidden md:flex flex-col gap-3 border border-gray-200 rounded-lg p-3 md:col-span-2 flex-shrink-0 w-[85%] snap-start md:w-auto ">
          {sideNews.map((news, index) => (
            <div key={index} className="flex items-center gap-3 p-2">
              <img src={news.image} alt={news.title} className="w-18 h-18 object-cover rounded-sm" />
              <div>
                <span className="text-xs font-regular text-gray-500 border rounded-sm p-0.5">{news.category}</span>
                <h3 className="text-base font-">{news.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All News */}
      <AnimatedLongText text="Semua Berita" className="text-2xl font-bold mt-10 mb-4"/>
      <p className="text-base mb-6">Explore more about our most popular articles that are currently being discussed by people.</p>
      {/* Card for deskrop */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-6">
        {allNews.map((item, idx) => (
          <Card key={idx}>
            <CardContent>
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-sm mb-3" />
              <span className="text-xs font-medium text-gray-500 border rounded-sm p-0.5">{item.category}</span>
              <h3 className="text-sm font-medium mt-1">{item.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Carousel for Mobile */}
      <CarouselNews data={allNews} />
      <Link to="/semua-artikel" className="inline-block mt-4 text-sm text-green-700 hover:underline">
        See all articles &rarr;
      </Link>
    </div>
  );
};

export default pageNews;
