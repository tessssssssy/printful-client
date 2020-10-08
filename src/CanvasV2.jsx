import React from "react";
import Paint from "./paint/paint.class.js";
import Tool from "./paint/tool.class.js";
import "./CanvasV2.css";

class CanvasV2 extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    // let paint = new Paint("canvas");

    // // Set defaults
    // paint.activeTool = Tool.TOOL_CIRCLE;
    // paint.lineWidth = "1";
    // paint.brushSize = "4";
    // paint.selectedColor = "#000000";

    // // initialize paint
    // paint.init();

    this.state = {
      painting: false,
      tool: this.state.tool,
      fillColor: "pink",
    };
  }
  componentDidMount() {
    let paint = new Paint("canvas");

    // Set defaults
    paint.activeTool = this.state.tool;
    paint.lineWidth = "1";
    paint.brushSize = "4";
    paint.selectedColor = "#000000";

    // initialize paint
    paint.init();
  }

  changeTool = (tool) => {
      console.log(tool);
      this.setState({tool: tool}, () => {
        let paint = new Paint("canvas");
        paint.activeTool = this.state.tool
      }); 
  }

  render() {
    return (
      <>
        <div className="toolbox left">
          <div className="group commands">
            <div className="item" data-command="undo" title="Undo">
              <img src="#" alt="undo" />
            </div>
            <div className="item" data-command="download" title="Download">
              <img src="#" alt="download" />
            </div>
          </div>

          <div className="group shapes">
            <div className="item" data-tool="line" title="Line" onClick={() => this.changeTool(Tool.TOOL_LINE)}>
              <img src="#" alt="line" />
            </div>
            <div className="item" data-tool="rectangle" title="Rectangle">
              <img src="#" alt="rectangle" />
            </div>
            <div className="item active" data-tool="circle" title="Circle">
              <img src="#" alt="circle" />
            </div>
            <div className="item" data-tool="triangle" title="Triangle">
              <img src="#" alt="triangle" />
            </div>
          </div>

          <div className="group tools">
            <div className="item" data-tool="pencil" title="Pencil tool">
              <img src="#" alt="pencil" />
            </div>
            <div className="item" data-tool="brush" title="Brush tool">
              <img src="#" alt="brush" />
            </div>
            <div className="item" data-tool="paint-bucket" title="Paint Bucket">
              <img src="#" alt="paint bucket" />
            </div>
            <div className="item" data-tool="eraser" title="Eraser">
              <img src="#" alt="eraser" />
            </div>
          </div>

          <div
            className="group linewidths for-shapes"
            style={{ display: "block" }}
          >
            <div className="item active" data-line-width="1" title="1 pixel">
              <div
                className="linewidth"
                style={{ width: "1px", height: "1px" }}
              ></div>
            </div>
            <div className="item" data-line-width="2" title="2 pixels">
              <div
                className="linewidth"
                style={{ width: "2px", height: "2px" }}
              ></div>
            </div>
            <div className="item" data-line-width="3" title="3 pixels">
              <div
                className="linewidth"
                style={{ width: "3px", height: "3px" }}
              ></div>
            </div>
            <div className="item" data-line-width="4" title="4 pixels">
              <div
                className="linewidth"
                style={{ width: "4px", height: "4px" }}
              ></div>
            </div>
            <div className="item" data-line-width="5" title="5 pixels">
              <div
                className="linewidth"
                style={{ width: "5px", height: "5px" }}
              ></div>
            </div>
          </div>

          <div
            className="group linewidths for-brushes"
            style={{ display: "none" }}
          >
            <div className="item active" data-brush-width="4" title="4 pixels">
              <div
                className="linewidth"
                style={{ width: "1px", height: "1px" }}
              ></div>
            </div>
            <div className="item" data-brush-width="6" title="6 pixels">
              <div
                className="linewidth"
                style={{ width: "6px", height: "6px" }}
              ></div>
            </div>
            <div className="item" data-brush-width="8" title="8 pixels">
              <div
                className="linewidth"
                style={{ width: "8px", height: "8px" }}
              ></div>
            </div>
            <div className="item" data-brush-width="10" title="10 pixels">
              <div
                className="linewidth"
                style={{ width: "10px", height: "10px" }}
              ></div>
            </div>
            <div className="item" data-brush-width="12" title="12 pixels">
              <div
                className="linewidth"
                style={{ width: "12px", height: "12px" }}
              ></div>
            </div>
          </div>
        </div>

        <canvas
          ref={this.canvasRef}
          id="canvas"
          width="650px"
          height="480px"
        ></canvas>

        <div className="toolbox right">
          <div className="group swatches">
            <div className="item" data-color="#ffffff">
              <div
                className="swatch"
                style={{ backgroundColor: "#ffffff" }}
              ></div>
            </div>
            <div className="item active" data-color="#000000">
              <div
                className="swatch"
                style={{ backgroundColor: "#000000" }}
              ></div>
            </div>
            <div className="item" data-color="#ff0000">
              <div
                className="swatch"
                style={{ backgroundColor: "#ff0000" }}
              ></div>
            </div>
            <div className="item" data-color="#00ff00">
              <div
                className="swatch"
                style={{ backgroundColor: "#00ff00" }}
              ></div>
            </div>
            <div className="item" data-color="#0000ff">
              <div
                className="swatch"
                style={{ backgroundColor: "#0000ff" }}
              ></div>
            </div>
            <div className="item" data-color="#00ffff">
              <div
                className="swatch"
                style={{ backgroundColor: "#00ffff" }}
              ></div>
            </div>
            <div className="item" data-color="#ff00ff">
              <div
                className="swatch"
                style={{ backgroundColor: "#ff00ff" }}
              ></div>
            </div>
            <div className="item" data-color="#ffff00">
              <div
                className="swatch"
                style={{ backgroundColor: "#ffff00" }}
              ></div>
            </div>
            <div className="item" data-color="#c46f0f">
              <div
                className="swatch"
                style={{ backgroundColor: "#c46f0f" }}
              ></div>
            </div>
            <div className="item" data-color="#fd8f27">
              <div
                className="swatch"
                style={{ backgroundColor: "#fd8f27" }}
              ></div>
            </div>
            <div className="item" data-color="#0099ff">
              <div
                className="swatch"
                style={{ backgroundColor: "#0099ff" }}
              ></div>
            </div>
            <div className="item" data-color="#ff009d">
              <div
                className="swatch"
                style={{ backgroundColor: "#ff009d" }}
              ></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CanvasV2;
