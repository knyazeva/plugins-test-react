import React from 'react';
import s from './searchProducts.module.sass';

const products = [
    {id: 1, name: "Миндальное печенье", price: "90р", inStock: true},
    {id: 2, name: "Яблочный пирог", price: "180р", inStock: true},
    {id: 3, name: "Бублик", price: "40р", inStock: false},
    {id: 4, name: "Торт-безе", price: "80р", inStock: true},
    {id: 5, name: "Запеченное яблоко", price: "50р", inStock: true},
    {id: 6, name: "Пахлава", price: "40р", inStock: false},
    {id: 7, name: "Мороженное с бананом", price: "100р", inStock: true}
];


class SearchField extends React.Component {

    onChangeValue = (e) => {
        this.props.onChangeValueSearch(e.target.value)
    };

    onChangeShowStock = () => {
        this.props.onChangeShowStock();
    };

    render() {
        return (
            <div>
                <h1>Найдите интересующий Вас продукт:</h1>
                <input type="text" placeholder="Поиск" defaultValue={this.props.value} onChange={this.onChangeValue} />
                <label>
                    <input type="checkbox" defaultChecked={this.props.showOnlyStock && "checked"} onChange={this.onChangeShowStock}/>
                    Показать только те товары, что есть в наличии
                </label>
            </div>
        )
    }

}

class List extends React.Component {
    render() {
        return (
            <tr>
                <td><a href="/">{this.props.item.name}</a></td>
                <td><div className={s.price}>{this.props.item.price}</div></td>
                <td>
                    <div className={s.stock}>
                        {this.props.item.inStock
                            ? <span className={s.yesStock}>Есть в наличии</span>
                            : <span className={s.noStock}>Нет в наличии</span>
                        }
                    </div>
                </td>
            </tr>
        )
    }
}

class ProductList extends React.Component {

    render() {
        return (
            <table>
                <tbody>
                {
                    this.props.showOnlyStock

                        ? this.props.products
                        .filter(item => item.name.toLowerCase().indexOf(this.props.valueSearch) >= 0)
                        .filter(item => item.inStock)
                        .map(item => <List key={item.id} item={item}/>)

                        : this.props.products
                        .filter(item => item.name.toLowerCase().indexOf(this.props.valueSearch) >= 0)
                        .map(item => <List key={item.id} item={item}/>)

                }
                </tbody>
            </table>
        )
    }
}

class ProductSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchValue: "", showOnlyStock: false}
    }

    onChangeValueSearch = (value) => {
        this.setState({searchValue: value})
    };

    onChangeShowStock = () => {
        this.setState((state, props) => ({showOnlyStock: !state.showOnlyStock}))
    };

    render() {
        return (
            <div>
                <SearchField value={this.state.searchValue} onChangeValueSearch={this.onChangeValueSearch}
                             onChangeShowStock={this.onChangeShowStock} showOnlyStock={this.state.showOnlyStock}/>
                <ProductList products={products} valueSearch={this.state.searchValue}
                             showOnlyStock={this.state.showOnlyStock}/>
            </div>
        )
    }

}


export default ProductSearch;