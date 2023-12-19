import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Catalog.module.scss';

const Catalog = ({ editor }) => {
  const [imageSrc, setImageSrc] = useState({
    item1: '',
    item2: '',
    item3: '',
    item4: '',
  });

  const handleImageChange = (item, newSrc) => {
    setImageSrc({ ...imageSrc, [item]: newSrc });
  };

  return (
    <section className={styles.catalog}>
      <div className="catalog__container">
        <h2 className={styles.catalog__text}>Каталог</h2>
        <div className={styles.catalog__items}>
          {editor?.array.map((item) => (
            <div className={styles.catalog__item} key={item.id}>
              <div className={styles.catalog__image}>
                <img
                  src={
                    imageSrc[`item${item.id}`] || `./img/Home/Catalog/Item${item.id}/${item.image}`
                  }
                  alt="Изображение из каталога"
                />
              </div>
              <div className={styles.catalog__content}>
                <Link to={item.link} className={styles.catalog__title}>
                  {item.title}
                </Link>
                <ul className={styles.catalog__lists}>
                  {item.array.map((subItem) => (
                    <li className={styles.catalog__list} key={subItem.title}>
                      <Link
                        to={subItem.link}
                        onMouseEnter={() =>
                          handleImageChange(
                            `item${item.id}`,
                            `./img/Home/Catalog/Item${item.id}/${subItem.image}`,
                          )
                        }>
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {/* <div className={styles.catalog__item}>
            <div className={styles.catalog__image}>
              {imageSrc.item1 ? (
                <img src={imageSrc.item1} alt="Изображение из каталога" />
              ) : (
                <img src={'./img/Home/Catalog/Item1/1.jpg'} alt="Изображение из каталога" />
              )}
            </div>
            <div className={styles.catalog__content}>
              <Link to="/" className={styles.catalog__title}>
                Кухонные гарнитуры
              </Link>
              <ul className={styles.catalog__lists}>
                <li className={styles.catalog__list}>
                  <Link
                    to="/"
                    onMouseEnter={() =>
                      handleImageChange('item1', './img/Home/Catalog/Item1/1.jpg')
                    }>
                    Прямые
                  </Link>
                </li>
                <li className={styles.catalog__list}>
                  <Link
                    to="/"
                    onMouseEnter={() =>
                      handleImageChange('item1', './img/Home/Catalog/Item1/2.jpg')
                    }>
                    Угловые
                  </Link>
                </li>
                <li className={styles.catalog__list}>
                  <Link
                    to="/"
                    onMouseEnter={() =>
                      handleImageChange('item1', './img/Home/Catalog/Item1/3.webp')
                    }>
                    Индивидуальные
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.catalog__item}>
            <div className={styles.catalog__image}>
              {imageSrc.item2 ? (
                <img src={imageSrc.item2} alt="Изображение из каталога" />
              ) : (
                <img src={'./img/Home/Catalog/Item2/1.jpg'} alt="Изображение из каталога" />
              )}
            </div>
            <div className={styles.catalog__content}>
              <Link to="/" className={styles.catalog__title}>
                Шкафы
              </Link>
              <ul className={styles.catalog__lists}>
                <li className={styles.catalog__list}>
                  <Link
                    onMouseEnter={() =>
                      handleImageChange('item2', './img/Home/Catalog/Item2/1.jpg')
                    }
                    to="/">
                    Распашные
                  </Link>
                </li>
                <li className={styles.catalog__list}>
                  <Link
                    onMouseEnter={() =>
                      handleImageChange('item2', './img/Home/Catalog/Item2/2.jpg')
                    }
                    to="/">
                    Шкафы-купе
                  </Link>
                </li>
                <li className={styles.catalog__list}>
                  <Link
                    onMouseEnter={() =>
                      handleImageChange('item2', './img/Home/Catalog/Item2/3.jpg')
                    }
                    to="/">
                    Угловые
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.catalog__item}>
            <div className={styles.catalog__image}>
              {imageSrc.item3 ? (
                <img src={imageSrc.item3} alt="Изображение из каталога" />
              ) : (
                <img src={'./img/Home/Catalog/Item3/1.webp'} alt="Изображение из каталога" />
              )}
            </div>
            <div className={styles.catalog__content}>
              <Link to="/" className={styles.catalog__title}>
                Прихожая
              </Link>
              <ul className={styles.catalog__lists}>
                <li className={styles.catalog__list}>
                  <Link
                    onMouseEnter={() =>
                      handleImageChange('item3', './img/Home/Catalog/Item3/1.webp')
                    }
                    to="/">
                    Тумба
                  </Link>
                </li>
                <li className={styles.catalog__list}>
                  <Link
                    onMouseEnter={() =>
                      handleImageChange('item3', './img/Home/Catalog/Item3/2.jpg')
                    }
                    to="/">
                    Комоды
                  </Link>
                </li>
                <li className={styles.catalog__list}>
                  <Link
                    onMouseEnter={() =>
                      handleImageChange('item3', './img/Home/Catalog/Item3/3.jpg')
                    }
                    to="/">
                    Зеркала
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
