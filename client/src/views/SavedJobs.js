import React from "react";
import "materialize-css";
import SavedJobs from "../components/SavedJobs/index";

import backgroundDark from "../assets/dark-honeycomb.png";

const SavedJobsView = () => {
  return (
    <div style={ListingStyles}>
      <div className="row">
        <div className="center col s12">
          <SavedJobs />
        </div>
      </div>
    </div>
  );
};

export default SavedJobsView;

const ListingStyles = {
  backgroundImage: `url(${backgroundDark})`,
  height: "100vh",
  margin: "0px",
};
