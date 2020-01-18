import React from 'react';
import { Link } from 'react-router-dom';
import './main.scss';

const Main = () => {
    return (
        <main>
            <div className="main__wrapper">
                <div className="main__overlay">

                </div>

            </div>



            <div className="main__offset-row">
                <div className="main__content">

                    <span>Больше берешь,<br />    меньше платишь</span><br />
                    <Link className="main__content-a" to="#" >Узнать подробности</Link>
                    <p>Не нашли нужный расходный материал?<br />
                        Мы привезем его под заказ,<br />
                        присылайте запрос нам на</p>
                    <Link className="main__content-a" to="OfficeEquipmentStore.gmail.com" >OfficeEquipmentStore.gmail.com</Link>

                </div>
                <div className="main__offset-printer">
                    <img className="main__offset-printer-img" src={require('../../assets/img/main-img/printer.png')} alt="Принтер" />
                    <div className="button__catalog">
                        <button className="button__catalog-btn"  type="submit">Перейти в каталог</button>
                    </div>
                </div>

            </div>


        </main>
    );
}

export default Main;