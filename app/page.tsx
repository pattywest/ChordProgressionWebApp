"use client";

import * as React from "react";
import NumberInput from "@/app/(inputs)/numberInput";
import MajorMinorInput from "@/app/(inputs)/majorMinorInput";

export default class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.setNumOfChords = this.setNumOfChords.bind(this);
    this.setMajorOrMinor = this.setMajorOrMinor.bind(this);
    this.setStartingChord = this.setStartingChord.bind(this);
    //TODO - Create Chord Progression arrays
    this.state = {
      amountOfChords: 3,
      majorOrMinor: "",
      startingChord: "",
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
      backgroundStyle: {
        backgroundImage: "url(/background.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      },
    };
  }

  //TODO
  setNumOfChords(event) {
    this.setState({
      amountOfChords: event.target.value,
    }, () => console.log(this.state.amountOfChords));
  }

  setMajorOrMinor(event) {
    this.setState({
      majorOrMinor: event.target.value,
    }, () => console.log(this.state.majorOrMinor));
  }

  //TODO
  setStartingChord() {}

  //TODO
  createChordProgression() {}

  render() {
    return (
      <div style={this.state.backgroundStyle}>
        <div
          className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
        >
          <NumberInput amountOfChords={this.state.amountOfChords} setNumOfChords={this.setNumOfChords} />
          <MajorMinorInput setMajorOrMinor={this.setMajorOrMinor} />
        </div>
      </div>
    );
  }
}
