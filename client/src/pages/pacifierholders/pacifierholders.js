import React from "react";
import { Jumbotron } from 'reactstrap';

const Banner = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-1">Pacifier Holders!</h1>
        <p className="lead">Personalized Pacifier Holders</p>
        <img src="images/heart.jpg"alt="img" width="400px" />
        <hr className="my-1" />

        <h1 className="display-2">Pacifier Holders!</h1>
        <p className="lead">Personalized Pacifier Holders</p>
        <img src="images/bluegrey.jpg"alt="img" width="400px" />
        <hr className="my-2" />

        <h1 className="display-3">Pacifier Holders!</h1>
        <p className="lead">Personalized Pacifier Holders</p>
        <img src="images/tealone.jpg"alt="img" width="400px" />
        <hr className="my-3" />
      </Jumbotron>
    </div>
  );
};

export default Banner;