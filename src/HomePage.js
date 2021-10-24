import './HomePage.css'
import Navbar from './Navbar';
import Footer from './Footer';
import { Avatar, Card } from '@mui/material';
import { Map } from '@mui/icons-material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

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

    return ( 
        <div className="home">
            <Navbar />
            <main>
                <div className="home__map">
                    {/* Avatar */}
                    <Avatar className="home__mapPreview">
                        <Map fontSize="large"/>
                    </Avatar>
                    <div className="map__location">
                        <h1>Here's your location:</h1>
                        <p>Address</p>
                        <p>Postal code</p>
                        <p>IP address code</p>
                        <p>GPS coordiantes</p>
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