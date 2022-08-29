import Head from '../components/Head';
import { useState } from "react";
import { Link } from "react-router-dom";
import { CssBaseline, Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Index({ records, createRecords }) {
  const theme = createTheme();

  const [ newForm, setNewForm ] = useState({
    albumTitle: "",
    bandName: "",
    image: "",
    vinylSize: "",
    description: ""
  })

  const loaded = () => {
    return records.map(({ bandName, albumTitle, image, _id }) => {
      return (
        <>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container sx={{ py: 6 }} maxWidth="md">
          <Grid container spacing={4} justifyItems="center">
              <Grid item key={_id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '10%',
                    }}
                    image={image}
                    alt={albumTitle}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    <Link to={`/records/${_id}`}>{bandName}</Link>
                    </Typography>
                    <Typography>
                      {albumTitle}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
        </ThemeProvider>
        </>
      )
    })
  };


  const loading = () => {
    return <h1>Loading...</h1>
  };

const handleChange = event => {
  setNewForm((prevState) => ({
    ...prevState,
    [event.target.name]: event.target.value,
  }));
};

const handleSubmit = event => {
  event.preventDefault();
  //if(Object.values(newForm).length === 0) return; //if there are no values inside the newForm state object, terminate function execution
  createRecords(newForm)
};

return (
  <>
    <Head title="Records List" />
  <section>
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      value={newForm.bandName}
      onChange={handleChange}
      name="bandName"
      placeholder="band name"
      />
      <input 
      type="text"
      value={newForm.albumTitle}
      onChange={handleChange}
      name="albumTitle"
      placeholder="album title"
      />
      <input 
      type="text"
      value={newForm.image}
      onChange={handleChange}
      name="image"
      placeholder="image url"
      />
       <input 
      type="text"
      value={newForm.vinylSize}
      onChange={handleChange}
      name="vinylSize"
      placeholder="7-inch, 10-inch, or 12-inch"
      />
      <input 
      type="text"
      value={newForm.description}
      onChange={handleChange}
      name="description"
      placeholder="any notes?"
      />
      <input type="submit" value="Add Record" />
    </form>
    {records ? loaded() : loading()}
  </section>
  </>
  )
}

export default Index;