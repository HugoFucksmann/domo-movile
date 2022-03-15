import React, { createContext, Component } from "react";

export const AppContext = createContext();

class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataPreguntas: dataPreg,
      activeStep: 0,
      score: 0,
      openModal: false,
    };
  }

  /*   async componentDidMount() {
  } */

  handlerStep = (correcta, selec) => {
    if (correcta == selec) {
      this.setState({
        score: this.state.score + 1,
        activeStep: this.state.activeStep + 1,
      });
    } else {
      this.setState({
        activeStep: this.state.activeStep + 1,
      });
    }
  };

  handlerModal = () => {
    this.setState({
      openModal: !this.state.openModal,
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          handlerModal: this.handlerModal,
          handlerStep: this.handlerStep,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const dataPreg = [
  {
    preg: "1 la contaminacion de botellas en la laguna setubal se soluciona en:",
    correcto: 1,
    respuestas: [
      { txt: "dejar de tirar  en los espacios publicos" },
      { txt: "dejar de tirar residuos en los espacios publicos" },
      { txt: "dejar de tirar residuos en los" },
      { txt: "dejar de tirar residuos en los espacios publicos" },
    ],
  },
  {
    preg: "2 la contaminacion de botellas en la laguna setubal se soluciona en:",
    correcto: 2,
    respuestas: [
      { txt: "dejar de tirar  en los espacios publicos" },
      { txt: "dejar de tirar residuos en los espacios publicos" },
      { txt: "dejar de tirar residuos en los" },
      { txt: "dejar de tirar residuos en los espacios publicos" },
    ],
  },
  {
    preg: "3 la contaminacion de botellas en la laguna setubal se soluciona en:",
    correcto: 3,
    respuestas: [
      { txt: "dejar de tirar  en los espacios publicos" },
      { txt: "dejar de tirar residuos en los espacios publicos" },
      { txt: "dejar de tirar residuos en los" },
      { txt: "dejar de tirar residuos en los espacios publicos" },
    ],
  },
  {
    preg: "4 la contaminacion de botellas en la laguna setubal se soluciona en:",
    correcto: 3,
    respuestas: [
      { txt: "dejar de tirar  en los espacios publicos" },
      { txt: "dejar de tirar residuos en los espacios publicos" },
      { txt: "dejar de tirar residuos en los" },
      { txt: "dejar de tirar residuos en los espacios publicos" },
    ],
  },
  {
    preg: "5la contaminacion de botellas en la laguna setubal se soluciona en:",
    correcto: 4,
    respuestas: [
      { txt: "dejar de tirar  en los espacios publicos" },
      { txt: "dejar de tirar residuos en los espacios publicos" },
      { txt: "dejar de tirar residuos en los" },
      { txt: "dejar de tirar residuos en los espacios publicos" },
    ],
  },
  {
    preg: "6 la contaminacion de botellas en la laguna setubal se soluciona en:",
    correcto: 4,
    respuestas: [
      { txt: "dejar de tirar  en los espacios publicos" },
      { txt: "dejar de tirar residuos en los espacios publicos" },
      { txt: "dejar de tirar residuos en los" },
      { txt: "dejar de tirar residuos en los espacios publicos" },
    ],
  },
];

export default AppProvider;
