import React from "react";
import Canvas from './Canvas';
import Toolbar from './Toolbar';
import Swatches from './Swatches';
// import Paint from './paint/paint.class.js';
// import Tool from './paint/tool.class.js';

class CreateArtwork extends React.Component { 
  render() {
    return (
        <div className="create-artwork">
            <Toolbar/>
                <Canvas/>
            <Swatches/>
        </div>
    );
  }
}

export default CreateArtwork;
