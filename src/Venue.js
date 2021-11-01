import './HomePage.css'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Venue = () => {
    const venueParam = sessionStorage.getItem("venue")
    let paramArray;
    if(venueParam){
        paramArray = (venueParam.split(','))
    }else{
        paramArray = ''
    }
    let lat = paramArray[0] || 41.69609167
    let lng = paramArray[1] || 44.80708881
    let address = paramArray[2] || `Do not view nearby places in a new tab`
    let addressExtra = paramArray[3] || ''
    // console.log(paramArray);
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

        console.log(map);
    }, [lng, lat])
    return ( 
        <div className="venue">
            <Navbar />
            <div id="map"></div>
            <h2>{address || `Do not view in a seperate tab`}</h2>
            <p>{addressExtra || ``}</p>
            <br /><br />
            <Footer />
        </div>
     );
}
 
export default Venue;