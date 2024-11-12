"use client";

import * as React from "react";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";

export default class NumberInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      labelStyle: {
        color: "white",
        paddingBottom: "1em",
      },
      style: {
        display: "block",
        margin: "auto",
        border: ".5px black",
        borderRadius: "5px",
        color: "black",
      },
    };
  }

  render() {
    return (
      <div style={this.state.style}>
        <InputLabel id="amountOfChordsLabel" style={this.state.labelStyle}>Number of chords?</InputLabel>
        <FormControl fullWidth size="small">
          <Select
          inputProps={{
            MenuProps: {
              PaperProps: {
                sx: {
                   backgroundColor: 'white'
                }
              }
            }
          }}
            labelId="amountOfChordsLabel"
            id="amountOfChordsSelect"
            value={this.props.amountOfChords}
            onChange={(event) =>
                this.props.setNumOfChords(event)
              }
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>

          </Select>
        </FormControl>
      </div>
    );
  }
}
