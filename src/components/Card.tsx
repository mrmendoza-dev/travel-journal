



export default function Card(props) {

    return (
      <div className="Card">
        <img
          className="card-img"
          src={props.location.imageUrl}
          alt="location image"
        />
        <div>
          <div className="card-header">
            <i className="fa-solid fa-location-dot"></i>
            <p className="card-location">{props.location.location}</p>
            <a
              className="card-link"
              href={props.location.googleMapsUrl}
              target="_blank"
            >
              View on Google Maps
            </a>
          </div>
          <p className="card-name">{props.location.title}</p>
          <p className="card-date">
            {props.location.startDate} - {props.location.endDate}
          </p>
            
          <p className="card-desc">{props.location.description}</p>
        </div>
      </div>
    );
}


