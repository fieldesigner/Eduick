import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import {App} from './App';


createServer({
  routes() {
    this.namespace = 'api' // caminho base da 'api'

    // quando buscar na rota /courses retorna o array
    this.get('/courses', () => {
      return [
        {          
          title: 'Tiny Title One line',
          votes: 1,
          lessons: 10,
          image: './temp.png'
        },
        {
            title: 'Big Title Tree Lines Master English: Improve Your Speaking improve Your Speaking',
            votes: 2,
            lessons: 10,
            image: './temp.png'
        },
        {
            title: 'Master English: Improve Your Speaking',
            votes: 3,
            lessons: 10,
            image: './temp.png'
        },
        {
            title: 'Master English: Improve Your Speaking',
            votes: 4,
            lessons: 10,
            image: './temp.png'
        },
        {
            title: 'Master English: Improve Your Speaking',
            votes: 5,
            lessons: 10,
            image: './temp.png'
        },
        {
            title: 'Master English: Improve Your Speaking',
            votes: 1,
            lessons: 10,
            image: './temp.png'
        }
      ]
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);