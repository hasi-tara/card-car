import Btn from "./Btn";
import Caption from "./Caption";
import Image from "./Image";
import Header from "./header";
import "../css/card.css";


const Card = ({image,header,caption,btn1,btn2,url}) => {
    return (
        <div className="container">
               <div className="card">
        <Image image={image} />
        <Header header={header}/>
        <Caption caption={caption}/>
        <Btn btn1={btn1} btn2={btn2} url={url} />

        </div>
     
        </div>
    )
}
export default Card