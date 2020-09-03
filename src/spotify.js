// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start///#

// After clicking login button, you we jump to this page.
export const authEndpoint = 
"https://accounts.spotify.com/authorize";

// As soon as You log in, you will get redirect to home page.
const redirectUrl = "http://localhost:3000/";

const clientId = "xxxxxxxxxxxxxxxxxxxx";  //you have to write your clientId mentioned in spotify clone api

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial, item) => {
          let parts = item.split('=');
          initial[parts[0]] = decodeURIComponent(parts[1]);

          return initial;
      }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}
&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;