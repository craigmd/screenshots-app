import React from 'react';

export function PopulationsChart() {
  return (
    <svg width="510" height="340">
      <g transform="translate(100,10)">
        <rect
          className="bar"
          x="7.843137254901961"
          width="70.58823529411764"
          y="246.01366742596812"
          height="53.98633257403188"
          fill="white"
        ></rect>
        <rect
          className="bar"
          x="86.27450980392156"
          width="70.58823529411764"
          y="0"
          height="300"
          fill="white"
        ></rect>
        <rect
          className="bar"
          x="164.70588235294116"
          width="70.58823529411764"
          y="300"
          height="0"
          fill="white"
        ></rect>
        <rect
          className="bar"
          x="243.13725490196074"
          width="70.58823529411764"
          y="296.127562642369"
          height="3.872437357630986"
          fill="white"
        ></rect>
        <rect
          className="bar"
          x="321.56862745098033"
          width="70.58823529411764"
          y="271.2984054669704"
          height="28.701594533029606"
          fill="white"
        ></rect>
        <g
          transform="translate(0,300)"
          fill="none"
          fontSize="10"
          fontFamily="sans-serif"
          textAnchor="middle"
        >
          <path className="domain" stroke="white" d="M0.5,6V0.5H400.5V6"></path>
          <g
            className="tick"
            opacity="1"
            transform="translate(43.13725490196078,0)"
          >
            <line stroke="white" y2="6"></line>
            <text fill="white" y="9" dy="0.71em">
              USA
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(121.56862745098039,0)"
          >
            <line stroke="white" y2="6"></line>
            <text fill="white" y="9" dy="0.71em">
              China
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(199.99999999999997,0)"
          >
            <line stroke="white" y2="6"></line>
            <text fill="white" y="9" dy="0.71em">
              Germany
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(278.43137254901956,0)"
          >
            <line stroke="white" y2="6"></line>
            <text fill="white" y="9" dy="0.71em">
              Mexico
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(356.86274509803917,0)"
          >
            <line stroke="white" y2="6"></line>
            <text fill="white" y="9" dy="0.71em">
              Brazil
            </text>
          </g>
        </g>
        <g fill="none" fontSize="10" fontFamily="sans-serif" textAnchor="end">
          <path
            className="domain"
            stroke="white"
            d="M-6,300.5H0.5V0.5H-6"
          ></path>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,296.627562642369)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              100,000,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,273.8485193621868)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              200,000,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,251.06947608200457)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              300,000,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,228.29043280182233)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              400,000,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,205.5113895216401)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              500,000,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,182.73234624145786)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              600,000,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,159.95330296127565)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              700,000,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,137.1742596810934)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              800,000,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,114.39521640091117)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              900,000,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,91.61617312072892)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              1,000,000,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,68.8371298405467)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              1,100,000,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,46.05808656036447)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              1,200,000,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,23.279043280182222)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              1,300,000,000
            </text>
          </g>
          <g className="tick" opacity="1" transform="translate(0,0.5)">
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              1,400,000,000
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}
