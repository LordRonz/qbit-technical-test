/* eslint-disable @next/next/no-img-element */
import { Paper } from '@mui/material';
import React from 'react';

const HeroSection = () => {
  return (
    <>
      <div className='relative flex h-screen items-center overflow-hidden md:pt-0'>
        <div className='relative h-full w-full'>
          <div className='flex h-full items-center justify-around'>
            <div className='flex h-full w-5/12 items-center justify-center'>
              <div className='flex flex-col items-center justify-center gap-y-7 pt-0 pb-0 md:items-start'>
                <Paper
                  elevation={2}
                  className='flex flex-col gap-y-2 rounded-xl p-10'
                >
                  <h1
                    data-animation='fadeInUp'
                    data-delay='.3s'
                    className='font-prata !text-xl md:!text-4xl'
                  >
                    Tentang Kami
                  </h1>
                  <hr />
                  <p>
                    Kami merupakan perusahaan yang bergerak di bidang pengolahan
                    kayu. Kami mengolah kayu menjadi berbagai macam produk,
                    seperti meja, kursi, lemari, dan lain-lain. Kami menggunakan
                    teknik pengolahan kayu yang modern dan memperhatikan aspek
                    kelestarian kayu, sehingga produk yang kami hasilkan
                    berkualitas tinggi dan ramah lingkungan. Kami juga
                    menyediakan jasa pemotongan kayu sesuai dengan kebutuhan
                    konsumen.
                  </p>
                </Paper>
              </div>
            </div>
            <div className='w-5/12 p-0'>
              <img
                loading='lazy'
                src='/images/heroes.png'
                alt='heroes'
                className='block h-auto w-full bg-cover bg-center bg-no-repeat md:hidden'
              />
            </div>
          </div>
        </div>
        <img
          loading='lazy'
          src='/images/heroes.png'
          alt='heroes'
          className='absolute right-0 hidden h-full w-auto bg-cover bg-center bg-no-repeat md:block max-h-screen'
        />
      </div>
      <style jsx>{`
        .hero-info {
          text-align: center;
        }
        @media (min-width: 768px) {
          .hero-info {
            text-align: left;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
