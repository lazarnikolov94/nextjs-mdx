import React, { Component } from 'react';
import { render } from 'react-dom';
import MDX from './MDX';
import './style.css';

const App = () => (<MDX />);

render(<App />, document.getElementById('root'));
