import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { GET_ALL_CHARACTERS } from "./query/character";
import { ChildrenGridStyle, ParentGridStyle } from "./styles/styles";
import { Pagination } from "./components/Pagination";

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
  // const {
  //   data: dataMoreInfo,
  //   loading: loadingMoreInfo,
  //   error: errorMoreInfo,
  // } = useQuery(GET_CHARACTER_BY_ID, {
  //   variables: {
  //     ids: moreInfo,
  //   },
  // });

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
      {error && <h1>No such characters</h1>}
      {loading && <h1>Loading...</h1>}
      {data && (
        <div
          style={{
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {popupOpen && <Popup onClick={closePopup} id={moreInfo} />}
          <ParentGridStyle>
            {info.characters.map((character, index) => (
              <ChildrenGridStyle
                key={index}
                style={{ cursor: "pointer" }}
                onClick={() => (!popupOpen ? openPopup(character.id) : null)}
              >
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

//Разобраться со стрелочкой пагинации на маленьком экране, и нажатие на каждого перса + вывод ошибки
