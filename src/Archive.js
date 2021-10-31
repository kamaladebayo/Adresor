import Footer from "./Footer";
import Navbar from "./Navbar";
import './Archive.css'
import db from "./firebase";
import { useEffect, useState } from "react";
import Search from "./Search";

const Archive = () => {
    const [searches, setSearches] = useState([])
    useEffect(() => {
        db.collection('location').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
            setSearches(snapshot.docs.map(doc => ({
                // doc
                data: doc.data(),
                id: doc.id, 
            })))
        ))
            console.log(searches);
        // db.collection('location').orderBy(  )
    }, [searches])
    
    return ( 
        <div className="archive">
            <Navbar />
            <main>
                <h1>Archive</h1>
                {searches.map((search) => (
                    <Search location={search.data.location} date={search.data.date} key={search.data.id}/>
                ))}
            </main>
            <Footer />
        </div>
     );
}
 
export default Archive;