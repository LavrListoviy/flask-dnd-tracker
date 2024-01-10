
import { PropTypes } from 'prop-types';
import styles from "./AddToTracker.module.css";

const AddToTracker = (closeModal) => {
    return (
        <div className={styles.modal_overlay} >
          <div className={styles.modal_box}>
            <div className="close_button" onClick={closeModal} title="Закрыть">
              <svg
                fill="#3eb489"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
                width="32px"
                height="32px"
                viewBox="-0.64 -0.64 33.09 33.09"
                stroke="#3eb489"
                transform="rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.063624"
                />
    
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M23.263,9.969 L27.823,9.969 C28.372,9.969 28.817,10.415 28.817,10.966 C28.817,11.516 28.456,11.906 27.906,11.906 L21.154,11.906 C21.058,11.935 20.962,11.963 20.863,11.963 C20.608,11.963 20.354,11.865 20.160,11.671 C19.916,11.426 19.843,11.088 19.906,10.772 L19.906,3.906 C19.906,3.355 20.313,2.989 20.863,2.989 C21.412,2.989 21.857,3.435 21.857,3.986 L21.857,8.559 L30.103,0.289 C30.491,-0.100 31.120,-0.100 31.509,0.289 C31.897,0.679 31.897,1.310 31.509,1.699 L23.263,9.969 ZM11.914,27.917 C11.914,28.468 11.469,28.914 10.920,28.914 C10.370,28.914 9.926,28.468 9.926,27.917 L9.926,23.344 L1.680,31.613 C1.486,31.808 1.231,31.906 0.977,31.906 C0.723,31.906 0.468,31.808 0.274,31.613 C-0.114,31.224 -0.114,30.593 0.274,30.203 L8.520,21.934 L3.960,21.934 C3.410,21.934 2.966,21.488 2.966,20.937 C2.966,20.386 3.410,19.940 3.960,19.940 L10.920,19.940 C10.920,19.940 10.921,19.940 10.921,19.940 C11.050,19.940 11.179,19.967 11.300,20.017 C11.543,20.118 11.737,20.312 11.838,20.556 C11.888,20.678 11.914,20.807 11.914,20.937 L11.914,27.917 ZM10.920,11.963 C10.821,11.963 10.724,11.935 10.629,11.906 L3.906,11.906 C3.356,11.906 2.966,11.516 2.966,10.966 C2.966,10.415 3.410,9.969 3.960,9.969 L8.520,9.969 L0.274,1.699 C-0.114,1.310 -0.114,0.679 0.274,0.289 C0.662,-0.100 1.292,-0.100 1.680,0.289 L9.926,8.559 L9.926,3.986 C9.926,3.435 10.370,2.989 10.920,2.989 C11.469,2.989 11.914,3.435 11.914,3.986 L11.914,10.965 C11.914,11.221 11.817,11.476 11.623,11.671 C11.429,11.865 11.174,11.963 10.920,11.963 ZM20.174,20.222 C20.345,20.047 20.585,19.940 20.863,19.940 L27.823,19.940 C28.372,19.940 28.817,20.386 28.817,20.937 C28.817,21.488 28.372,21.934 27.823,21.934 L23.263,21.934 L31.509,30.203 C31.897,30.593 31.897,31.224 31.509,31.613 C31.314,31.808 31.060,31.906 30.806,31.906 C30.551,31.906 30.297,31.808 30.103,31.613 L21.857,23.344 L21.857,27.917 C21.857,28.468 21.412,28.914 20.863,28.914 C20.313,28.914 19.906,28.457 19.906,27.906 L19.906,21.130 C19.843,20.815 19.916,20.477 20.160,20.232 C20.164,20.228 20.170,20.227 20.174,20.222 Z" />{" "}
                </g>
              </svg>
            </div>
            <h2>Создание персонажа</h2>
            <form>
              <div className={styles.form_items}>
                <div className={styles.form_item}>
                  <label htmlFor="char-name">Имя: </label>
                  <input type="text" id="char-name" />
                </div>
                <div className={styles.form_item}>
                  <label htmlFor="char-name">Класс защиты: </label>
                  <input type="text" id="char-name" />
                </div>
                <div className={styles.form_item}>
                  <label htmlFor="char-name">Инициатива: </label>
                  <input type="text" id="char-name" />
                </div>
                <div className={styles.form_item}>
                  <label htmlFor="char-name">Макс. здоровье: </label>
                  <input type="text" id="char-name" />
                </div>
              </div>
              <button className={`btn ${styles.form_submit}`}>Создать</button>
            </form>
          </div>
        </div>
      );
};
AddToTracker.propTypes ={
    closeModal: PropTypes.func.isRequired
};


export default AddToTracker