import * as React from "react";

export const Step5 = () => (
  <svg
    width="100%"
    height="auto"
    viewBox="0 0 298 302"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ margin: "5px 0" }}
  >
    <g filter="url(#filter0_d_180_1864)">
      <rect x="1" y="1" width="296" height="296" rx="4" fill="#090A0B" />
      <rect
        x="26"
        y="26"
        width="246"
        height="246"
        fill="#6B8694"
        fillOpacity="0.12"
        stroke="#C0D0D8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="20 20"
      />
      <rect x="1" y="1" width="296" height="296" rx="4" stroke="#222B2F" />
    </g>
    <defs>
      <filter
        id="filter0_d_180_1864"
        x="0.5"
        y="0.5"
        width="297"
        height="301"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="4"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_180_1864"
        />
        <feOffset dy="8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0368 0 0 0 0 0.0410667 0 0 0 0 0.0432 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_180_1864" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_180_1864"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
