import React from 'react';

class Swatches extends React.Component {
    render() {
        return (
        <div class="toolbox right">
            <div class="group colors">
                <div class="item" data-color="#ffffff">
                    <div class="swatch" style="background-color:#ffffff"></div>
                </div>
                <div class="item active" data-color="#000000">
                    <div class="swatch" style="background-color:#000000"></div>
                </div>
                <div class="item" data-color="#ff0000">
                    <div class="swatch" style="background-color:#ff0000"></div>
                </div>
                <div class="item" data-color="#00ff00">
                    <div class="swatch" style="background-color:#00ff00"></div>
                </div>
                <div class="item" data-color="#0000ff">
                    <div class="swatch" style="background-color:#0000ff"></div>
                </div>
                <div class="item" data-color="#00ffff">
                    <div class="swatch" style="background-color:#00ffff"></div>
                </div>
                <div class="item" data-color="#ff00ff">
                    <div class="swatch" style="background-color:#ff00ff"></div>
                </div>
                <div class="item" data-color="#ffff00">
                    <div class="swatch" style="background-color:#ffff00"></div>
                </div>
                <div class="item" data-color="#c46f0f">
                    <div class="swatch" style="background-color:#c46f0f"></div>
                </div>
                <div class="item" data-color="#fd8f27">
                    <div class="swatch" style="background-color:#fd8f27"></div>
                </div>
                <div class="item" data-color="#0099ff">
                    <div class="swatch" style="background-color:#0099ff"></div>
                </div>
                <div class="item" data-color="#ff009d">
                    <div class="swatch" style="background-color:#ff009d"></div>
                </div>
            </div>
        </div>
        )
    }
}

export default Swatches;