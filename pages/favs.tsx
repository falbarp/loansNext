import { GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import { loansApi } from '@/helpers';
import { LoanResponse, Loan } from '@/interfaces';
import { default as RootLayout } from '../app/layout';
import Grid from '@mui/material/Grid';
import { LoanCard } from '@/components/ui/LoanCard';

interface Props {
  loans: Loan[];
  isFavorite: boolean;
  toggleFavorite: (loanId: string) => void;
}


const includedLoans = ["47dfd2a4df8b202babb8f6c", "647dfd2a4df8b202babb8f6b", "647dfd2a4df8b202babb8f69"];

const FavsPage: NextPage<Props> = ({ loans }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const filteredLoans = loans.filter((loan) => includedLoans.includes('' + loan._id));

  const toggleFavorite = (loanId: string) => {
    setIsFavorite((prevState) => !prevState);
    // Perform additional logic to update the favorite status of the loan with the given ID
  };

  return (
    <RootLayout>
      <h1>FAVORITOS</h1>
      <Grid container spacing={2}>
        {filteredLoans.map((loan) => (
          <LoanCard
            key={loan._id}
            loan={loan}
            isFavorite={isFavorite} // Pass the isFavorite state to the LoanCard component
            toggleFavorite={toggleFavorite} // Pass the toggleFavorite function to the LoanCard component
          />
        ))}
      </Grid>
    </RootLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await loansApi.get<LoanResponse>('/loans');
  return {
    props: {
      loans: data || null,
    },
  };
};

export default FavsPage;
