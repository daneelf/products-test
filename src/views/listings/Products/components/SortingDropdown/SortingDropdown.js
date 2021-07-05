import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useLocation } from "react-router-dom";
import {useUpdateQueryParams} from "../../../../hooks/useUpdateQueryParams";

const SortingDropdown = ({ sort }) => {
  const [value, setValue] = useState("Ταξινόμηση");
  const location = useLocation();

  const handleUpdateQueryParams = useUpdateQueryParams();

  const handleSort = (action, type) => {
    handleUpdateQueryParams(location, action, type);
  };
  const handleSelect = (e) => {
    setValue(e);
  };
  return (
    <Dropdown onSelect={(e) => handleSelect(e)}>
      <Dropdown.Toggle variant="primary">
        {value}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          eventKey="Προκαθορισμένη"
          href="#"
          onClick={() => handleSort("sort", {})}
        >
          Προκαθορισμένη
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item
          eventKey=" Αλφαβητικά [Α-Ω]"
          href="#"
          onClick={() => handleSort("sort", { sortBy: "title", order: "asc" })}
        >
          Αλφαβητικά [Α-Ω]
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="Αλφαβητικά [Ω-Α]"
          href="#"
          onClick={() => handleSort("sort", { sortBy: "title", order: "desc" })}
        >
          Αλφαβητικά [Ω-Α]
        </Dropdown.Item>
        <Dropdown.Item
          eventKey=" Φθηνότερα"
          href="#"
          onClick={() => handleSort("sort", { sortBy: "price", order: "asc" })}
        >
          Φθηνότερα
        </Dropdown.Item>
        <Dropdown.Item
          eventKey="  Ακριβότερα"
          href="#"
          onClick={() => handleSort("sort", { sortBy: "price", order: "desc" })}
        >
          Ακριβότερα
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortingDropdown;
