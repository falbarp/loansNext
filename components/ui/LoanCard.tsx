import { FC, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Loan } from "@/interfaces";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { Grid } from "@mui/material";


interface Props {
  loan: Loan;
  isFavorite?: boolean;
  toggleFavorite?: (loanId: string) => void;
}
export const LoanCard: FC<Props> = ({ loan }) => {
  const pathname = usePathname();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = async (loanId: string) => {
    try {
      const response = await fetch('/api/addFav', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newFavs: isFavorite ? [] : [loanId],
          userId: 1,
          userEmail: 'test',
        }),
      });

      if (response.ok) {
        setIsFavorite(!isFavorite);
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle network or other errors
    }
  };

  return (
    <Card sx={{ minWidth: 275, elevation: 12, display: "grid", p: 2 }}>
      <CardMedia
        component="img"
        image="/logo.png"
        alt="Logo"
      />
      <div key={loan._id}>
        <Link href={`/loans/${loan._id}`} />
        <h2>{loan.title}</h2>
        <p>{loan.description}</p>
        <p>{loan.bank}</p>
        <p>{loan.interest}</p>
        <p>{loan.amount}</p>
        <p>{loan.months}</p>
        <Link href={`/loans/${loan._id}`} />
      </div>
      <CardActions>
        <Link href={`/loans/${loan._id}`}>
          <Button size="small">Conócelo</Button>
        </Link>
        <Grid onClick={() => handleClick(loan._id)}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon color={isFavorite ? 'error' : 'inherit'} />
          </IconButton>
        </Grid>
      </CardActions>
    </Card>
  );
};
