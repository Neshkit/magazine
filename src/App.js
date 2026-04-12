import React from "react";  
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from './components/Items.js'; 
import Categoties from "./components/Categoties.js";
import ShowFullItem from "./components/ShowFullitem.js";





class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
            {
              id: 1,
              title: 'серый стул',
              img: 'seryi-styl.jpeg',
              desc: 'Эргономичный серый стул — идеальное решение для гостиной или кабинета.',
              category: 'chairs',
              price: '9500'
            },
            {
              id: 2,
              title: 'стол',
              img: 'table.jpg',
              desc: 'Прочный и стильный стол в готическом стиле — идеальное решение для вашего дома.',
              category: 'tables',
              price: '40000'
            },
            {
              id: 3,
              title: 'кресло',
              img: 'chair.jpg',
              desc: 'Эргономичное кресло — идеальное решение для вашего дома.',
              category: 'chairs',
              price: '25000'
            },
            {
              id: 4,
              title: 'диван',
              img: 'divan.jpg',
              desc: 'Уютный диван — идеальное решение для вашей гостиной.',
              category: 'sofa',
              price: '55000'
            },
            {
              id: 5,
              title: 'лампа',
              img: 'lampa.jpg',
              desc: 'Эргономичная лампа — идеальное решение для вашего дома.',
              category: 'light',
              price: '7500'
            },
        ],

        showFullItem: false ,
        fullItem: {},


    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  };
    render() {
      return (
        <div  className="wrapper"> 
          <Header orders= {this.state.orders} onDelete={this.deleteOrder}/>
          <Categoties chooseCategory={this.chooseCategory}/> 
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

          {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}

          <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el=> {
      if (el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
        this.setState({ orders: [...this.state.orders, item]})
  }
}
export default App; 
