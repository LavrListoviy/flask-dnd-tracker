import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.header_container}>
        <ul className={styles.header_list}>
            <li>Регистрация</li>
            <li>Вход</li>
        </ul>
    </div>
  )
}

export default Header