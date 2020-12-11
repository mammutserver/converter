import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField, Divider, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
        <h1>Home</h1>
    </Container>
  );
};

const Speed: React.FC = () => {
    const classes = useStyles();

    const [inputnumber, setInputNumber] = React.useState(0);
    const [outputnumber, setOutputNumber] = React.useState(0);
    const [inputunit, setInputUnit] = React.useState('ms');
    const [outputunit, setOutputUnit] = React.useState('kmh');

    React.useEffect(() => {
      if(inputunit === "kmh" && outputunit === "ms"){
        setOutputNumber(inputnumber / 3.6);
      }
      else if(inputunit === "ms" && outputunit === "kmh"){
        setOutputNumber(inputnumber * 3.6);
      }
      else if(inputunit === outputunit){
        setOutputNumber(inputnumber);
      }
    }, [inputunit, outputunit, inputnumber]);

    const handleInputNumberChange = (event: any) => {
      setInputNumber(event.target.value);
    };

    const handleInputUnitChange = (event: any) => {
      setInputUnit(event.target.value);
    };

    const handleOutputUnitChange = (event: any) => {
      setOutputUnit(event.target.value);
    };

    return (
        <Container maxWidth="lg">
            <h1>Speed</h1>
            <Divider light />
            <FormControl  className={classes.formControl}>
                <TextField type="number" id="standard-basic" label="Input" value={inputnumber} onChange={handleInputNumberChange} />
            </FormControl>
            <FormControl  className={classes.formControl}>
                <InputLabel id="input-unit-select-label">Unit</InputLabel>
                <Select labelId="input-unit-select-label" id="input-unit-select" value={inputunit} onChange={handleInputUnitChange}>
                    <MenuItem value={"ms"}>m/s</MenuItem>
                    <MenuItem value={"kmh"}>km/h</MenuItem>
                </Select>
            </FormControl>
            <Divider light />
            <FormControl  className={classes.formControl}>
                <TextField type="number" id="standard-basic" label="Output" value={outputnumber} InputProps={{ readOnly: true, }} />
            </FormControl>
            <FormControl  className={classes.formControl}>
                <InputLabel id="output-unit-select-label">Unit</InputLabel>
                <Select labelId="output-unit-select-label" id="output-unit-select" value={outputunit} onChange={handleOutputUnitChange}>
                    <MenuItem value={"ms"}>m/s</MenuItem>
                    <MenuItem value={"kmh"}>km/h</MenuItem>
                </Select>
            </FormControl>
        </Container>
    );
  };

const About: React.FC = () => {
  return (
    <Container maxWidth="lg">
        <h1>About</h1>
        <Divider light />
        <p>&copy; 2020 - Johann Dettling</p>
    </Container>
  );
};

const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home
  },
  {
    path: '/speed',
    sidebarName: 'Speed',
    component: Speed
  },
  {
    path: '/about',
    sidebarName: 'About',
    component: About
  },
];

export default Routes;
