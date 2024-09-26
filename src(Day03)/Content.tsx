import { CSSProperties } from "react";

const Content = () => {

    const ContentCSS: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        gap: "10px"
    }


    return <div style={ContentCSS}></div>
}

export default Content;