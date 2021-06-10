import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, Grid, Card, Divider } from "semantic-ui-react";
import PostCard from "./PostCard";
import Popup from "./Popup";
import Navbar from "./Navbar";

const Home = ({ picture, name, email }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => setImages(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <center>
      <Navbar />
      <div>
        <Divider horizontal />
        <Card>
          <Card.Content>
            <Image floated="right" size="mini" src={picture} />
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{email}</Card.Meta>
          </Card.Content>
        </Card>
      </div>
      <Divider horizontal />
      <Popup />
      <Divider horizontal />
      <div>
        <Grid relaxed columns={3}>
          {images.map((image, index) => {
            return (
              <Grid.Column>
                <PostCard key={index} image={image.url} />
              </Grid.Column>
            );
          })}
        </Grid>
      </div>
    </center>
  );
};

export default Home;
