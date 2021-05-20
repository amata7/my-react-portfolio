import React from "react";
import "./style.css";

function Footer() {
  return (
    <div>
      <div className="container-fluid">
        <div className="bg-danger row align-items-center border border-danger rounded rounded-2 foot">
          <div className="text-light col">
            <h2>
              <strong>Contact Information:</strong>
            </h2>
          </div>
          <div className="text-light col">
            <h6>
              Email -{" "}
              <a className="text-warning" href="mailto:mata-adrian@outlook.com">
                mata-adrian@outlook.com
              </a>
            </h6>
            <h6>
              GitHub -{" "}
              <a className="text-warning" href="https://github.com/amata7">
                amata7
              </a>
            </h6>
            <h6>
              LinkedIn -{" "}
              <a
                className="text-warning"
                href="https://www.linkedin.com/in/amata7/"
              >
                Adrian Mata
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
