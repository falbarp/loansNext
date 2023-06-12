import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { Loan } from "@/interfaces";
import { generateRandomNumber, localFavs } from "@/helpers";
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardMedia, Grid } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import {
  StyledCard,
  CardContent,
  CardTitle,
  CardDescription,
  CardFullText,
  CardBank,
  CardInterest,
  CardAmount,
  CardMonths,
  StyledIconButton,
} from '@/components/styles';

interface Props {
  loan: Loan;
  isFavorite?: boolean;
  toggleFavorite?: (loanId: string) => void;
}

export const LoanFullCard: FC<Props> = ({ loan }) => {
  const randomImageName = generateRandomNumber();
  const [imageSrc, setImageSrc] = useState(`/loans/${randomImageName}`);

  const [isFavorite, setIsFavorite] = useState(localFavs.existInFavorites(loan._id));

  useEffect(() => {
    setIsFavorite(localFavs.existInFavorites(loan._id));
  }, []);

  const onToggleFavorite = () => {
    localFavs.toggleFavorite(loan._id);
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="fullscreen-card"> {/* Added a wrapper div with a CSS class */}
      <StyledCard>
        <Grid component="a" href="/dashboard">
          <StyledIconButton aria-label="Cerrar">
            <CloseIcon color={isFavorite ? 'error' : 'inherit'} />
          </StyledIconButton>  
        </Grid>
        <CardMedia
          component="img"
          image={imageSrc}
        /> 
        <CardContent key={loan._id}>
          <Link href={`/loans/${loan._id}`} />
          <CardTitle>{loan.title}</CardTitle>
          <CardDescription>{loan.description}</CardDescription>
          <CardBank>{loan.bank}</CardBank>
          <CardInterest>{loan.interest}<span>% TAE</span></CardInterest>
          <CardAmount>{`Hasta ${loan.amount}€`}</CardAmount>
          <CardMonths>{loan.months}<span> meses</span></CardMonths>
          <CardFullText>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo elit non massa auctor tristique ac eget odio. Pellentesque vel eleifend felis. Quisque faucibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo elit non massa auctor tristique ac eget odio.
          </p>
          </CardFullText>
        </CardContent>
        <CardActions>
          <Grid>
          </Grid>
          <Grid onClick={() => onToggleFavorite()}>
            <StyledIconButton aria-label="add to favorites">
              <FavoriteIcon color={isFavorite ? 'error' : 'inherit'} />
            </StyledIconButton>
          </Grid>
        </CardActions>
      </StyledCard>
    </div>
  );
};
