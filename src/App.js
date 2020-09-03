import React, { useState, useEffect } from 'react';
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue} from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token } , dispatch] = useDataLayerValue();   //To pull any information, we declare like this.

  //Run code based on a given condition
  useEffect(() => {
    // code...
    const hash = getTokenFromUrl();
    window.location.hash = "";
    

    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log('hey', user);
        

        dispatch({
          type: 'SET_TYPE',
          user: user
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('7c0d10d95a5245c0aca8423d4d52b4e6')
      .then((response) => {
         dispatch({
           type: "SET_DISCOVER_WEEKLY",
           discover_weekly: response,
         });
        });
    }
     }, []);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
        }
    </div>
  );
}

export default App;
