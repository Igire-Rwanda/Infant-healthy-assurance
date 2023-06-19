import React, { useState } from 'react';
import { StyleSheet,setText, View, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Appointment from '../src/Components/Appointment.jsx'
import "./App.css";

import Home from "./Pages/index.jsx"
function App() {
  return (
    <div className="App">
    
      <Home/>
    </div>
  );
}
export default App;
