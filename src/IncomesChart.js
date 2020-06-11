import React from 'react';

export function IncomesChart() {
  return (
    <svg width="510" height="340">
      <g transform="translate(100,10)">
        <rect
          className="bar"
          x="7.843137254901961"
          width="70.58823529411764"
          y="0"
          height="300"
          fill="white"
        ></rect>
        <rect
          className="bar"
          x="86.27450980392156"
          width="70.58823529411764"
          y="300"
          height="0"
          fill="white"
        ></rect>
        <rect
          className="bar"
          x="164.70588235294116"
          width="70.58823529411764"
          y="34.24657534246577"
          height="265.75342465753425"
          fill="white"
        ></rect>
        <rect
          className="bar"
          x="243.13725490196074"
          width="70.58823529411764"
          y="291.7808219178082"
          height="8.219178082191775"
          fill="white"
        ></rect>
        <rect
          className="bar"
          x="321.56862745098033"
          width="70.58823529411764"
          y="295.20547945205476"
          height="4.79452054794524"
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
            transform="translate(0,295.02054794520546)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              10,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,260.7739726027397)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              15,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,226.52739726027397)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              20,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,192.2808219178082)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              25,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,158.03424657534248)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              30,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,123.7876712328767)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              35,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,89.54109589041097)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              40,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,55.294520547945204)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              45,000
            </text>
          </g>
          <g
            className="tick"
            opacity="1"
            transform="translate(0,21.04794520547947)"
          >
            <line stroke="white" x2="-6"></line>
            <text fill="white" x="-9" dy="0.32em">
              50,000
            </text>
          </g>
        </g>
      </g>
    </svg>
  );
}
