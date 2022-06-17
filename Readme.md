# Bem vindo ao projeto de Trivia

### Este projeto foi desenvolvido em grupo por mim e mais 3 pessoas

<h1>Integrantes do grupo</h1>

<ol>
  <li><a href= "https://github.com/holygato">Samuel dos Reis</a></li>
  <li><a href= "https://github.com/matheusfoaraujo">Matheus Araujo</a></li>
  <li><a href= "https://github.com/ronaferr">Ronan Ferreira</a></li>
</ol>


## Código da trybe:

<h4>Caminho: mock/questions.js</h4>

<h4>Dentro da pasta helpers, possui um arquivo chamado renderWithRouterAndRedux.js</h4>

```js
  import React from 'react';
  import { render } from '@testing-library/react';
  import { Router } from 'react-router-dom';
  import { createMemoryHistory } from 'history';
  import { Provider } from 'react-redux';
  import { legacy_createStore as createStore, applyMiddleware } from 'redux';
  import thunk from 'redux-thunk';
  import reducer from '../redux/reducers';
  
  export const renderWithRouterAndRedux = (component, initialState, route = '/') => {
    const store = createStore(reducer, initialState, applyMiddleware(thunk));
    const history = createMemoryHistory({ initialEntries: [route] });
  
    return {
      ...render(
        <Provider store={ store }>
          <Router history={ history }>
            {component}
          </Router>
        </Provider>,
      ),
      history,
      store,
    };
  };
  
  export default renderWithRouterAndRedux;
```
## Desenvolvido por mim

<h4>Arqivos de minha autoria</h4>

<ol>
  <li>Feedback.js</li>
  <li>Ranking.js</li>
  <li>Settings.js</li>
</ol>

<h4>Dentro do arquivo Game.js criei a lógica onde é renderizado um contador</h4>

```js
  updateState =(click) => {
    const { timer, interval } = this.state;
    if (timer > 0 && click === undefined) {
      return this.setState((prevState) => ({
        timer: prevState.timer - 1,
      }));
    }
    clearInterval(interval);
    this.setState({
      buttonDisable: true,
    });
  }

  resetState = () => {
    this.setState({
      timer: 30,
    });
    this.setTimeOut();
  }

  setTimeOut = () => {
    const TIMER = 1000;
    const interval = setInterval(() => {
      this.setState({ interval });
      this.updateState();
    }, TIMER);
  }
```

<h4>Arqivos de testes de minha autoria</h4>

<ol>
  <li>Feedback.test.js</li>
</ol>
