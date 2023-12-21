import styles from "./404.module.css";

const Error404 = () => {
  return (
    <div className={styles.error_container}>
      <div className={styles.error_image}></div>
      <p>Page not found</p>
      <p>
        Go back to <a href="/">Home</a>
      </p>
    </div>
  );
};

export default Error404;
