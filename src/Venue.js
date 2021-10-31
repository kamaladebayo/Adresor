import './HomePage.css'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Venue = () => {
    const venueParam = sessionStorage.getItem("venue");
    let paramArray = (venueParam.split(','))
    let lat = paramArray[0]
    let lng = paramArray[1]
    let address = paramArray[2]
    let addressExtra = paramArray[3]
    console.log(paramArray);
    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtYWxhZGViYXlvIiwiYSI6ImNrdjdyNWNpZTE4Yjkycm9rYXA3ZnF0MW0ifQ.99PINiiJawzCjrFkteO5kA';
        mapboxgl.workerClass = MapboxWorker; // Wire up loaded worker to be used instead of the default
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [lng, lat], // starting position [lng, lat]
            zoom: 14 // starting zoom
        });
        const marker = new mapboxgl.Marker({color: "#FF0000"})
        .setLngLat([lng, lat])
        .addTo(map)
       
        console.log(marker);

        //GET ADDRESS FROM FOURSQUARE

        console.log(map);
    }, [lng, lat])
    return ( 
        <div className="venue">
            <Navbar />
            <div id="map"></div>
            <h2>{address}</h2>
            <p>{addressExtra}</p>
            <br /><br />
            <Footer />
        </div>
     );
}
 
export default Venue;