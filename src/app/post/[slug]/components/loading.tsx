import React from "react";
import styles from "./loading.module.scss";

export default function LoadingPost() {
  return (
    <div className={styles.loading}>
      <h1>Carregando página...</h1>
    </div>
  );
}
