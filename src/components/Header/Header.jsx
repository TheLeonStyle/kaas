import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaYoutube, FaSearch } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import styles from './Header.module.scss';
import Logo from '../../assets/img/logo.svg';

const Header = ({ editor, activeBurger, handleBurger }) => {
  // console.log(editor);
  return (
    <header className={styles.header}>
      <div className="header__container">
        <div className={styles.header__top}>
          <Link to="/" className={styles.header__logo}>
            <img src={Logo} alt="Логотип" />
          </Link>
          <input type="text" placeholder="Поиск" className={styles.header__search} />
          <div className={styles.header__social}>
            <a href="" className={styles.header__link}>
              <FaInstagram />
            </a>
            <a href="" className={styles.header__link}>
              <FaTiktok />
            </a>
            <a href="" className={styles.header__link}>
              <FaYoutube />
            </a>
            <a href="" className={styles.header__link}>
              <IoIosMail />
            </a>
          </div>
          <button className={styles.header__call}>Заказать звонок</button>
          <div className={styles.header__search_icon}>
            <FaSearch />
          </div>
          <button
            onClick={handleBurger}
            className={`${styles.header__burger} ${activeBurger ? styles.active : ''}`}>
            <span></span>
          </button>
        </div>
        <nav className={styles.header__categories}>
          {editor?.map((obj) => (
            <div className={styles.header__category} key={obj.title}>
              <button className={styles.header__button}>{obj.title}</button>
              <ul className={styles.header__lists}>
                {obj.array.map((obj) => (
                  <li className={styles.header__list} key={obj.title}>
                    <Link to={obj.link}>{obj.title}</Link>
                  </li>
                ))}
                {/* <li className={styles.header__list}>
                  <Link to="">Прямые</Link>
                </li>
                <li className={styles.header__list}>
                  <Link to="">Угловые</Link>
                </li>
                <li className={styles.header__list}>
                  <Link to="">Индивидуальные</Link>
                </li> */}
              </ul>
            </div>
          ))}
          {/* 
          <div className={styles.header__category}>
            <button className={styles.header__button}>Кухонные гарнитуры</button>
            <ul className={styles.header__lists}>
              <li className={styles.header__list}>
                <Link to="">Прямые</Link>
              </li>
              <li className={styles.header__list}>
                <Link to="">Угловые</Link>
              </li>
              <li className={styles.header__list}>
                <Link to="">Индивидуальные</Link>
              </li>
            </ul>
          </div>
          <div className={styles.header__category}>
            <button className={styles.header__button}>Шкаф</button>
            <ul className={styles.header__lists}>
              <li className={styles.header__list}>
                <Link to="">Распашные шкафы</Link>
              </li>
              <li className={styles.header__list}>
                <Link to="">Шкафы-купе</Link>
              </li>
              <li className={styles.header__list}>
                <Link to="">Угловые</Link>
              </li>
            </ul>
          </div>
          <div className={styles.header__category}>
            <button className={styles.header__button}>Прихожая</button>
            <ul className={styles.header__lists}>
              <li className={styles.header__list}>
                <Link to="">Прямые</Link>
              </li>
              <li className={styles.header__list}>
                <Link to="">Угловые</Link>
              </li>
              <li className={styles.header__list}>
                <Link to="">Индивидуальные</Link>
              </li>
            </ul>
          </div> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
