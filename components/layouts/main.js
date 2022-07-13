import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import Fonts from '../fonts'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="M. Rizki Maulana" />
        <meta name="author" content="M. Rizki Maulana" />
        <link rel="apple-touch-icon" size="48x48" href="/profile.png" />
        <link rel="shortcut icon" href="/profile.png" />
        <meta property="og:site_name" content="M. Rizki Maulana" />
        <meta name="og:title" content="M. Rizki Maulana" />
        <title>Catatan Harian M. Rizki Maulana</title>
        <Fonts />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        {/* <Footer /> */}
      </Container>
    </Box>
  )
}

export default Main
