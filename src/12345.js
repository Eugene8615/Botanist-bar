// MainDishesPage.js
import React from 'react';
import './BarAreaPage.css';
import JunglJuice from './images/Джангл Джус.png';
import CloverClub from './images/Кловер клаб.png';
import Penicillin from './images/Penicillin.png'
import MaiTai from './images/май тай.png';
import NoName from './images/No Name.png';
import Godfather from './images/godfather.png';
import PornstarMartini from './images/порнстармартіні.png';
import Zombi from './images/zombi.png'
import WatermelonSour from './images/watermelon.jpg'
import Bramble from './images/Brumble.png';
import AperolSpritz from './images/апероль.png'
import MartiniAsti from './images/mfrtini-asti.png'

const BarAreaPage = () => {
  // Вместо этого вы можете использовать логику загрузки товаров для "Основних страв" из вашего источника данных

  return (
    <div className='section'>
      <h2 className='section-name'>Бар</h2>
      <div>
        <button className='bar-btn'>COCKTAILS</button>
        <button className='bar-btn'>Ігристі вина</button>
        <button className='bar-btn'>Горілка</button>
        <button className='bar-btn'>Віскі</button>
        <button className='bar-btn'>Ром</button>
        <button className='bar-btn'>Коньяк</button>
        <button className='bar-btn'>Текіла</button>
        <button className='bar-btn'>Джин</button>
        <button className='bar-btn'>Вермут</button>
        <button className='bar-btn'>Аперетиви</button>
        <button className='bar-btn'>Пиво</button>
        <button className='bar-btn'>Безалкогольні напої</button>
        <button className='bar-btn'>COFFEE</button>
      </div>
      <h2>COCKTAILS</h2>
      <ul>
        <li className='bar-items'><img src={JunglJuice} alt='JUNGL JUICE' className='bar-img'/>
        <ul>
          <li><p>JUNGL JUICE</p></li>
          <li><p className='cocktails-item'>-Джин Finsbury</p></li>
          <li><p className='cocktails-item'>-Джин Pisang</p></li>
          <li><p className='cocktails-item'>-Сік апельсиновий</p></li>
          <li><p className='cocktails-item'>-Сік ананасовий</p></li>
          <li><p>150мл</p></li>
          </ul>
          <p  className='price'>149₴</p>
        </li>
        <li className='bar-items'><img src={CloverClub} alt='CLOVWR CLUB' className='bar-img'/>
        <ul>
          <li><p>CLOVER CLUB</p></li>
          <li><p className='cocktails-item'>-Альбумін</p></li>
          <li><p className='cocktails-item'>-Джин FINSBURY</p></li>
          <li><p className='cocktails-item'>-Фреш лимона</p></li>
          <li><p className='cocktails-item'>-Малиновий сироп</p></li>
          <li><p>150мл</p></li>
          </ul>
          <p  className='price'>140₴</p>
        </li>
        <li className='bar-items'><img src={Penicillin} alt='PENICILLIN' className='bar-img'/>
        <ul>
          <li><p>PENICILLIN</p></li>
          <li><p className='cocktails-item'>-Віскі Red Label</p></li>
          <li><p className='cocktails-item'>-Медовий сироп</p></li>
          <li><p className='cocktails-item'>-Альбумін</p></li>
          <li><p className='cocktails-item'>-Імбирний кардіал</p></li>
          <li><p className='cocktails-item'>-Лимонний фреш</p></li>
          <li><p>150мл</p></li>
          </ul>
          <p  className='price'>119₴</p>
        </li>
        <li className='bar-items'><img src={MaiTai} alt='MAI TAI' className='bar-img'/>
        <ul>
          <li><p>MAI TAI</p></li>
          <li><p className='cocktails-item'>-Ром Carta blanka</p></li>
          <li><p className='cocktails-item'>-Сікер Cuatro</p></li>
          <li><p className='cocktails-item'>-Сік ананасовий</p></li>
          <li><p className='cocktails-item'>-Сік лимонний</p></li>
          <li><p className='cocktails-item'>-Ром Oakhert</p></li>
          <li><p>150мл</p></li>
          </ul>
          <p  className='price'>180₴</p>
        </li>
        <li className='bar-items'><img src={NoName} alt='NO NAME' className='bar-img'/>
        <ul>
          <li><p>NO NAME</p></li>
          <li><p className='cocktails-item'>-Ром Oakhert</p></li>
          <li><p className='cocktails-item'>-Ром Carta blanka</p></li>
          <li><p className='cocktails-item'>-Кокосовий лікер</p></li>
          <li><p className='cocktails-item'>-Апельсиновий сік</p></li>
          <li><p className='cocktails-item'>-Банановий лікер</p></li>
          <li><p className='cocktails-item'>-Вершки</p></li>
          <li><p>150мл</p></li>
          </ul>
          <p  className='price'>160₴</p>
        </li>
        <li className='bar-items'><img src={Godfather} alt='GODFATHER' className='bar-img'/>
        <ul>
          <li><p>GODFHATHER</p></li>
          <li><p className='cocktails-item'>-Віскі Jack Daniels</p></li>
          <li><p className='cocktails-item'>-Мигдальний лікер</p></li>
          <li><p>150мл</p></li>
          </ul>
          <p  className='price'>149₴</p>
        </li>
        <li className='bar-items'><img src={PornstarMartini} alt='PORNSTAR MARTINI' className='bar-img'/>
        <ul>
          <li><p>PORNSTAR MARTINI</p></li>
          <li><p className='cocktails-item'>-Absolute Vanilla</p></li>
          <li><p className='cocktails-item'>-Ігристе</p></li>
          <li><p className='cocktails-item'>-Маракуя</p></li>
          <li><p>150мл</p></li>
          </ul>
          <p  className='price'>200₴</p>
        </li>
        <li className='bar-items'><img src={Zombi} alt='ZOMBI' className='bar-img'/>
        <ul>
          <li><p>ZOMBI</p></li>
          <li><p className='cocktails-item'>-Ром Oakhert</p></li>
          <li><p className='cocktails-item'>-Ром Carta Negra</p></li>
          <li><p className='cocktails-item'>-Ром Carta Blanka</p></li>
          <li><p className='cocktails-item'>-Лікер Tripl sek</p></li>
          <li><p className='cocktails-item'>-Маракуя</p></li>
          <li><p>150мл</p></li>
          </ul>
          <p  className='price'>200₴</p>
        </li>
        <li className='bar-items'><img src={WatermelonSour} alt='WATERMELON SOUR' className='bar-img'/>
        <ul>
          <li><p>WATERMELON SOUR</p></li>
          <li><p className='cocktails-item'>-Ром Carta Blanka</p></li>
          <li><p className='cocktails-item'>-Кавуновий лікер</p></li>
          <li><p className='cocktails-item'>-Лікер Мараскино</p></li>
          <li><p className='cocktails-item'>-Ананасовий сік</p></li>
          <li><p>150мл</p></li>
          </ul>
          <p  className='price'>140₴</p>
        </li>
        <li className='bar-items'><img src={Bramble} alt='BRAMBLE' className='bar-img'/>
        <ul>
          <li><p>BRAMBLE</p></li>
          <li><p className='cocktails-item'>-Лимон фреш</p></li>
          <li><p className='cocktails-item'>-Лікер ожиновий</p></li>
          <li><p className='cocktails-item'>-Джин Finsbury</p></li>
          <li><p className='cocktails-item'>-Сироп ожиновий</p></li>
          <li><p className='cocktails-item'>-Вершки</p></li>
          <li><p>150мл</p></li>
          </ul>
          <p  className='price'>140₴</p>
        </li>
        <li className='bar-items'><img src={AperolSpritz} alt='APEROL SPRITZ' className='bar-img'/>
        <ul>
          <li><p>APEROL SPRITZ</p></li>
          <li><p className='cocktails-item'>-Aperol</p></li>
          <li><p className='cocktails-item'>-Ігристе</p></li>
          <li><p className='cocktails-item'>-Sprite</p></li>
          <li><p>150мл</p></li>
          </ul>
          <p  className='price'>160₴</p>
        </li>
      </ul>
      <h2>Ігристі вина</h2>
      <ul>
        <li className='bar-items'><img src={MartiniAsti} alt='APEROL SPRITZ' className='bar-img'/><p>MARTINI ASTI</p>
        <p  className='price'>800₴</p>
        </li>
        <li className='bar-items'><img src={MartiniAsti} alt='APEROL SPRITZ' className='bar-img'/><p>MARTINI ROYAL BIANCO</p>
        <p  className='price'>700₴</p>
        </li>
        <li className='bar-items'><img src={MartiniAsti} alt='APEROL SPRITZ' className='bar-img'/><p>FRAGOLINO BIANCO</p>
        <p  className='price'>350₴</p>
        </li>
        <li className='bar-items'><img src={MartiniAsti} alt='APEROL SPRITZ' className='bar-img'/><p>LATINIUM</p>
        <p  className='price'>400₴</p>
        </li>
      </ul>
      <h2>Горілка</h2>
      <ul>
      <li className='bar-items'><p>GREEN DAY</p>
      <p  className='price'>220₴</p>
      </li>
      <li className='bar-items'><p>NEMIROFF</p>
      <p  className='price'>250₴</p>
      </li>
      <li className='bar-items'><p>FINLANDIA</p>
      <p  className='price'>600₴</p>
      </li>
      <li className='bar-items'><p>ABSOLUTE</p>
      <p  className='price'>650₴</p>
      </li>
      </ul>
      <h2>Віскі</h2>
      <ul>
      <li className='bar-items'><p>JACK DANIELS</p></li>
      <li className='bar-items'><p>JAMESON</p></li>
      <li className='bar-items'><p>RED LABLE</p></li>
      <li className='bar-items'><p>JIM BEAM</p></li>
      </ul>
      <h2>Ром</h2>
      <ul>
      <li className='bar-items'><p>BACARDI OAKHEART</p></li>
      <li className='bar-items'><p>CARTA NEGRA</p></li>
      <li className='bar-items'><p>CARTA BLANKA 75</p></li>
      <li className='bar-items'><p>CARTAIN MORGAN</p></li>
      <li className='bar-items'><p>CAPTAIN MORGAN BLACK</p></li>
      <li className='bar-items'><p>SPICED</p></li>
      </ul>
      <h2>Коньяк</h2>
      <ul>
      <li className='bar-items'><p>OLD KAKHETI</p></li>
      <li className='bar-items'><p>ADJARI</p></li>
      <li className='bar-items'><p>SHUSTOFF CHOCOLATIER</p></li>
      </ul>
      <h2>Текіла</h2>
      <ul>
      <li className='bar-items'><p>SIERRA SILVER</p></li>
      <li className='bar-items'><p>OLMEGA</p></li>
      </ul>
      <h2>Джин</h2>
      <ul>
      <li className='bar-items'><p>BEEFEATER</p></li>
      <li className='bar-items'><p>FINSBURY PLATINUM</p></li>
      </ul>
      <h2>Вермут</h2>
      <ul>
      <li className='bar-items'><p>MARTINI ROSSO</p></li>
      <li className='bar-items'><p>MARTINI BIANCO</p></li>
      <li className='bar-items'><p>MARTINI DRY</p></li>
      </ul>
      <h2>Аперетиви</h2>
      <ul>
      <li className='bar-items'><p>BECHEROVKA</p></li>
      <li className='bar-items'><p>JAGERMEISTER</p></li>
      </ul>
      <h2>Пиво</h2>
      <ul>
      <li><p>CORONA EXTRA</p></li>
      <li><p>GARAGE</p></li>
      <li><p>HOEGAARDEN</p></li>
      <li><p>HIKE</p></li>
      <li><p>STELLA ARTOIS</p></li>
      </ul>
      <h2>Безалкогольні напої</h2>
      <ul>
      <li><p>COCA-COLA 0.5</p></li>
      <li><p>COCA-COLA 0.33</p></li>
      <li><p>COCA-COLA 0.33 ж/б</p></li>
      <li><p>FANTA 0.33 ж/б</p></li>
      <li><p>BORJOMI</p></li>
      <li><p>RED BULL</p></li>
      <li><p>BON AQUA</p></li>
      <li><p>NON STOP</p></li>
      <li><p>Сік в асортименті</p></li>
      </ul>
      <h2>COFFEE</h2>
      <ul>
      <li><p>ESPRESSO</p></li>
      <li><p>AMERICANO</p></li>
      <li><p>RAFF</p></li>
      <li><p>LATTE</p></li>
      <li><p>CAPPUCHINO</p></li>
      <li><p>TEA</p></li>
      </ul>
    </div>
  );
}

export default BarAreaPage;
