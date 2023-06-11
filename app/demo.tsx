// import React, { useState } from 'react';



// import { CardHeader, Card } from '@mui/material/';
// import { CardContent } from '@mui/material';
// import { Typography } from '@mui/material/';
// import { IconButton } from '@mui/material/';
// import { Collapse } from '@mui/material/';
// import { makeStyles } from '@mui/styles';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import { FavoriteBorder as FavoriteBorderIcon } from '@mui/icons-material';
// import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

// const useStyles = makeStyles((theme) => ({
//   card: {
//     maxWidth: 400,
//     margin: 'auto',
//     backgroundColor: '#f5f5f5',

//   },
//   expandIcon: {
//     marginLeft: 'auto',
//   },
// }));

// interface ModernCardProps {
//   title: string;
//   description: string;
// }

// const ModernCard: React.FC<ModernCardProps> = ({ title, description }) => {
//   const classes = useStyles();
//   const [expanded, setExpanded] = useState(false);
//   const [isFavorite, setIsFavorite] = useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const handleFavoriteClick = () => {
//     setIsFavorite(!isFavorite);
//   };

//   return (
//     <Card className={classes.card}>
//       <CardHeader
//         title={title}
//         action={
//           <IconButton onClick={handleFavoriteClick} aria-label="favorite">
//             {isFavorite ? <FavoriteIcon color="secondary" /> : <FavoriteBorderIcon />}
//           </IconButton>
//         }
//       />
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {description}
//           </Typography>
//         </CardContent>
//       </Collapse>
//       <IconButton
//         className={classes.expandIcon}
//         onClick={handleExpandClick}
//         aria-expanded={expanded}
//         aria-label="show more"
//       >
//         <ExpandMoreIcon />
//       </IconButton>
//     </Card>
//   );
// };

// export default ModernCard;
