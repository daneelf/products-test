import NavBarMenu from "../../../../componets/NavBarMenu/NavBarMenu";
import SortingDropdown from "../components/SortingDropdown/SortingDropdown";
import PriceRange from "../components/PriceRange/PriceRange";
import { Link } from "react-router-dom";

import React from "react";

const ActionsNavBar = () => {
  return (
    <NavBarMenu>
      <Link className="mr-5" to="/categories">
        Πίσω
      </Link>
      <PriceRange />
      <SortingDropdown />
    </NavBarMenu>
  );
};

export default ActionsNavBar;
