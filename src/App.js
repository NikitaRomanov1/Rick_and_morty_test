import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ALL_CHARACTERS } from "./query/character";
import {
  ChildrenGridStyle,
  ParentGridStyle,
  ImgStyle,
  MainContainerStyle,
} from "./styles/styles";
import { MemoizedPagination } from "./components/Pagination";

import { Filter } from "./components/Filter";
import { Popup } from "./components/Popup";

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
  const [moreInfo, setMoreInfo] = useState(1);
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
  const [popupOpen, setPopupOpen] = useState(false);

  const closePopup = () => {
    setPopupOpen(false);
  };
  const openPopup = (id) => {
    setMoreInfo(id);
    setPopupOpen(true);
  };

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

  return (
    <>
      <Filter
        info={info}
        setInfo={setInfo}
        searchByName={searchByName}
        searchByType={searchByType}
        searchBySpecies={searchBySpecies}
      />
      {error && <h1>No such characters</h1>}
      {loading && <h1>Loading...</h1>}
      {data && (
        <MainContainerStyle>
          {popupOpen && <Popup onClick={closePopup} id={moreInfo} />}
          <ParentGridStyle>
            {info.characters.map((character, index) => (
              <ChildrenGridStyle
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => (!popupOpen ? openPopup(character.id) : null)}
              >
                <ImgStyle src={character.image} />
              </ChildrenGridStyle>
            ))}
          </ParentGridStyle>
          <div>
            {info.totalPageCount > 0 && (
              <MemoizedPagination
                totalPageCount={info.totalPageCount}
                currentPage={info.currentPage}
                onPageChange={(page) => setInfo({ ...info, currentPage: page })}
              />
            )}
          </div>
        </MainContainerStyle>
      )}
    </>
  );
}

export default App;
