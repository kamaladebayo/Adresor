import './HomePage.css'
import Navbar from './Navbar';
import Footer from './Footer';
// import { Avatar, Card } from '@mui/material';
// import { Map } from '@mui/icons-material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import axios from 'axios'
import mapboxgl from 'mapbox-gl'
import { Card } from '@mui/material';

const HomePage = () => {

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Place details from API</DialogTitle>
    </Dialog>
  );
}

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };



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

 

// Get coordinates from Geolocation API
  const successCallback = (position) => {
      setLatitude(`${position.coords.latitude}`)
      setLongitude(`${position.coords.longitude}`)
      setCoordinates(`${position.coords.latitude},${position.coords.longitude}`)
  }
  const errorCallback = (error) => {
      console.error(error)
  }
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback)


        useEffect(() => {
            axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=pk.eyJ1Ijoia2FtYWxhZGViYXlvIiwiYSI6ImNrdjdyNWNpZTE4Yjkycm9rYXA3ZnF0MW0ifQ.99PINiiJawzCjrFkteO5kA`)
            .then(response => {
                setAddress2(response.data.features[0].place_name);
                // setAddress2(`${locationData.features[0].properties.formatted}`)
            }).catch(error => {
                console.log(error);
            });


            mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtYWxhZGViYXlvIiwiYSI6ImNrdjdyNWNpZTE4Yjkycm9rYXA3ZnF0MW0ifQ.99PINiiJawzCjrFkteO5kA';
            const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [longitude, latitude], // starting position [lng, lat]
            zoom: 9 // starting zoom
            });

            console.log(map);
        }, [longitude, latitude])
        // ===========================================
        // =========================


        // GET location

        useEffect(() => {
            axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=400e716d00d04d4987c5fda5b9a34ce3`)
            .then(response => {
                let locationData = response.data;
                console.log(locationData.features[0].properties);
                setPostalCode(locationData.features[0].properties.postcode)
                setAddress(`${locationData.features[0].properties.street}, ${locationData.features[0].properties.city || locationData.features[0].properties.county}`)
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
        }).catch(error => {
            console.log(error);
        });
      



   


    



  /* ====================================================
  ====================================================
  =============================================================
   */

    return ( 
        <div className="home">
            <Navbar />
            <main>
                <div className="home__map">
                    {/* Avatar */}
                    <div id="map"></div>
                    <div className="map__location">
                        <h1>Here's your location:</h1>
                        <p>{address2}</p>
                        <br />
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
                    <h2>Places nearby</h2>
                    <div>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    Place
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={handleClickOpen}>Learn More</Button>
                            </CardActions>
                        </Card>
                        {/* ======= */}
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    Place
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={handleClickOpen}>Learn More</Button>
                            </CardActions>
                        </Card>
                        {/* ======= */}
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    Place
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" onClick={handleClickOpen}>Learn More</Button>
                            </CardActions>
                        </Card>
                        {/* ======= */}


                        <SimpleDialog
                            selectedValue={selectedValue}
                            open={open}
                            onClose={handleClose}
                        />
                    </div>

                </div>
            </main>
            <Footer />
        </div>
     );
}
 
export default HomePage;