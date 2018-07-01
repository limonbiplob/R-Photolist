import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class PhotoDetails extends React.Component {
  state = {
    photoDetails: {}
  };

  componentDidMount() {
    const { match } = this.props;
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos/${match.params.photo_id}`
      )
      .then(response => {
        this.setState({
          photoDetails: response.data
        });
      });
  }
  render() {
    const { photoDetails } = this.state;
    return (
      <section className="container">
      <div className="row">
        <div>
          <NavLink to="/" className="btn  col s2 m2"> Back </NavLink>
        </div>
        <div key={photoDetails.id} className="col s6 m6">
          <div className="card">
            <div className="card-image">
              <img src={photoDetails.thumbnailUrl} />
              <span className="card-title">{photoDetails.title}</span>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
}

export default PhotoDetails;