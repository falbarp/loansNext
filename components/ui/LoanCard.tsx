import { FC, useState, useEffect } from "react";
import Link from "next/link";
import { Loan } from "@/interfaces";
import { generateRandomNumber, localFavs } from "@/helpers";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardMedia, Grid } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

import {
  StyledCard,
  CardContent,
  CardTitle,
  CardDescription,
  CardBank,
  CardInterest,
  CardAmount,
  CardMonths,
  StyledIconButton
} from '@/components/styles';

interface Props {
  loan: Loan;
  isFavorite?: boolean;
  toggleFavorite?: (loanId: string) => void;
}

export const LoanCard: FC<Props> = ({ loan }) => {
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
    <StyledCard>
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
        <Link href={`/loans/${loan._id}`} />
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Link href={`/loans/${loan._id}`}>
          <Button size="large">Conócelo</Button>
        </Link>
        <Grid container spacing={1} alignItems="center" justifyContent="flex-end">
          <Grid item>
            <StyledIconButton aria-label="add to favorites">
              <FavoriteIcon color={isFavorite ? 'error' : 'inherit'} />
            </StyledIconButton>
          </Grid>
          <Grid item>
            <StyledIconButton aria-label="delete">
              <DeleteIcon />
            </StyledIconButton>
          </Grid>
        </Grid>
      </CardActions>
    </StyledCard>
  );
};
