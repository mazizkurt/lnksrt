import React, { useState } from "react";
import Premium from "../_modals/premium";

type Props = {};

function Header({}: Props) {
  const [premiumModal, setPremiumModal] = useState(false);

  return (
    <>
      <div className="position-absolute top-0 end-0 my-5 mx-5">
        <span
          className="btn btn-outline-gray text-white px-4"
          onClick={() => setPremiumModal(!premiumModal)}
        >
          Premium Al
        </span>
      </div>
      <Premium
        show={premiumModal}
        handleClose={() => setPremiumModal(!premiumModal)}
      />
    </>
  );
}

export default Header;
