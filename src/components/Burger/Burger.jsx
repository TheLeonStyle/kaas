import React, { useEffect } from 'react';
import styles from './Burger.module.scss';
import { Link } from 'react-router-dom';

import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Burger = ({ editor, activeBurger, handleBurger, setActiveBurger }) => {
  // Закрытие бургер меню если ширина экрана больше 991.98px
  useEffect(() => {
    const resizeCloseBurger = () => {
      if (window.innerWidth > 991.98) {
        setActiveBurger(false);
      }
    };

    window.addEventListener('resize', resizeCloseBurger);
    return () => {
      window.removeEventListener('resize', resizeCloseBurger);
    };
  }, [handleBurger]);

  return (
    <aside className={`${styles.burger} ${activeBurger ? styles.active : ''}`}>
      <div className={styles.burger__wrapper}>
        <header className={styles.burger__header}>
          <button onClick={handleBurger} className={styles.burger__close}></button>
        </header>
        <div className={styles.burger__categories}>
          {editor?.map((obj) => (
            <div className={styles.burger__category} key={obj.title}>
              <button className={styles.burger__button}>{obj.title}</button>
              <ul className={styles.burger__lists}>
                {obj.array.map((obj) => (
                  <li className={styles.burger__list} key={obj.title}>
                    <Link to={obj.link}>{obj.title}</Link>
                  </li>
                ))}
                {/* <li className={styles.burger__list}>
                  <Link to="">Прямые</Link>
                </li>
                <li className={styles.burger__list}>
                  <Link to="">Угловые</Link>
                </li>
                <li className={styles.burger__list}>
                  <Link to="">Индивидуальные</Link>
                </li> */}
              </ul>
            </div>
          ))}
          {/* <div className={styles.burger__category}>
            <button className={styles.burger__button}>Кухонные гарнитуры</button>
            <ul className={styles.burger__lists}>
              <li className={styles.burger__list}>
                <Link to="">Прямые</Link>
              </li>
              <li className={styles.burger__list}>
                <Link to="">Угловые</Link>
              </li>
              <li className={styles.burger__list}>
                <Link to="">Индивидуальные</Link>
              </li>
            </ul>
          </div>
          <div className={styles.burger__category}>
            <button className={styles.burger__button}>Шкаф</button>
            <ul className={styles.burger__lists}>
              <li className={styles.burger__list}>
                <Link to="">Распашные шкафы</Link>
              </li>
              <li className={styles.burger__list}>
                <Link to="">Шкафы-купе</Link>
              </li>
              <li className={styles.burger__list}>
                <Link to="">Угловые</Link>
              </li>
            </ul>
          </div>
          <div className={styles.burger__category}>
            <button className={styles.burger__button}>Кухонные гарнитуры</button>
            <ul className={styles.burger__lists}>
              <li className={styles.burger__list}>
                <Link to="">Прямые</Link>
              </li>
              <li className={styles.burger__list}>
                <Link to="">Угловые</Link>
              </li>
              <li className={styles.burger__list}>
                <Link to="">Индивидуальные</Link>
              </li>
            </ul>
          </div> */}
        </div>
        <div className={styles.burger__bottom}>
          <div className={styles.burger__social}>
            <a href="" className={styles.burger__link}>
              <FaInstagram />
            </a>
            <a href="" className={styles.burger__link}>
              <FaTiktok />
            </a>
            <a href="" className={styles.burger__link}>
              <FaYoutube />
            </a>
            <a href="" className={styles.burger__link}>
              <IoIosMail />
            </a>
          </div>

          <button className={styles.burger__call}>Заказать звонок</button>
        </div>
      </div>
    </aside>
  );
};

export default Burger;
