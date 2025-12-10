import styles from '../app/page.module.css';

export default function ProductCard({ produto }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTag}>{produto.categoria}</div>
      <h3>{produto.nome}</h3>
      <p>{produto.descricao}</p>
      <div className={styles.cardFooter}>
        <span className={styles.price}>R$ {parseFloat(produto.preco).toFixed(2).replace('.', ',')}</span>
        <button className={styles.btn}>Adicionar</button>
      </div>
    </div>
  );
}