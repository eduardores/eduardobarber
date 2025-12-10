import styles from "./page.module.css";
import database from "@/database/database";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  
  const sql = `
    SELECT p.id, p.nome, p.descricao, p.preco, c.nome as categoria 
    FROM barbearia_produtos p 
    JOIN barbearia_categorias c ON p.categoria_id = c.id
    ORDER BY p.preco DESC
  `;

  const response = await database.query(sql);

  return (
    <div className={styles.page}>
      <Header />
      
      <main className={styles.main}>
        <h2 className={styles.sectionTitle}>Confira nossos produtos:</h2>
        <div className={styles.grid}>
          {response.rows.map((item) => (
            <ProductCard key={item.id} produto={item} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
