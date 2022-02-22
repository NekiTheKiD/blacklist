import Blacklists from ".";

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(blacklist => {
        return {
            params: {id: blacklist.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: {
            blacklist: data
        }
    }
}

const Details = ({ blacklist }) => {
    return ( 
        <div>
            <h1>{ blacklist.name }</h1>
            <p>{ blacklist.email }</p>
            <p>{ blacklist.website }</p>
            <p>{ blacklist.address.city }</p>
        </div>
     );
}
 
export default Details;