import { useState } from "react";
import Coffee from "./Coffee";

const Cafe = () => {
    const [coffee, setCoffee] = useState({americano: {amount: 0, price: 1500}, latte: {amount: 0, price: 2000}, mocha: {amount: 0, price: 2000}});

    const changeAmericano = ()=> {
        setCoffee((prev) => {
            return {...prev, americano: {amount: prev.americano.amount + 1, price: 1500}}}
        )
    }

    const changeLatte = ()=> {
        setCoffee((prev) => {
            return {...prev, latte: {amount: prev.latte.amount + 1, price: 2000}}}
        )
    }

    const changeMocha = ()=> {
        setCoffee((prev) => {
            return {...prev, mocha: {amount: prev.mocha.amount + 1, price: 2000}}}
        )
    }


    return (
        <div>
            <Coffee click={changeAmericano} coffeeName={"아메리카노"} coffeeamount={coffee.americano.amount} />
            <Coffee click={ changeLatte} coffeeName={"라떼"} coffeeamount={coffee.latte.amount} />
            <Coffee click={changeMocha} coffeeName={"모카"} coffeeamount={coffee.mocha.amount} />
            <span>총 갯수: {coffee.americano.amount + coffee.latte.amount + coffee.mocha.amount}</span>
            <span>총 가격: {coffee.americano.price * coffee.americano.amount + coffee.latte.price * coffee.latte.amount + coffee.mocha.price * coffee.mocha.amount}</span>
        </div>
    )
}

export default Cafe;