// Import 
import { html } from 'lit-html';
import box from './matrixBox';

const boxArray = [
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 9},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0},
    {id: 0}
 ];

// Template
const boxes = btn =>
html`
    ${boxArray.map((boxItem) => html`${box(boxItem)}`)}
`;

export default boxes;
