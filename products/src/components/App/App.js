import React, { Component } from 'react';
import './App.css';
import '../Products';
import Products from "../Products/Products";


class App extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    src:
                        "https://i.citrus.ua/imgcache/size_1000/uploads/shop/7/b/7be99a69e35e63bb68a303be9fa4d584.jpg",
                    name: "Xiaomi Pocophone F1 6/64Gb (Graphite Black)",
                    price: "10 099",
                    char:
                        "Основной объектив 12 Мп (Sony IMX363), большие пиксели 1.4 мкм, f/1.9, автофокус Dual Pixel; Второй объектив 5 Мп (Samsung 5E8), размер пикселя 1.12 мкм, f/2.0; Портретный режим с функцией размытия фона; Автофокус Dual Pixel; Однотонная вспышка; Улучшенная съемка при слабом освещении; HDR; Серийная съемка; Распознавание лиц; Beautify; Фронтальная камера: Портретный режим; Таймер селфи; Распознавание лиц",
                    id: 1001
                },
                {
                    src:
                        "https://i.citrus.ua/imgcache/size_1000/uploads/shop/3/f/3fc1a179f79a48d5fb988b506ec80396.jpg",
                    name: "Смарт-часы Amazfit Stratos (Black) A1619",
                    price: "4 699",
                    char:
                        "Прочный водонепроницаемый корпус (5 атмосфер); Поддерживает 12 различных спортивных режимов; Уведомления о звонках, смс и электронных письмах; Точное позиционирование при помощи GPS и GLONASS; Беспроводная связь Bluetooth 4.0 и Wi-Fi; 4 Гб встроенной памяти для вашей музыки",
                    id: 1002
                },
                {
                    src:
                        "https://i.citrus.ua/imgcache/size_1000/uploads/shop/c/8/c89420f522a6121dca7a25cb539a52f4.jpg",
                    name: "Ноутбук Xiaomi Mi Notebook Pro 15.6 i5",
                    price: "29 999",
                    char:
                        "Сканер отпечатков пальца; Камера 1 Мп с HD-разрешением; Звук: Realtek ALC298, динамики Harman Infinity, мощность 2.5 Вт × 2, система воспроизведения Dolby Atmos; Быстрая зарядка (50% за 35 минут)",
                    id: 1003
                }
            ],
            modal: false,
            description: null
        };
    }

    // setInfo = (element) => {
    //   this.setState({
    //     // modal: true,
    //     }
    //     );
    // };

    render() {
        let element = this.state.products;
        console.log(this.state.products);
        return (
            <div className="productList">
                {this.state.products.map((elem, i) => {
                    return (
                        <Products key={i} element={elem} info={this.setInfo} />
                    );
                })}
            </div>
        );
    }
}

export default App;
