import '../App.css';

function Advert({ title, description, imageUrl, price, onClick }) {
  return (
    <div className="advert">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="advert-image" />
      )}
      <div className="advert-content">
        <h2>{title}</h2>
        <p>{description}</p>
        {price && <span className="advert-price">${price}</span>}
        <button className="advert-button" onClick={onClick}>
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Advert;