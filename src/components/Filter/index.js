import React from "react";
import { InputStyle } from "../../styles/styles";
import { Select } from "../Select";
export const Filter = ({
  searchByName,
  searchBySpecies,
  searchByType,
  setInfo,
  info,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputStyle
        placeholder="Search by name"
        onChange={(e) => searchByName(e)}
      />
      <InputStyle
        placeholder="Search by species"
        onChange={(e) => searchBySpecies(e)}
      />
      <InputStyle
        placeholder="Search by type"
        onChange={(e) => searchByType(e)}
      />
      <Select
        value={info.gender}
        defaultValue="Gender"
        options={[
          { value: " ", name: "all" },
          { value: "unknown", name: "unknown" },
          { value: "Female", name: "Female" },
          { value: "Male", name: "Male" },
          { value: "Genderless", name: "Genderless" },
        ]}
        onChange={(gender) =>
          setInfo({ ...info, gender: gender, currentPage: 1 })
        }
      />
      <Select
        value={info.status}
        defaultValue="Status"
        options={[
          { value: " ", name: "all" },
          { value: "unknown", name: "unknown" },
          { value: "Dead", name: "Dead" },
          { value: "Alive", name: "Alive" },
        ]}
        onChange={(status) =>
          setInfo({ ...info, status: status, currentPage: 1 })
        }
      />
    </div>
  );
};
