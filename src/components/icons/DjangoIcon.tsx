import React from "react";

const DjangoIcon = () => {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <rect width="30" height="30" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_440_637" transform="scale(0.0025)" />
        </pattern>
        <image
          id="image0_440_637"
          width="400"
          height="400"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default DjangoIcon;
