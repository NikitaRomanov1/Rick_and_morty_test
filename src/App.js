import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ALL_CHARACTERS } from "./query/character";
import {
  ChildrenGridStyle,
  InputStyle,
  ParentGridStyle,
} from "./styles/styles";
import { MemoizedPagination, Pagination } from "./components/Pagination";
import { Select } from "./components/Select";
import { Filter } from "./components/Filter";

function App() {
  const [info, setInfo] = useState({
    characters: [],
    currentPage: 1,
    totalPageCount: null,
    name: " ",
    gender: " ",
    status: " ",
    species: " ",
    type: " ",
  });

  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      name: info.name,
      page: info.currentPage,
      gender: info.gender,
      status: info.status,
      species: info.species,
      type: info.type,
    },
  });
  const searchByName = (e) => {
    setInfo({ ...info, name: e.target.value, currentPage: 1 });
  };
  const searchBySpecies = (e) => {
    setInfo({ ...info, species: e.target.value, currentPage: 1 });
  };
  const searchByType = (e) => {
    setInfo({ ...info, type: e.target.value, currentPage: 1 });
  };

  useEffect(() => {
    if (!loading) {
      setInfo({
        ...info,
        characters: data.characters.results,
        totalPageCount: data.characters.info.pages,
      });
    }
  }, [data]);
  // console.log("Инфо:", info);
  // console.log(data);
  // console.log(error);
  return (
    <>
      <Filter
        info={info}
        setInfo={setInfo}
        searchByName={searchByName}
        searchByType={searchByType}
        searchBySpecies={searchBySpecies}
      />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ParentGridStyle>
            {info.characters.map((character, index) => (
              <ChildrenGridStyle key={index}>
                <img src={character.image} />
              </ChildrenGridStyle>
            ))}
          </ParentGridStyle>
          <div>
            {info.totalPageCount > 0 && (
              <Pagination
                totalPageCount={info.totalPageCount}
                currentPage={info.currentPage}
                onPageChange={(page) => setInfo({ ...info, currentPage: page })}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;

Разобраться со стрелочкой пагинации на маленьком экране, и нажатие на каждого перса
