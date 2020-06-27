import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './landingCard.scss';
  
  
const LandingCard = ({ title, content, imgUrl }) => {
    return (
            <Card className="col-sm-12 card__container">
                <CardActionArea>
                    <CardMedia 
                        className="media"
                        image={imgUrl}
                        height="140px"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    )
}

export default LandingCard;