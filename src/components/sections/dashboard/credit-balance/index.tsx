
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import IconifyIcon from 'components/base/IconifyIcon';




interface CreditBalanceProps {
  id: number | string;
  type: string;
  time: string;
  amount: string;
  icon: string;
  color: string;
}

const creditBalanceData: CreditBalanceProps[] = [
  {
    id: 1,
    type: 'Arjun',
    time: 'Today, 16:36',
    amount: '2 unread',
    icon: 'ic:baseline-domain',
    color: 'secondary.light',
  },
  {
    id: 2,
    type: 'Zayn',
    time: '23 Jun, 13:06',
    amount: '5 unread',
    icon: 'ic:baseline-electric-car',
    color: 'success.main',
  },
  {
    id: 3,
    type: 'Arjith Zun',
    time: '21 Jun, 19:04',
    amount: '12 unread',
    icon: 'ic:outline-school',
    color: 'warning.main',
  },
];

const CreditBalance = () => {
  return (
    <Paper sx={{ height:355 }}>
      
       
        <Stack justifyContent="space-between">
          <Typography variant="h2" color="#000">
            25 Inbox
          </Typography>

         
        </Stack>
      

      <Typography mt={2} variant="body2" color="text.disabled" fontWeight={500}>
        Recent
      </Typography>

      {creditBalanceData.map((item) => (
        <Stack key={item.id} mt={1.25} mb={2.75} alignItems="center" justifyContent="space-between">
          <Stack spacing={2} alignItems="center" justifyContent="flex-start">
            <Stack
              alignItems="center"
              justifyContent="center"
              height={48}
              width={48}
              bgcolor="info.dark"
              borderRadius="50%"
            >
              <IconifyIcon icon={item.icon} color={item.color} fontSize="h4.fontSize" />
            </Stack>
            <Stack direction="column">
              <Typography variant="body1" fontWeight={700}>
                {item.type}
              </Typography>
              <Typography variant="caption" color="text.disabled" fontWeight={500}>
                {item.time}
              </Typography>
            </Stack>
          </Stack>

          <Typography variant="body1" fontWeight={700}>
            {item.amount}
          </Typography>
        </Stack>
      ))}
    </Paper>
  );
};

export default CreditBalance;
