type CoffeeProps = {
    coffeeName: string;
    coffeeamount: number;
    click: () => void
}


const Coffee = (props: CoffeeProps) => {



    return <span onClick={props.click}>{props.coffeeName}: {props.coffeeamount}</span>
}

export default Coffee;