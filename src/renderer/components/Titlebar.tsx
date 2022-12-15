/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import { app } from 'electron';
import '../App.css';

const TitleBar = () => {
  return (
    <div className="title-bar">
      <span className="title">Sin titulo</span>
      <div>
        <button className="minimize" />
        <button className="maximize" />
        <button className="close" />
      </div>
    </div>
  );
};

export default TitleBar;
