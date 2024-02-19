import React from 'react'
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import {genres} from '../Requests'
import Lists from '../components/Lists/Lists';

const Home = () => {
  return (
    <>
        <Navbar />
        <Banner />
        {genres.map((genre) => (
                <Lists key={genre.title} title={genre.title} link={genre.link} />
            ))}
    </>
  )
}

export default Home