import imageA from "../src/assets/human.png"
import './Card.css'
const Card = ({ id, title, status, priority, tag, svg }) => {
    return (
      <>
        <div className="card-container">
          <div className='card-subcontainer' >
            <span > {id} </span> 
            <img src={imageA}/>
          </div>
  
          <div className="card-title">
            <img
                     src={svg}/>
            {title}
          </div>
  
          <div style={{ display: "flex" }}>
            <div className="card-img">
             <img src={priority} />
            </div>
  
            <div className="card-tag"> 
              <span>{tag}</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Card;