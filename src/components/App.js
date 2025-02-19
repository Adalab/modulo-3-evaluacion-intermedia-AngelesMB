import "../styles/App.scss";
import { useEffect, useState } from "react";
// import callToApi from "../services/api";
import dataList from "../data/data.json";

function App() {
  // const URL =
  //   "https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json";

  // api no longer working, change to data.json
  const cleanData = () =>
    dataList.results.map((item) => {
      const result = {
        name: item.name,
        id: item.id,
        counselor: item.counselor,
        speciality: item.speciality,
        socialNetworks: item.social_networks,
      };
      return result;
    });

  // states
  const [data, setData] = useState(cleanData);
  const [newUser, setNewUser] = useState({
    name: "",
    counselor: "",
    speciality: "",
    socialNetworks: [],
  });
  const [searchValue, setSearchValue] = useState("");
  const [selectValue, setSelectValue] = useState("Todas");

  const [isFormValid, setIsFormValid] = useState(true);

  // effect api
  // useEffect(() => {
  //   callToApi(URL).then((response) => {
  //     setData(response);
  //   });
  // }, []);

  // handlers
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleInputChange = (ev) => {
    setNewUser({
      ...newUser,
      [ev.currentTarget.id]: ev.currentTarget.value,
      id: data.length,
    });
    setIsFormValid(true);
  };

  const handleButtonClick = () => {
    if (
      newUser.name !== "" &&
      newUser.counselor !== "" &&
      newUser.speciality !== ""
    ) {
      setData([...data, newUser]);
      setNewUser({
        name: "",
        counselor: "",
        speciality: "",
        socialNetworks: [],
      });
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSearchChange = (ev) => {
    setSearchValue(ev.currentTarget.value);
  };

  const handleCounselorChange = (ev) => {
    setSelectValue(ev.currentTarget.value);
  };

  // html
  const titleHtml = <h1>Adalabers</h1>;

  const rowsHtml = data
    .filter(
      (eachData) =>
        eachData.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        eachData.counselor.toLowerCase().includes(searchValue.toLowerCase()) ||
        eachData.speciality.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter(
      selectValue !== "Todas"
        ? (eachData) => eachData.counselor === selectValue
        : (eachData) => eachData
    )
    .map((eachData) => (
      <tr className="table__row" key={eachData.id}>
        <td>{eachData.name}</td>
        <td>{eachData.counselor}</td>
        <td>{eachData.speciality}</td>
        <td>
          {eachData.socialNetworks.length !== 0 ? (
            eachData.socialNetworks.map((eachSocialNetwork, index) => (
              <a
                key={index}
                className="table__links"
                href={eachSocialNetwork.url}
              >
                {eachSocialNetwork.name}
              </a>
            ))
          ) : (
            <span>Sin redes sociales</span>
          )}
        </td>
      </tr>
    ));

  return (
    <div>
      <header className="header">{titleHtml}</header>
      <main className="main">
        <form className="form__filter" action="" onSubmit={handleSubmit}>
          <label className="form__label" htmlFor="nameFilter">
            Filtra por nombre, tutora o especialidad:
            <input
              className="form__input"
              type="text"
              name="nameFilter"
              id="nameFilter"
              value={searchValue}
              placeholder="Ej: Python"
              onChange={handleSearchChange}
            />
          </label>
          <label className="form__label" htmlFor="counselorFilter">
            Escoge una tutora:
            <select
              name="counselorFilter"
              id="counselorFilter"
              onChange={handleCounselorChange}
              value={selectValue}
            >
              <option value="Todas">Todas</option>
              <option value="Yanelis">Yanelis</option>
              <option value="Dayana">Dayana</option>
              <option value="Iván">Iván</option>
            </select>
          </label>
        </form>
        <div className="main__container--table">
          <table className="table">
            <thead className="table__header">
              <tr>
                <th className="table__column">Nombre</th>
                <th className="table__column">Tutora</th>
                <th className="table__column">Especialidad</th>
                <th className="table__column">Redes</th>
              </tr>
            </thead>
            <tbody>{rowsHtml}</tbody>
          </table>
        </div>
        <form className="form" action="" onSubmit={handleSubmit}>
          <legend>Añadir una Adalaber</legend>
          <label className="form__label" htmlFor="name">
            Nombre:
            <input
              className="form__input"
              type="text"
              name=""
              id="name"
              value={newUser.name}
              placeholder="Ej: María Suárez"
              onChange={handleInputChange}
            />
          </label>
          <label className="form__label" htmlFor="counselor">
            Tutora:
            <input
              className="form__input"
              type="text"
              name=""
              id="counselor"
              value={newUser.counselor}
              placeholder="Ej: Dayana"
              onChange={handleInputChange}
            />
          </label>
          <label className="form__label" htmlFor="speciality">
            Especialidad:
            <input
              className="form__input"
              type="text"
              name=""
              id="speciality"
              value={newUser.speciality}
              placeholder="Ej: AWS"
              onChange={handleInputChange}
            />
          </label>
          <p className={`form__message--error ${isFormValid ? "hidden" : ""}`}>
            Debes completar todos los campos del formulario.
          </p>
          <input
            className="form__button"
            type="submit"
            value="Añadir una nueva Adalaber"
            onClick={handleButtonClick}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
