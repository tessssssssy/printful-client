import React from "react";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      painting: false,
      tool: "draw",
      fillColor: "pink",
    };
  }

  setContext = () => {
    this.canvas = this.canvasRef.current;
    this.context = this.canvas.getContext("2d");
    this.context.fillStyle = "pink";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  };

  componentDidMount() {
    this.setContext();
  }

  startPosition = (e) => {
    this.setState({ painting: true });
    this.setContext();
    this.getPoint(e);
    // this.draw(e);
  };

  finishedPosition = () => {
    // this.context.save();
    this.setContext();
    this.setState({ painting: false });
    this.context.beginPath();
  };

  draw = (e) => {
    this.setContext();
    console.log(this.state.tool);

    if (this.state.painting && this.state.tool === "draw") {
      this.context.lineWidth = 10;
      this.context.lineCap = "round";
      this.context.lineTo(e.clientX, e.clientY);
      this.context.stroke();
    //   this.context.beginPath();
      this.context.moveTo(e.clientX, e.clientY);
    }
  };

  getDrawTool = () => {
    this.setState({ tool: "draw" });
  };

  getFillTool = () => {
    this.setState({ tool: "fill" });
    console.log(this.state.tool);
  };

  getPoint = (e) => {
    const imgData = this.context.getImageData(e.clientX, e.clientY, 50, 50);
    for (let i = 0; i < imgData.data.length; i++) {
        imgData.data[i] = 255;
    }
    console.log(imgData.data);
  };

  fillColor = (e) => {
    const startColor = this.getPoint(e);
    // 255, 192, 203, 255
    startColor.data[0] = 255;
    startColor.data[1] = 192;
    startColor.data[2] = 203;
    startColor.data[3] = 255;
  };

  render() {
    return (
      <div className="canvas">
        <canvas
          onMouseDown={this.startPosition}
          onMouseUp={this.finishedPosition}
          onMouseMove={this.draw}
          ref={this.canvasRef}
          width={800}
          height={500}
        ></canvas>
        <div className="button-container" style={{ width: "100px" }}>
          <button onClick={this.getDrawTool}>Draw</button>
          <button onClick={this.getFillTool}>Fill</button>
        </div>
      </div>
    );
  }
}

export default Canvas;