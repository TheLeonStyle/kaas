import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import styles from './Intro.module.scss';
import SwiperCore from 'swiper';

SwiperCore.use([Navigation]);

const Intro = ({ editor }) => {
  return (
    <section className={styles.intro}>
      <div className={styles.intro__container}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop
          autoplay={{ delay: 8000 }}
          speed={500}
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}>
          {editor?.map((obj) => (
            <SwiperSlide key={obj.image}>
              <Link to={obj.link} className={styles.intro__item}>
                <div className={styles.intro__image}>
                  <img src={`./img/Home/Intro/${obj.image}`} alt="Изображение" />
                </div>
                <div className={styles.intro__text}>
                  <h5 className={styles.intro__title}>{obj.title}</h5>
                  <p className={styles.intro__subtitle}>{obj.subtitle}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
            <Link to="/" className={styles.intro__item}>
              <div className={styles.intro__image}>
                <img src="./img/Home/Intro/1.jpg" alt="Изображение" />
              </div>
              <div className={styles.intro__text}>
                <h5 className={styles.intro__title}>Светлая классика</h5>
                <p className={styles.intro__subtitle}>
                  Эта кухня в классическом стиле с белыми шкафами и мраморными столешницами излучает
                  свет и элегантность
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/" className={styles.intro__item}>
              <div className={styles.intro__image}>
                <img src="./img/Home/Intro/2.jpg" alt="Изображение" />
              </div>
              <div className={styles.intro__text}>
                <h5 className={styles.intro__title}>Современный минимализм</h5>
                <p className={styles.intro__subtitle}>
                  Эта кухня в современном минималистском стиле отличается чистыми линиями и простыми
                  формами
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/" className={styles.intro__item}>
              <div className={styles.intro__image}>
                <img src="./img/Home/Intro/3.jpg" alt="Изображение" />
              </div>
              <div className={styles.intro__text}>
                <h5 className={styles.intro__title}>Черная жемчужина</h5>
                <p className={styles.intro__subtitle}>
                  Эта кухня в современном стиле с черными шкафами и мраморным полом выглядит стильно
                  и элегантно
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/" className={styles.intro__item}>
              <div className={styles.intro__image}>
                <img src="./img/Home/Intro/4.jpg" alt="Изображение" />
              </div>
              <div className={styles.intro__text}>
                <h5 className={styles.intro__title}>Свежий шик</h5>
                <p className={styles.intro__subtitle}>
                  Эта кухня в стиле кантри с белыми шкафами и деревянной столешницей выглядит уютно
                  и гостеприимно
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/" className={styles.intro__item}>
              <div className={styles.intro__image}>
                <img src="./img/Home/Intro/5.jpg" alt="Изображение" />
              </div>
              <div className={styles.intro__text}>
                <h5 className={styles.intro__title}>Уютный уголок</h5>
                <p className={styles.intro__subtitle}>
                  Эта кухня в современном стиле с красными шкафами и столешницами выглядит ярко и
                  эффектно
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/" className={styles.intro__item}>
              <div className={styles.intro__image}>
                <img src="./img/Home/Intro/6.jpg" alt="Изображение" />
              </div>
              <div className={styles.intro__text}>
                <h5 className={styles.intro__title}>Красная страсть</h5>
                <p className={styles.intro__subtitle}>
                  Эта кухня в классическом стиле с белыми шкафами и мраморными столешницами излучает
                  свет и элегантность
                </p>
              </div>
            </Link>
          </SwiperSlide> */}
        </Swiper>
        <button className={`${styles.intro__button} ${styles.intro__prev} swiper-button-prev`}>
          Назад
        </button>
        <button className={`${styles.intro__button} ${styles.intro__next} swiper-button-next`}>
          Вперёд
        </button>
      </div>
    </section>
  );
};

export default Intro;
