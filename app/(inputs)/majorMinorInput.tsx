"use client";

import * as React from "react";
import { Button, ButtonGroup } from "@mui/material";

export default class majorMinorInput extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      majorOrMinor: "",
      labelStyle: {
        color: "white",
        paddingBottom: "1em",
      },
      buttonGroupStyle: {
        display: "block",
        margin: "auto",
        border: ".5px black",
        borderRadius: "5px",
        color: "black",
      },
      buttonStyle: {
        display: "inline-block",
        margin: "auto",
        alignItems: "center",
        border: ".5px black",
        borderRadius: "5px",
        color: "black",
      },
    };
  }

  render() {
    return (
      <div style={this.state.style}>
        <label
          htmlFor="majorMinor"
          className="block"
          style={this.state.labelStyle}
        >
          Do you want Major triads, or Minor triads?.{" "}
          <ButtonGroup
            style={this.state.buttonGroupStyle}
            variant="outlined"
            aria-label="Basic button group"
          >
            <Button
              style={this.state.buttonStyle}
              variant="contained"
              value="major"
              onClick={(event) =>
                this.props.setMajorOrMinor(event)
              }
            >
              Major
            </Button>
            <Button
              style={this.state.buttonStyle}
              variant="contained"
              value="minor"
              onClick={(event) =>
                this.props.setMajorOrMinor(event)
              }
            >
              Minor
            </Button>
          </ButtonGroup>
        </label>
      </div>
    );
  }
}
