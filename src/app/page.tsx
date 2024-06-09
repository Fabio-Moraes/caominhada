import styles from './page.module.css';

export default function Home() {
  const baseUrl =
    'https://legpzytiaeepvlgmekfk.supabase.co/storage/v1/object/public/caominhada/';

  return (
    <>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>2ª CÃOMINHADA 14/07/2024</p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.emblem}
                alt="description of image"
                src={baseUrl.concat('teodoro_sampaio.png')}
              />
            </a>
          </div>
        </div>
        <div className={styles.center}>
          <img
            alt="description of image"
            style={{ width: '100vw', height: 'auto' }}
            src={baseUrl.concat('dogs-swalk.png')}
          />
          <br />
          <h1>Equipe vigilância</h1>
          <br />
          <img
            alt="description of image"
            style={{ width: '100vw', height: 'auto' }}
            src={baseUrl.concat('equipe.png')}
          />
        </div>

        <div className={styles.grid}>
          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>2ª Cãominhada de Teodoro Sampaio</h2>
            <p>
              Venha participar da nossa segunda Cãominhada! Traga seu amigo de quatro patas
              para um dia de diversão e conscientização. Juntos, vamos promover a saúde,
              bem-estar e o amor pelos animais. Não perca essa oportunidade de se divertir e
              fazer novos amigos!
            </p>
          </a>

          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2>Pedidos de camisetas</h2>
            <p>Valor 38,00 (preço da fábrica MSA Serigrafia- Pirapozinho/SP)</p>
            <p>Pedido até 31/05 Pagamento até 31/05 Entrega 25/06</p>
            <br />
            <p>Pagamento PIX</p>
            <p>33321788810</p>
            <p>Cristiane Oliveira Andrade</p>
          </a>

          <a className={styles.card} target="_blank" rel="noopener noreferrer">
            <img
              alt="description of image"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px'
              }}
              src={baseUrl.concat('camisetas.png')}
            />
          </a>
        </div>
        <footer className={styles.footer}>© 2024 Desenvolvido por Fabio Moraes</footer>
      </main>
    </>
  );
}
