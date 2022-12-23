/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardActionArea,
  CardContent,
  Paper,
  Typography,
} from '@mui/material';
import axios from 'axios';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import bg from '@/assets/woodworks.jpg';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Seo from '@/components/Seo';

const Home: NextPage = () => {
  const [reviews, setReviews] = useState<{ name: string; content: string }[]>();
  useEffect(() => {
    (async () => {
      const { data: reviews } = await axios.get('http://localhost:3001/review');
      setReviews(reviews);
    })();
  }, []);

  return (
    <>
      <Seo />
      <main>
        <section
          className={`absolute z-0 h-screen w-screen bg-cover brightness-50`}
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        ></section>
        <section className='relative z-10 flex h-screen flex-col items-center justify-center bg-transparent text-white !brightness-100'>
          <h1 className='z-10 mb-5 text-5xl text-green-200'>UD PRIMA JAYA</h1>
          <h2>Supplier Kayu Olahan</h2>
        </section>
        <section className='h-screen'>
          <HeroSection></HeroSection>
        </section>
        <section className='h-screen'>
          <div className='flex h-full items-center justify-center'>
            <Paper
              elevation={2}
              className='flex flex-col items-center justify-center gap-y-4 rounded-xl p-10'
            >
              <h1>Ulasan Mengenai Kami</h1>
              <hr />
              <div className='flex max-w-4xl gap-x-4 overflow-auto p-1'>
                {reviews?.map(({ name, content }, i) => (
                  <Card sx={{ minWidth: 200, width: 200 }} key={`${name}-${i}`}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                          {name}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          {content}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                ))}
              </div>
            </Paper>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Home;
