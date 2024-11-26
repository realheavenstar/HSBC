import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';


const Clients = () => {
  return (
    <Paper
      component={Stack}
      alignItems="center"
      justifyContent="space-between"
      sx={{ px: 2, py: 2.5 }}
    >
      <Stack alignItems="center" justifyContent="flex-start" spacing={2}>
        <Stack
          alignItems="center"
          justifyContent="center"
          height={56}
          width={56}
          sx={(theme) => ({
            background: `linear-gradient(135deg, ${theme.palette.gradients.primary.state} 0%, ${theme.palette.gradients.primary.main} 100%)`,
          })}
          borderRadius="50%"
        >
          <IconifyIcon icon="ic:baseline-people-alt" color="info.light" fontSize="h3.fontSize" />
        </Stack>
        <Box>
          <Typography variant="body2" color="text.disabled" fontWeight={500}>
           Team Capacity
          </Typography>
          <Typography mt={0.5} variant="h4">
            85%
          </Typography>
        </Box>
      </Stack>

      
    </Paper>
  );
};

export default Clients;
