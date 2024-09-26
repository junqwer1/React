import { CSSProperties } from "react"

const Container = () => {
    
    const centering: CSSProperties = {
        margin: "0 auto",
        width: "800px",
        maxWidth: "1000px",
        boxShadow: "box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        padding: "5px"
    }


    return (
        <section style={centering}>
            <div></div>
        </section>
    );
}

export default Container;