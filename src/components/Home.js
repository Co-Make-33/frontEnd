import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const HomeGlobal = createGlobalStyle`
* {
    color:white;
}
body {
    background-color:#242943;
}
`

const HomeWrapper = styled.div`
    display:flex;
    flex-direction:column;
    max-width:100%;
`

const HomeBanner = styled.div`
    display: flex;
    flex-direction:column;
    width:85%;
    height:70%;
    align-items:left;
    margin-top:5%;
    margin-bottom:5%;
    margin-left:7%;
    background-color:#242943;
    color:white;


`

const HomeHeading = styled.div`
    display:flex;
    flex-direction:row;
    border-bottom:2px solid white;
    margin-bottom:1%;
`

const HomeDetails = styled.div`
    display:flex;
    text-transform:uppercase;
    letter-spacing:2px;
    margin-top:2%;
`

const Tiles = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
`
const Tile1 = styled.div`
    width:40%;
    background-color:#6fc3df;
`
const Tile2 = styled.div`
    background-color:#8d82c4;
    width:60%;
`

const Tile3 = styled.div`
    background-color:#ec8d81;
    width:60%;
`

const Tile4 = styled.div`
    background-color:#e7b788;
    width:40%;
`

const InnerTile = styled.div`
    /* background-color:#6fc3df; */
    margin-left:20px;
    text-transform:uppercase;
    letter-spacing:2px;
`
const TileGroup1 = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    height:400px;
    justify-content:center;
`
const TileGroup2 = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    height:400px;
`
const InnerHeading = styled.div`
    border-bottom:2px solid white;
    width:35%;
    text-transform:none;
`

const HomeSectionTwo = styled.div`

`
const HomeButton = styled.button`
    border:1px solid white;
    text-transform:uppercase;
    padding:-2px 2px 0px 2px;
    margin-top:10px;
    margin-bottom:10px;
    letter-spacing:2px;
    margin-left:4%;
    background-color:#242943;
`




const Home = () => {

    return(
        <>
        <HomeGlobal/>
        {/* //Page Wrapper */}
        <HomeWrapper>

            {/* Banner */}
            <HomeBanner>
                <HomeHeading>
                    <h1>Welcome to Co-Make</h1>
                </HomeHeading>
                <HomeDetails>
                    <p>you can make your voice heard on the issues <br />you would like to see resolved in your community</p>
                    <HomeButton>Get Started</HomeButton>
                </HomeDetails>

            </HomeBanner>

            {/* Tiles */}
            <Tiles>
                <TileGroup1>
                    <Tile1>
                        <InnerTile>
                            <InnerHeading>
                                <h3>Aliquam</h3>
                            </InnerHeading>
                            <p>Ipsum dolor sit amet</p>
                        </InnerTile>
                    </Tile1>

                    <Tile2>
                        <InnerTile>
                            <InnerHeading>
                                <h3>Aliquam</h3>
                            </InnerHeading>
                            <p>Ipsum dolor sit amet</p>
                        </InnerTile>
                    </Tile2>
                </TileGroup1>

                <TileGroup2>
                    <Tile3>
                        <InnerTile>
                            <InnerHeading>
                                <h3>Aliquam</h3>
                            </InnerHeading>
                            <p>Ipsum dolor sit amet</p>
                        </InnerTile>
                    </Tile3>

                    <Tile4>
                        <InnerTile>
                            <InnerHeading>
                                <h3>Aliquam</h3>
                            </InnerHeading>
                            <p>Ipsum dolor sit amet</p>
                        </InnerTile>
                    </Tile4>
                </TileGroup2>

            </Tiles>

            <HomeSectionTwo>

            </HomeSectionTwo>


        </HomeWrapper>
        </>
    )
}

export default Home