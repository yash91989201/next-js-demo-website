// import Head from 'next/head'
 import styles from '../styles/Home.module.css';
 import Link from 'next/link';
const Home=()=> {
  return (
    <>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus repudiandae quae eveniet cupiditate, impedit, quam dicta reprehenderit deleniti, ipsam dolorum. Eligendi expedita harum laudantium.  </p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates, veritatis molestias recusandae, facere ratione dignissimos esse quos, nemo eos laudantium sed sequi explicabo nesciunt! </p>
      <Link href='/ninjas'>
      <a className={styles.btn}>Ninjas Listing</a>
      </Link>    
    </div>
    </>
  )
}
export default Home;
// hello
