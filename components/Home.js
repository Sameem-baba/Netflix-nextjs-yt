import Head from "next/head";
import React from "react";
import requests from "../lib/requests";
import Banner from "./Banner";
import Header from "./Header";
import Row from "./Row";

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Head>
        <title>Netflix - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <Row
        title="NETFLIX ORIGNALS"
        fetchUrl={requests.fetchNetflixOrignals}
        isLargeRow
      />

      <Row title="Trending" fetchUrl={requests.fetchTrending} />

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default Home;
