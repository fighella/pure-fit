import SpotifyPlayer from 'react-spotify-player';

export default (props) => { 
  const size = {
    width: '100%',
    height: 300,
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'
  
return(
<div>
<SpotifyPlayer
  uri={props.spotify}
  size={size}
  view={view}
  theme={theme}
/>
</div>
)};


// size may also be a plain string using the presets 'large' or 'compact'
 


