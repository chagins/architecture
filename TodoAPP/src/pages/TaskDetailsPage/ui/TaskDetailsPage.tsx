import React from 'react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { TaskDetails } from 'widgets/TaskDetails';

export const TaskDetailsPage = () => {
  return (
    <Container maxWidth="md">
      <Typography mt={2} variant="h1" align="center">
        Tasks details
      </Typography>
      <TaskDetails />
    </Container>
  );
};
