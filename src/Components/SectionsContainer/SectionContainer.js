import React from "react";
import "./SectionContainer.css";

const SectionContainer = (props) => {
  const { details,darkTheme  } = props;

  return (
    <div key={details.id}  className={`card-container ${darkTheme ? "dark-theme" : ""}`}>
      <p> ID : {details.id}</p>
      <p> Title : {details.card_title}</p>
      <p>Inherit : {details.parent_sec}</p>
      <p> Datatype:{details.data_type}</p>
      {details.data_type === "number" ||
      details.data_type === "text" ||
      details.data_type === "tags" ||
      details.data_type === null ? (
        <p>Value : {details.data_value}</p>
      ) : (
        " "
      )}
      {details.data_type === "progress" ? (
        <p>
          Progress:
          <progress max="100" value={details.data_value}>
            {" "}
            {details.data_value}
          </progress>{" "}
        </p>
      ) : (
        " "
      )}
      {details.data_type === "image" ? (
        <img src={details.data_value} alt="img" className="img11" />
      ) : (
        " "
      )}

      {/* <p className="para-value">Value : {details.data_value}</p> */}
      {details.button ? (
        <button className="section-btn">{details.button_name}</button>
      ) : (
        " "
      )}
    </div>
  );
};

export default SectionContainer;
