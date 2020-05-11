import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';


class Radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioStations: [],
      filtredRadios: [],
    };
  }

  async componentDidMount() {
    var url = "http://api.mp3quran.net/radios/radio_english.json";
    var response = await fetch(url);
    var data = await response.json();

    this.setState({ radioStations: data["radios"] });
    console.log(this.state.radioStations[0]);
    var filteredRadio = this.state.radioStations.filter(
      (radio) => radio["name"] == "--Quran Tafseer--"
    );
    this.setState({ filtredRadios: filteredRadio });
    console.log(this.state.filtredRadios);
  }

  playAudio() {
    const audio = document.getElementsByClassName("radio-audio");
    audio.play();
  }
  render() {
    var radios = this.state.radioStations.map((radio, i) => (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component="h1" variant="h5">{radio["name"]}</Typography>
        <Grid item>
          <ReactAudioPlayer
            src={radio["radio_url"]}
            controls></ReactAudioPlayer>
        </Grid>
      </Container>
    ));
    return <div>{radios}</div>;
  }
}

export default Radio;
