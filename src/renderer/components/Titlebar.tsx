/* eslint-disable import/no-duplicates */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import { app } from 'electron';
import '../App.css';
import { ipcRenderer } from 'electron';

const TitleBar = () => {
  return (
    <div className="title-bar">
      <span className="title">Welcome!</span>
      <div>
        <button
          onClick={() => window.nativeFunctions.minimize()}
          className="minimize"
        />
        <button className="maximize" />
        <button
          onClick={() => window.nativeFunctions.close()}
          className="close"
        />
      </div>
    </div>
  );
};

export default TitleBar;
