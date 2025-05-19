import { useState } from 'react';

const Card = ({ children, className }) => (
  <div className={`bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children }) => (
  <div className='p-3'>
    {children}
  </div>
);

const pageNews = () => {
  const [latestNews] = useState([
    {
      category: 'Pengabdian',
      title: 'The Secret to a Healthy Diet: Finding the Right Way to Lose Weight and Improve Your Health',
      image: '../dedications/dedikasi2.jpg',
    },
  ]);

  const [sideNews] = useState([
    {
      category: 'Pengabdian',
      title: 'Detoxing for a Better Life: Finding Balance and Happiness with a Healthy Body',
      image: '../dedications/dedikasi2.jpg',
    },
    {
      category: 'Pengabdian',
      title: 'Change Your Life with Exercise: Practical Tips for Achieving an Ideal Body and Improving Fitness',
      image: '../dedications/dedikasi2.jpg',
    },
    {
      category: 'Pengabdian',
      title: 'Exposing the Dark Side of Drugs: The Hidden Dangers Behind the Pills You Take',
      image: '../dedications/dedikasi2.jpg',
    },
  ]);

  return (
    <div className={`container mx-auto px-6 md:px-10 ${
      location.pathname === "/berita" ? "mt-[40px]" : "mt-10"
    }`}>
    

      <h1 className='text-2xl font-bold mb-4'>Berita Terkini</h1>
      <p className='text-base mb-6'>
        Check out our latest health articles. And get health information that is useful for you.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <Card className='md:col-span-2'>
          <CardContent>
            <img src={latestNews[0].image} alt={latestNews[0].title} className=' w-[100%] h-56 object-cover rounded-sm mb-3 ' />
            <span className='text-xs font-medium text-gray-500 border rounded-sm p-0.5'>{latestNews[0].category}</span>
            <h2 className='text-base font-medium mt-1 mb-2'>{latestNews[0].title}</h2>
          </CardContent>
        </Card>

        <div className='flex flex-col gap-3 border border-gray-200 rounded-lg p-3 md:col-span-2'>
          {sideNews.map((news, index) => (
            <div key={index} className='flex items-center gap-3 p-2'>
              <img src={news.image} alt={news.title} className='w-18 h-18 object-cover rounded-sm' />
              <div>
                <span className='text-xs font-regular text-gray-500 border rounded-sm p-0.5'>{news.category}</span>
                <h3 className='text-base font-'>{news.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className='text-xl font-bold mt-10'>Semua Berita</h2>
    </div>
  );
};

export default pageNews;
