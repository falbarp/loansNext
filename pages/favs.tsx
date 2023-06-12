import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { loansApi, localFavs } from '@/helpers';
import { Loan } from '@/interfaces';
import { default as RootLayout } from '../app/layout';
import Grid from '@mui/material/Grid';
import { LoanCard } from '@/components/ui/LoanCard';

interface Props {
  loans: Loan[];
}

const FavsPage: NextPage<Props> = ({ loans }) => {
  const toggleFavorite = (loanId: string) => {
    localFavs.toggleFavorite(loanId);
  };

  const favoriteLoans = loans.filter((loan) =>
    localFavs.existInFavorites(loan._id)
  );

  return (
    <div>
      <RootLayout>
        <div>
          <div>
            < h1>FAVORITOS</h1>
          </div> 
          <Grid container spacing={2}>
            {favoriteLoans.map((loan) => (
              <Grid item key={loan._id} xs={12} sm={6} md={4} lg={3}>
              <LoanCard
              key={loan._id}
              loan={loan}
              isFavorite={true} 
              toggleFavorite={toggleFavorite}/>
                </Grid>
              ))}
          </Grid>
        </div>          
      </RootLayout>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const { data } = await loansApi.get<Loan[]>(`/loans`);
  return {
    props: {
      loans: data || [],
    },
  };
};

export default FavsPage;
