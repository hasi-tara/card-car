import "../css/btn.css";
const Btn = ({btn1,btn2,url}) => {
    return (
        <div className="btn_container">   
         <button className="btn"><a href={url}><p className="text">{btn1}</p></a></button>
         <button className="btn"><a href={url}><p className="text">{btn2}</p></a></button>
        </div>
    );
  };
  export default Btn;
