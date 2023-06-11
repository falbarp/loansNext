import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { loansApi } from '@/helpers';
import { LoanResponse, Loan } from '@/interfaces';
import { default as RootLayout } from '../app/layout';
import Grid from '@mui/material/Grid';
import { LoanCard } from '@/components/ui/LoanCard';
import { Paginator } from '@/components/ui'


interface Props {
  loans: Loan[];}




const Dashboard: NextPage<Props> = ({loans}) => {

  return ( 
    <div>
    <RootLayout>  
      <div>
      <div>
      <h1>Préstamos</h1>
      </div>
      <Grid container spacing={2}>
        {loans.map((loan) => (
          <LoanCard  key={loan._id} loan={loan} />
          ))
        },
    </Grid>
     </div>
      <Paginator />
     </RootLayout>
     </div>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await loansApi.get<LoanResponse>('/loans');
  console.log(data);
  return {
    props: {
      loans: data || null,
    },
  };              
}

export default Dashboard;             