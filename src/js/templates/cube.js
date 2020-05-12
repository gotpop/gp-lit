// Import 
import { html } from 'lit-html';

// Template
const cube = 
html`
    <div class="scene">
    <div class="cube">
        <div class="cube__face cube__face--front">front</div>
        <div class="cube__face cube__face--back">back</div>
        <div class="cube__face cube__face--right">right</div>
        <div class="cube__face cube__face--left">left</div>
        <div class="cube__face cube__face--top">top</div>
        <div class="cube__face cube__face--bottom">bottom</div>
    </div>
    </div>
    <p class="radio-group">
    <label>
        <input type="radio" name="rotate-cube-side" value="front" checked /> front
    </label>
    <label>
        <input type="radio" name="rotate-cube-side" value="right" /> right
    </label>
    <label>
        <input type="radio" name="rotate-cube-side" value="back" /> back
    </label>
    <label>
        <input type="radio" name="rotate-cube-side" value="left" /> left
    </label>
    <label>
        <input type="radio" name="rotate-cube-side" value="top" /> top
    </label>
    <label>
        <input type="radio" name="rotate-cube-side" value="bottom" /> bottom
    </label>
    </p>
`;

export default cube;
