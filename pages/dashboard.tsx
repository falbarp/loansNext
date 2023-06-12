import React, { useEffect, useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { loansApi } from '@/helpers';
import { LoanResponse, Loan } from '@/interfaces';
import { default as RootLayout } from '../app/layout';
import Grid, { GridSize } from '@mui/material/Grid'; 
import Pagination from '@mui/material/Pagination';

import { LoanCard } from '@/components/ui/LoanCard';

interface Props {
  loans: Loan[];
}

const Dashboard: NextPage<Props> = ({ loans }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const loansPerPage = 10;

  useEffect(() => {
    const saveLoan = async (loan: Loan) => {
      try {
      
      } catch (error) {
      
      }
    };

    loans.forEach((loan) => {
      saveLoan(loan);
    });
  }, [loans]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastLoan = currentPage * loansPerPage;
  const indexOfFirstLoan = indexOfLastLoan - loansPerPage;
  const currentLoans = loans.slice(indexOfFirstLoan, indexOfLastLoan);

  return (
    <div>
      <RootLayout>
        <div>
          <div>
            <h1>Préstamos</h1>
          </div>
          <Grid container spacing={2}>
          {currentLoans.map((loan) => (
          <Grid item key={loan._id} xs={12} sm={6} md={4} lg={3}>
                <LoanCard loan={loan} />
              </Grid>
              ))}
          </Grid>
          <Pagination
            count={Math.ceil(loans.length / loansPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </RootLayout>
    </div>
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

export default Dashboard;
