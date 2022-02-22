import styles from '../../styles/Blacklists.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: { blacklists: data }
    }
}

const Blacklists = ({ blacklists }) => {
    return ( 
        <div>
            <h1>All Blacklisters</h1>
            {blacklists.map(blacklist =>(
                <Link href={'/blacklists/' + blacklist.id} key={blacklist.id}>
                    <a className={styles.single}>
                       <h3>{ blacklist.name }</h3> 
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Blacklists;