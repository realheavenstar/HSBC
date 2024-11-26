import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const Activity = () => {
  return (
    <Paper
      component={Stack}
      alignItems="center"
      justifyContent="space-between"
      sx={(theme) => ({
        px: 3,
        py: 2.5,
        background: `linear-gradient(135deg, ${theme.palette.gradients.primary.state} 0%, ${theme.palette.gradients.primary.main} 100%)`,
      })}
    >
      <Box>
        <Typography variant="body2" color="info.dark" fontWeight={500}>
          Compliance Status
        </Typography>
        <Typography mt={1} variant="h3" color="info.light">
          Complaint
        </Typography>
      </Box>

     
    </Paper>
  );
};

export default Activity;
