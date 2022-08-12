const Card = ({ title, images }) => {
  return (
    <>
      <div className="col-xs-12 col-sm-6 col-md-4 my-4">
        <div className="card">
          <img src={images} />
          <div className="card-body">
            <h5 className="card-title"> {title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
