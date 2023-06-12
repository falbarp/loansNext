
import { Loan } from "@/interfaces";

import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';

import RootLayout from "@/app/layout";
import { Grid } from "@mui/material";
import { LoanFullCard } from "@/components/ui";

interface Props {
  loan: Loan;
}

const LoanPage: React.FC<Props> = ({ loan }) => {
  return (
    <RootLayout>
    <Grid container spacing={2}>
    <LoanFullCard key={loan._id} loan={loan} />
    </Grid>
    </RootLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/v1/loans');
  const loans: Loan[] = await res.json();


  const paths = loans.map((loan) => ({
    params: { id: loan._id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  // Fetch the product details based on the ID
  console.log(params);
  const res = await fetch(`http://localhost:3000/api/v1/loans/${params?.id}`);
  console.log(res);
  const loan: Loan = await res.json();

  return { props: { loan } };
};

export default LoanPage;






