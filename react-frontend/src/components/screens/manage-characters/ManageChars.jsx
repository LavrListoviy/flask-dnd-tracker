import { useState } from "react";
import styles from "./ManageChars.module.css";
import CreateChar from "./create-char-modal/CreateChar";

const ManageChars = () => {
  const [isOpened, setOpened] = useState(false);
  const openModal = () => {
    setOpened(true);
  };
  const closeModal = () => {
    setOpened(false);
  };
  return (
    <>
      {isOpened && <CreateChar closeModal={closeModal} />}
      <div className="general_container">
        <h1>Управление Персонажами</h1>
        <button className={`btn ${styles.add_char}`} onClick={openModal}>
          Добавить персонажа
        </button>
        <div className="content_container">
          <div className="character_item">
            <h3>Имя Имя</h3>
            <div className={styles.card_info}>
              {/*TODO: Сделать рамку для изображения персонажа*/}
              <p>
                Класс Брони: <span>15</span>
              </p>
              <div>
                Здоровье:{" "}
                <div className="health_bar_back">
                  <div className="health_bar_front">15/100(0)</div>
                </div>
              </div>
              <p>
                id: <span>1</span>
              </p>
            </div>
          </div>
          <div className="character_item">
            <h3>Имя Имя</h3>
            <div className={styles.card_info}>
              <p>id: 1</p>
              <p>Класс Брони: 15</p>
              <p>Здоровье: </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageChars;
