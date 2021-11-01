import './HomePage.css'
import Navbar from './Navbar';
import Footer from './Footer';
// import { Avatar, Card } from '@mui/material';
// import { Map } from '@mui/icons-material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'
// import ReactMapGL from 'react-map-gl';
import { Card, Modal } from '@mui/material';
import db from './firebase';
import firebase from 'firebase'
import { Box } from '@mui/system';

const HomePage = () => {




  /* ================================
  ===== Adresor code =================
  =========================================
   */
  const [coordinates, setCoordinates] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [address, setAddress] = useState('')
  const [address2, setAddress2] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [IP, setIP] = useState('')

 
useEffect(() => {
    // Get coordinates from Geolocation API
  const successCallback = (position) => {
      setLatitude(`${position.coords.latitude}`)
    //   console.log(position.coords.latitude);
    //   console.log(position.coords.longitude);
      setLongitude(`${position.coords.longitude}`)
      setCoordinates(`${position.coords.latitude},${position.coords.longitude}`)
  }
  const errorCallback = (error) => {
      console.error(error)
  }
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
      enableHighAccuracy: true
  })
    
}, [])


        useEffect(() => {
            mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtYWxhZGViYXlvIiwiYSI6ImNrdjdyNWNpZTE4Yjkycm9rYXA3ZnF0MW0ifQ.99PINiiJawzCjrFkteO5kA';
            mapboxgl.workerClass = MapboxWorker; // Wire up loaded worker to be used instead of the default
            const map = new mapboxgl.Map({
                container: 'map', // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: [longitude, latitude], // starting position [lng, lat]
                zoom: 13 // starting zoom
            });
            const marker = new mapboxgl.Marker({color: "#FF0000"})
            .setLngLat([longitude, latitude])
            .addTo(map)
           
            console.log(marker);



            axios.get(`https://api.foursquare.com/v2/venues/search?ll=${latitude},${longitude}&client_id=4Z0I5R3WQZDSLGM4LCDBFAYDS4FKAU2KL1YFO0IGCRM2ECDV&client_secret=52QHPTM44KL1DR1BNOJYOOXJLEE0SR4ZW3A1SEGUJQV1Q4VK&v=20182507`)
            // axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1Ijoia2FtYWxhZGViYXlvIiwiYSI6ImNrdjdyNWNpZTE4Yjkycm9rYXA3ZnF0MW0ifQ.99PINiiJawzCjrFkteO5kA`)
            .then(response => {
                // setAddress2(response);
                setAddress2(response.data.response.venues[2].location.formattedAddress[0]);
                // setAddress2(`${locationData.features[0].properties.formatted}`)
            }).catch(error => {
                console.log(error);
            });

            //GET ADDRESS FROM FOURSQUARE

            console.log(map);
        }, [longitude, latitude])
        // ===========================================
        // =========================


        // GET location

        useEffect(() => {
            axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=400e716d00d04d4987c5fda5b9a34ce3`)
            .then(response => {
                console.log("Geoapify used");
                let locationData = response.data;
                // console.log(locationData.features[0].properties);
                setPostalCode(locationData.features[0].properties.postcode)
                setAddress(`${locationData.features[0].properties.address_line2}` || `${locationData.features[0].properties.address_line1}` || `${locationData.features[0].properties.formatted}`)
                // setAddress2(`${locationData.features[0].properties.formatted}`)
                setCity(`${locationData.features[0].properties.city || locationData.features[0].properties.county}`)
                setState(`${locationData.features[0].properties.state}`)
                setCountry(`${locationData.features[0].properties.country}`)
            }).catch(error => {
                console.log(error);
            });
        }, [longitude, latitude])

        

        // GET IP address
        axios.get('https://api.ipify.org/?format=json')
        .then(response => {
          setIP(response.data.ip)
          console.log("Ipify used");
        }).catch(error => {
            console.log(error);
        });
      
        
        const [nearbyPlaces, setNearbyPlaces] = useState([])

        // GET NEARBY LOCATIONS
        useEffect(() => {
            axios.get(`https://api.foursquare.com/v2/venues/explore?ll=${latitude},${longitude}&client_id=4Z0I5R3WQZDSLGM4LCDBFAYDS4FKAU2KL1YFO0IGCRM2ECDV&client_secret=52QHPTM44KL1DR1BNOJYOOXJLEE0SR4ZW3A1SEGUJQV1Q4VK&v=20182507`)
            .then(response => {
                // console.log(response.data.response.groups[0].items);
                setNearbyPlaces(response.data.response.groups[0].items)
            })
            .catch(err => {
                console.log('ERROR!!!' + err);
            })
            
            // console.log(nearbyPlaces);
        }, [latitude, longitude])
        
        
        
    

        
        /* function SimpleDialog(props) {
            const { onClose, selectedValue, open, place } = props;
          
            const handleClose = () => {
              onClose(selectedValue);
            };
          
            console.log(place);
            return(
                <Dialog onClose={handleClose} open={open}>
                    <DialogTitle>{place}</DialogTitle>
                </Dialog>
              )
        }
        const [open, setOpen] = useState(false);
        const [selectedValue, setSelectedValue] = useState([]);
        const handleClickOpen = (xxx) => {
            setOpen(true);
            console.log(xxx);

            // GET THE LATLONG
            //SAVE TO REDUX
            // NEW COMPOENT AND FOOL URL
            // GET DATA FROM REDUX IN NEW URL
            // FOURSQUARE API
        };
        
        const handleClose = (value) => {
            setOpen(false);
        }; */
          



       

  /* ====================================================
  ====================================================
  =============================================================
   */
        // Archive Page
        /* GET DATA */
        // const [location, setLocation] = useState();
        const d = new Date();
        let todDate = d.toLocaleDateString();
        // console.log(todDate);
        useEffect(() => {
            if(address2 && country){
                db.collection('location').add({
                    location: `${address2} => ${address} ${country}`,
                    date: todDate,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                })
            }
        }, [address2, address, country, todDate])
        /* SEND TO FIREBASE */



  /* ====================================================
  ====================================================
  =============================================================
   */
  
  // MAPS
