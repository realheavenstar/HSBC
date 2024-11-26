import Grid from '@mui/material/Grid';
import Spent from './spent';
import Clients from './clients';
import Earnings from './earnings';
import Activity from './activity';

const TopCards = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} xl={6}>
        <Spent />
      </Grid>
      <Grid item xs={12} sm={6} xl={6}>
        <Activity />
      </Grid>
      <Grid item xs={12} sm={6} xl={6}>
        <Clients />
      </Grid>
      <Grid item xs={12} sm={6} xl={6}>
        <Earnings />
      </Grid>
    </Grid>
  );
};

export default TopCards;
