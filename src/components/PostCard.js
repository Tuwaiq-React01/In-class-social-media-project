import React, { useState } from "react";
import { Card, Icon } from "semantic-ui-react";

const PostCard = ({ image, title }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <Card className="card">
      <img src={image} className="card-image" alt="user profile" />
      <Card.Content>
        <Card.Description>{title}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <i onClick={() => handleLikeClick()}>
          <Icon color={liked ? "pink" : "grey"} name="like" size="large" />
        </i>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