//   const [lat1, setlat1] = useState('');
//   const [lng1, setlng1] = useState('');
/* ================= */
//   const [lnglat2, setlnglat2] = useState('');
//   const [long2, setlong2] = useState('');
/* ================= */
//   const [lnglat3, setlnglat3] = useState('');
//   const [long3, setlong3] = useState('');
/* ================= */



  
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const handleClose1 = () => setOpen1(false);
//   const handleOpen1 = (lng, lat) => {
//       setlat1(lat)
//       setlng1(lng)
//       console.log(lng, lat);
//       setOpen1(true)
//     };
//   const handleOpen2 = (lnglat) => {
//       setOpen2(true)
//       setlnglat2(lnglat)
//     };
//   const handleOpen3 = (lnglat) => {
//       setOpen3(true)
//       setlnglat3(lnglat)
//     };
  const handleClose2 = () => setOpen2(false);
  const handleClose3 = () => setOpen3(false);


  const [venueParam, setVenueParam] = useState([])

//   useEffect(() => {
//       if(open1){
//           mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtYWxhZGViYXlvIiwiYSI6ImNrdjdyNWNpZTE4Yjkycm9rYXA3ZnF0MW0ifQ.99PINiiJawzCjrFkteO5kA';
//           mapboxgl.workerClass = MapboxWorker; // Wire up loaded worker to be used instead of the default
//           const mapone = new mapboxgl.Map({
//               container: 'mapone', // container ID
//               style: 'mapbox://styles/mapbox/streets-v11', // style URL
//               center: [lng1, lat1], // starting position [lng, lat]
//               zoom: 14 // starting zoom
//           });
//           const marker1 = new mapboxgl.Marker({color: "#FF0000"})
//           .setLngLat([lng1, lat1])
//           .addTo(mapone)
         
//           console.log(marker1);

//       }
//   }, [lng1, lat1])
  

