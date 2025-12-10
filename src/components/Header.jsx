import styles from '../app/page.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h1>Eduardo Barber</h1>
        </div>
        <nav>
          <a href="#" className={styles.navLink}>Produtos</a>
          <a href="#" className={styles.navLink}>Agendamento</a>
        </nav>
      </div>
    </header>
  );
}