import { useState } from "react";
import SideMenu from "../../ui/aside-menu/SideMenu";
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
      <SideMenu />
      <div className={styles.general_container}>
        <h1>Управление Персонажами</h1>
        <button className={`btn ${styles.add_char}`} onClick={openModal}>
          Добавить персонажа
        </button>
        <div className={styles.content_container}>
          <div className={styles.character_item}>
            <h3>Имя Имя</h3>
            <div className={styles.card_info}>
              {/*TODO: Сделать рамку для изображения персонажа*/}
              <p>
                Класс Брони: <span>15</span>
              </p>
              <p>
                Здоровье:{" "}
                <div className={styles.health_bar_back}>
                  <div className={styles.health_bar_front}>15/100(0)</div>
                </div>
              </p>
              <p>
                id: <span>1</span>
              </p>
            </div>
          </div>
          <div className={styles.character_item}>
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
