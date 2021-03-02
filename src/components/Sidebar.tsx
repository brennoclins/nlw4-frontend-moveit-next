import styles from '../styles/components/Sidebar.module.css'

export function Sidebar() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.sidebarContainer}>
          <button type="button" className={styles.sidebarLogo}>
            <img src="icons/logo.png" alt="Logo da Move.it"/>
          </button>

          <button type="button" className={styles.sidebarHome}>
            <img src="icons/home.png" alt="Icone da Home" />
          </button>

          <button type="button" className={styles.sidebarAward}>
            <img src="icons/award.svg" alt="award"/>
          </button>
        </div>
      </div>
    )
}