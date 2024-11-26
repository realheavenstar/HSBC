import Grid from '@mui/material/Grid';
import TopCards from 'components/sections/dashboard/top-cards';



import SpentThisMonth from 'components/sections/dashboard/spent-this-month';

import Tasks from 'components/sections/dashboard/tasks';

import CreditBalance from 'components/sections/dashboard/credit-balance';
import TransactionHistory from 'components/sections/dashboard/transaction-history';

const Dashbaord = () => {
  return (
    <Grid container spacing={2.5}>
      <Grid item xs={12}>
        <TopCards />
      </Grid>
      <Grid item xs={12} md={4}>
        <CreditBalance />
      </Grid>

      <Grid item xs={12} md={4}>
        <Tasks />
      </Grid>
      <Grid item xs={12} md={4}>
        <SpentThisMonth />
      </Grid>
    
      <Grid item xs={12} md={12 }>
        <TransactionHistory />
      </Grid>
    
    </Grid>
  );
};

export default Dashbaord;