useEffect(() => {
    // console.log(venueParam);
    sessionStorage.setItem("venue", [venueParam]);
}, [venueParam])


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#FFF',
    border: '1px solid #DDD',
    boxShadow: 24,
    p: 4,
  };


    return ( 
        <div className="home">
            <Navbar />
            <main>
                <div className="home__map">
                    <div id="map"></div>
                    <div className="map__location">
                        <h1>Here's your location:</h1>
                        <p>{address2}</p>
                        <br />
                        <h2>Address details</h2>
                        <p>Address: {address}</p>
                        <p>City: {city}</p>
                        <p>State: {state}</p>
                        <p>Country: {country}</p>
                        <p>Postal code: {postalCode}</p>
                        <p>IP address code: {IP}</p>
                        <p>Coordinates: {coordinates}</p>
                    </div>
                </div>
                <br />
                <div className="nearbyPlaces">
                    <h2>Some places around you</h2>
                    <div>
                        {/* First card */}
                        {nearbyPlaces && nearbyPlaces.slice(1, 2).map((place) => (
                        <section>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {place.venue.name}
                                </Typography>
                                <br />
                                <Typography variant="small" component="div">
                                    {place.venue.location.address}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <a 
                                href={`/venue/${place.venue.location.country}/${place.venue.location.city}/${place.venue.location.address}`} 
                                onClick={() => setVenueParam([
                                    `${place.venue.location.labeledLatLngs[0].lat}`,
                                    `${place.venue.location.labeledLatLngs[0].lng}`,
                                    `${place.venue.location.address}`,
                                    `${place.venue.location.formattedAddress[0]}`,
                                ])}>View</a>
                            </CardActions>
                        </Card>
                        
                        <Modal
                            open={open1}
                            onClose={handleClose1}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <div>
                                    <div id="mapone"></div>
                                </div>
                               <div>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    {place.venue.name}
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {place.venue.location.formattedAddress[0]}
                                </Typography>
                                </div> 
                            </Box>
                        </Modal>

                    </section>
                    ))}

                    {/* Second Card */}
                    {nearbyPlaces && nearbyPlaces.slice(2, 3).map((place) => (
                        <section>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {place.venue.name}
                                </Typography>
                                <br />
                                <Typography variant="small" component="div">
                                    {place.venue.location.address}
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <a
                                href={`/venue/${place.venue.location.country}/${place.venue.location.city}/${place.venue.location.address}`} 
                                onClick={() => setVenueParam([
                                    `${place.venue.location.labeledLatLngs[0].lat}`,
                                    `${place.venue.location.labeledLatLngs[0].lng}`,
                                    `${place.venue.location.address}`,
                                    `${place.venue.location.formattedAddress[0]}`,
                                ])}>View</a>
                            </CardActions>
                        </Card>
                        
                        <Modal
                            open={open2}
                            onClose={handleClose2}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                {place.venue.name}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {place.venue.location.formattedAddress[0]}
                            </Typography>
                            </Box>
                        </Modal>

                    </section>
                    ))}

                    {/* Third Card */}
                    {nearbyPlaces && nearbyPlaces.slice(3, 4).map((place) => (
                        <section>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {place.venue.name}
                                </Typography>
                                <br />
                                <Typography variant="small" component="div">
                                    {place.venue.location.address}
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <a
                                href={`/venue/${place.venue.location.country}/${place.venue.location.city}/${place.venue.location.address}`} 
                                onClick={() => setVenueParam([
                                    `${place.venue.location.labeledLatLngs[0].lat}`,
                                    `${place.venue.location.labeledLatLngs[0].lng}`,
                                    `${place.venue.location.address}`,
                                    `${place.venue.location.formattedAddress[0]}`,
                                ])}>View</a>
                            </CardActions>
                        </Card>
                        
                        <Modal
                            open={open3}
                            onClose={handleClose3}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                {place.venue.name}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {place.venue.location.formattedAddress[0]}
                            </Typography>
                            </Box>
                        </Modal>

                    </section>
                    ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
     );
}
 
export default HomePage;