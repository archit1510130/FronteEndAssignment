import React from "react";
import "./ServiceGuide.scss";

const ServiceGuide = () => {
  return (
    <>
      <h2> GoMechanic Service Guide</h2>

      <div className="heading">

        <h5 className="content">Services Offered</h5>
        <div className="inner-content">
          With GoMechanic, you can choose from a wide assortment of car services
          in Ghaziabad . Apart from periodic car servicing,we also offer
        </div>

        <div class="list-content">
          <ul>
            <li>
              <p>Scheduled car services</p>
            </li>
            <li>
              <p >
                Exterior and interior car care services
              </p>
            </li>
            <li>
              <p>
                Denting and painting services
              </p>
            </li>
          </ul>
          <ul class="list-content-2">
            <li>
              <p >
                Wheel, rim and alloy care
              </p>
            </li>
            <li>
              <p >
                Customer specific custom job
              </p>
            </li>
            <li>
              <p >
                Cashless insurance repairs
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServiceGuide;
