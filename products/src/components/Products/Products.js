import React, { Component } from 'react';
import './Products.css';

class Products extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="productCard">
                <div className="imgCont">
                    <img
                        className="image"
                        src={this.props.element.src}
                        alt={this.props.element.name}
                    />
                </div>
                <div className="id">
                    Код: <span>{this.props.element.id}</span>
                </div>
                <div className="title">
                    <span>{this.props.element.name}</span>
                </div>
                <div className="price">
                    <span>{this.props.element.price}</span> грн
                </div>
                <button>Купить</button>
                <br />
                <span
                    className="char"
                    onClick={() => {
                        this.props.info(true, this.props.element);
                    }}
                >
          Посмотреть характеристики
        </span>
            </div>
        );
    }
}

export default Products;