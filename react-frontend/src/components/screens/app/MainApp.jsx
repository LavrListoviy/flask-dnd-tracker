import { useCallback, useEffect, useState } from "react";
import styles from "./MainApp.module.css";

function MainApp() {
  const testList = {
    id: 101,
    name: "John The Brave",
    AR: 17,
    maxHealth: 156,
    currentHealth: 150,
    bonusHealth: 15
  };
  const testList2 = {
    id: 102,
    name: "Booba The Booba",
    AR: 21,
    maxHealth: 114,
    currentHealth: 114,
    bonusHealth: 0
  };

  /**
   * @param {Array} arr1
   * @param {Array} arr2
   */
  const areArraysEqual = useCallback((arr1, arr2) => {
    return (
      arr1.length === arr2.length &&
      arr1.every((item, index) => areObjectsEqual(item, arr2[index]))
    );
  }, []);

  /**
   *
   * @param {Object} obj1
   * @param {Object} obj2
   */
  const areObjectsEqual = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    return keys1.every((key) => obj1[key] === obj2[key]);
  };
  const localStored = JSON.parse(localStorage.getItem("boardItems")) ?? [
    testList,
    testList2
  ];
  const [boardItems, setBoardItems] = useState([...localStored]);
  useEffect(() => {
    console.log(boardItems);
    const storedBoardItems = JSON.parse(localStorage.getItem("boardItems"));
    if (
      storedBoardItems != null &&
      !areArraysEqual(boardItems, storedBoardItems)
    ) {
      setBoardItems(storedBoardItems);
    } else if (storedBoardItems === null) {
      localStorage.setItem("boardItems", JSON.stringify(boardItems));
    }
  }, [boardItems, areArraysEqual]);

  /**
   * @param {Event} event
   */
  const showDelBtn = (event) => {
    const { target } = event;
    target.querySelector(".delBtn").classList.add("active");
  };

  /**
   * @param {Event} event
   */
  const removeDelBtn = (event) => {
    const { target } = event;
    if (target.querySelector(".delBtn")) {
      target.querySelector(".delBtn").classList.remove("active");
    }
  };

  /**
   * @param {Event} event
   */
  const removeItem = (event) => {
    const { target } = event;
    event.preventDefault();
    const targCharacter = target.closest(".character_item");
    const charId = +targCharacter.id;
    const localChars = JSON.parse(localStorage.getItem("boardItems"));
    const newLocalChars = localChars.filter((item) => item.id !== charId);
    localStorage.setItem("boardItems", JSON.stringify(newLocalChars));
    targCharacter.remove();
  };

  // TODO: Доделать внесение нового персонажа и выбор из существующих в правом меню переносом.
  return (
    <>
      <div className="general_container">
        <h1>Трекер Инициативы</h1>
        <div className="content_container">
          {boardItems.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="character_item"
              onMouseEnter={showDelBtn}
              onMouseLeave={removeDelBtn}
            >
              <button className="delBtn" onClick={removeItem}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M10 11V17"
                      stroke="#3eb489"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M14 11V17"
                      stroke="#3eb489"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M4 7H20"
                      stroke="#3eb489"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                      stroke="#3eb489"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                      stroke="#3eb489"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
              <div>{item.name}</div>
              <div>Класс Защиты: {item.AR}</div>
              <div>
                Здоровье:{" "}
                <div className="health_bar_back">
                  <div
                    className="health_bar_front"
                    style={{
                      width: `${Math.floor(
                        (item.currentHealth / item.maxHealth) * 100
                      )}%`
                    }}
                  >{`${item.currentHealth}/${item.maxHealth}(${item.bonusHealth})`}</div>
                </div>
              </div>
            </div>
          ))}
          <div className={`character_item ${styles.add}`}>
            <div className={styles.plusBtn}>
              <svg
                viewBox="-0.64 -0.64 33.28 33.28"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                fill="#3eb489"
                stroke="#3eb489"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>plus</title> <desc>Created with Sketch Beta.</desc>{" "}
                  <defs> </defs>{" "}
                  <g
                    id="Page-1"
                    strokeWidth="1.1199999999999999"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {" "}
                    <g
                      id="Icon-Set"
                      transform="translate(-360.000000, -1035.000000)"
                      fill="#ffead1"
                    >
                      {" "}
                      <path
                        d="M388,1053 L378,1053 L378,1063 C378,1064.1 377.104,1065 376,1065 C374.896,1065 374,1064.1 374,1063 L374,1053 L364,1053 C362.896,1053 362,1052.1 362,1051 C362,1049.9 362.896,1049 364,1049 L374,1049 L374,1039 C374,1037.9 374.896,1037 376,1037 C377.104,1037 378,1037.9 378,1039 L378,1049 L388,1049 C389.104,1049 390,1049.9 390,1051 C390,1052.1 389.104,1053 388,1053 L388,1053 Z M388,1047 L380,1047 L380,1039 C380,1036.79 378.209,1035 376,1035 C373.791,1035 372,1036.79 372,1039 L372,1047 L364,1047 C361.791,1047 360,1048.79 360,1051 C360,1053.21 361.791,1055 364,1055 L372,1055 L372,1063 C372,1065.21 373.791,1067 376,1067 C378.209,1067 380,1065.21 380,1063 L380,1055 L388,1055 C390.209,1055 392,1053.21 392,1051 C392,1048.79 390.209,1047 388,1047 L388,1047 Z"
                        id="plus"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainApp;
