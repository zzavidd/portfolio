import { AppBar, Container, Stack, Toolbar, Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <AppBar color={'transparent'} elevation={0}>
        <Toolbar></Toolbar>
      </AppBar>
      <Container maxWidth={false}>
        <Stack height={'75vh'} mx={4} justifyContent={'center'}>
          <Typography variant={'h5'}>
            The site for projects curated by
          </Typography>
          <Typography variant={'h1'}>Zavid Egbue</Typography>
        </Stack>
      </Container>
    </>
  );
}
