import React from 'react';
import PropTypes from 'prop-types';

export default function CurvedArrow(props) {
  const { className, ...restProps } = props;

  return (
    <svg
      className={className}
      {...restProps}
      viewBox="0 0 113 43"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          d="M78.1244711,42.4999096 C78.2062586,42.5922489 78.4031408,42.5334433 78.5434008,42.5504532 C78.5748575,42.4085422 78.4893692,42.4202062 78.5049126,42.300165 C78.3657628,42.2219196 78.0830222,42.1966478 78.1244711,42.4999096 M78.7332515,42.2501074 C78.7206688,42.4649178 78.8724013,42.3857004 78.9627006,42.3497367 C78.9527085,42.164572 78.8261414,42.2097697 78.7332515,42.2501074 M107.517646,34.3001763 C107.425866,34.3205882 107.434378,34.208323 107.327055,34.2496327 C107.312622,34.4051516 107.510614,34.4532652 107.517646,34.3001763 M104.509642,32.250243 C104.570335,32.3372364 104.680988,32.3586202 104.814217,32.3498723 C104.861957,32.1588757 104.525555,32.0359185 104.509642,32.250243 M81.5510349,19.5997536 C81.4918222,19.3611293 81.3027117,19.2935758 81.0554988,19.3003798 C81.0699319,19.5968376 81.3515622,19.7013269 81.5510349,19.5997536 M76.8676819,17.5998779 C76.8650914,17.7704627 77.0090522,17.7481069 77.1345091,17.7500509 C77.1522729,17.5595402 76.9132017,17.5556523 76.8676819,17.5998779 M75.6112629,17.0001582 C75.8632868,17.2368385 76.3784372,17.3918714 76.7155794,17.3500757 C76.433579,17.176575 75.8899325,16.8490133 75.6112629,17.0001582 M91.7933484,13.1500938 C92.403239,13.400382 92.9372634,13.9121364 93.5441934,14.099731 C93.5530753,13.9043604 93.4439019,13.4324578 93.2403583,13.3503244 C92.9949957,12.5372522 92.5146329,11.9210086 92.1349316,11.2498474 C91.7489389,10.5660503 91.4969149,9.7583241 91.0313552,9.14985646 C90.838914,8.57006261 90.5372994,8.13217975 90.3452283,7.54995592 C90.3681732,7.33708945 90.3189526,7.21996428 90.3082203,7.0498655 C89.9681175,6.67953616 89.797511,6.0871064 89.6609517,5.45045096 C89.9318497,5.39407536 89.9325899,5.48495671 90.1938659,5.5000226 C90.2549289,5.39990732 90.0598972,5.21085468 90.0413932,5.04998983 C89.8741174,5.06165374 89.6616919,5.15982504 89.5843453,4.94987455 C89.7064715,4.69181039 89.8359992,4.74964398 90.003275,4.55038541 C89.970338,3.8106987 89.6417076,3.45883723 89.5088492,2.85036958 C89.6953691,2.22975203 89.4873846,1.79575714 89.5843453,1.30052668 C90.0103065,1.0614164 90.031031,1.59795655 90.3452283,1.65044418 C90.4340473,1.53186103 90.3600314,1.20138339 90.3840866,1.00018084 C90.4751261,1.08134225 90.717528,1.2990687 90.7645281,1.00018084 C90.8936857,0.980740975 90.8244809,1.22179525 90.993237,1.15035376 C91.1223947,1.06190239 90.9921268,0.894233595 91.0313552,0.650263342 C91.2578437,0.586111802 91.2075129,0.885971654 91.3744187,0.900065553 C91.5576079,0.906869504 91.5072771,0.609439635 91.6405057,0.550148059 C91.8958604,0.498632428 92.0120652,0.628393499 92.1349316,0.750378625 C92.2207899,0.645889374 92.262979,0.484538529 92.3262625,0.35040349 C92.4831761,0.394143177 92.6382393,0.440312846 92.7825702,0.500090418 C93.1674527,0.362553403 93.2892088,0.413583038 93.6962959,0.250288207 C93.775863,0.237166301 93.7062881,0.0306177807 93.7729023,0 C94.0937611,0.142882977 94.3109976,0.21918443 94.5345254,0.550148059 C94.6881083,0.344571532 94.8938724,0.517586293 94.9149669,0.150172924 C95.1988177,0.310551776 95.2643217,0.757182576 95.6384719,0.800436267 C95.7613382,0.84466195 95.6925034,0.637141436 95.7528264,0.600205701 C96.2287483,1.22957119 96.5607094,1.98529578 96.8948909,2.7502543 C97.3608207,3.81653066 98.0369555,4.79629965 98.608728,5.8499401 C99.2478549,7.02945365 99.9095566,8.15210561 100.587912,9.1999141 C100.572739,9.32044124 100.657487,9.30926332 100.62603,9.45020231 C101.257385,10.2039829 101.723685,11.17549 102.225142,12.1003413 C104.558862,15.5358507 106.897763,18.9640702 109.306979,22.3004363 C109.577877,22.344176 109.742192,22.5278826 109.954248,22.6498678 C111.289864,24.0296119 112.336078,25.5891747 113,27.6502859 C112.639913,28.2743055 113.241292,29.1209114 112.772031,29.599618 C112.81422,29.8936459 112.969283,30.0404168 113,30.3499966 C112.946709,30.433102 112.648795,30.4520559 112.809779,30.6498565 C112.745015,30.715952 112.600314,30.4603178 112.467086,30.4501119 C112.356062,30.6318746 112.693944,30.6508285 112.618818,30.9502023 C112.604755,31.0974593 112.453393,31.0648975 112.39122,31.1499469 C112.285747,31.5110423 112.588472,31.7355727 112.428598,31.8502679 C111.840172,31.9435792 111.716565,32.3474423 111.401258,32.5000452 C111.429384,32.7367255 111.358328,32.8441307 111.362399,33.0501933 C111.167738,33.1036529 111.17736,33.1498226 110.982328,33.1498226 C110.883517,33.6202672 110.3865,33.5677796 109.991626,33.650399 C109.947956,33.8025159 110.239949,34.1757612 110.182957,34.349748 C109.866539,34.346832 109.792153,34.1203576 109.649672,33.8000859 C109.40616,33.7417663 109.303278,33.791338 109.040152,33.8000859 C108.919506,33.8438256 108.910994,34.0008025 108.964286,34.1495174 C108.794789,34.1888831 108.735947,34.0834219 108.583474,34.1004317 C108.480592,34.5596985 107.973584,34.2875404 107.669748,34.3998056 C107.63015,34.4979769 107.593142,34.5995502 107.555764,34.7001515 C106.97844,34.7759669 106.269739,35.2187097 105.841927,34.899896 C104.371972,34.9562716 103.205482,35.037919 101.844331,35.0000113 C101.227409,35.2396076 100.386589,35.18469 99.7889107,35.4500441 C99.0509727,35.1443523 98.1309557,35.6901264 97.3515687,35.8495332 C97.1025054,35.9010488 96.8408594,35.8616831 96.5903157,35.9000769 C95.4449204,36.0760076 94.2280998,36.4575149 93.1633818,36.8001424 C90.2952676,37.7215918 87.4556494,38.8340378 84.8254962,39.9994575 L84.4831729,39.9994575 C82.3892644,41.1629332 80.1580566,42.0109971 78.0101166,43 C77.9827307,42.8473971 78.0497151,42.8172653 78.0489749,42.7001401 C77.6241239,42.4211781 77.1430209,42.8007414 76.7914456,42.4493659 C76.9646427,42.1427021 76.4132246,42.0095391 76.639343,41.599844 C76.4620751,41.4827189 76.2944292,41.3529578 76.0305627,41.3500418 C76.0968068,41.0876037 76.3658545,41.0905197 76.4494924,40.8499514 C76.3599332,40.6069531 76.1338148,40.8509234 75.9924445,40.8499514 C76.3244056,40.620075 76.5564453,40.2575216 76.8676819,39.9994575 C76.5520043,39.7579172 76.1919172,40.351319 75.7637355,40.1501164 C75.9350822,39.791451 76.349571,39.7535433 76.4872405,39.3501661 C76.4998231,39.1664595 76.3488308,39.1985352 76.2585315,39.1494496 C76.2933189,39.0614842 76.3506812,39.0041366 76.373256,38.9001334 C76.218933,38.7606524 76.0327831,38.9730328 75.9165782,38.8000181 C75.7419008,38.7980741 75.9720901,38.6585931 75.9165782,38.5001582 C75.8377514,38.385949 75.7174756,38.3271435 75.5357667,38.3499853 C75.3351837,38.0972671 75.5365068,37.9130744 75.2689395,37.7502656 C75.4887666,37.4056941 75.7481922,37.1126382 75.9924445,36.8001424 C75.9125074,36.4837587 75.5731447,36.7568887 75.4210421,36.8001424 C75.2330419,36.6217817 75.1431126,36.7471688 74.888128,36.6995411 C75.2163883,36.3642035 75.4573099,35.9136848 75.6871291,35.4500441 C75.546499,35.181774 75.2863333,35.4874658 75.0787188,35.4500441 C75.2389631,35.1443523 75.4284437,34.8755962 75.6497511,34.6505798 C75.6667747,34.4279934 75.3951366,34.5839983 75.4210421,34.349748 C75.5431683,33.9405389 76.0775627,33.648941 76.410634,33.3500531 C76.5046342,33.1712064 76.5453429,33.083727 76.5634768,32.9005063 C77.4990371,32.244411 78.2776839,31.3841972 79.3042837,30.850087 C79.3564649,30.8010014 79.3808902,30.716924 79.4186382,30.6498565 C81.3175149,29.7269491 82.9599266,28.4662741 85.1304415,27.9000882 C87.234342,27.0977079 89.7852984,26.8804675 91.9831991,26.2000723 C91.8407185,25.7155338 91.4395526,25.8365469 91.3359304,25.5002373 C91.0580009,25.5308551 90.9129298,25.12359 90.7271501,25.1998915 C90.6823705,25.1916296 90.6945831,25.1090101 90.6886618,25.0502046 C90.5217561,25.0336807 90.3363464,24.9262755 90.1557477,24.8004024 C89.5884162,24.714381 89.3856128,24.1671489 89.013313,24.2497683 C88.7216906,24.0432198 67.0768651,5.03346595 0,9.20526006 C32.1835443,-0.716666667 71.7028558,4.91196682 91.7933484,13.1500938 Z"
          id="path-1"
        />
        <filter
          x="-9.3%"
          y="-15.1%"
          width="115.0%"
          height="139.5%"
          filterUnits="objectBoundingBox"
          id="filter-2"
        >
          <feMorphology
            radius="0.5"
            operator="erode"
            in="SourceAlpha"
            result="shadowSpreadOuter1"
          />
          <feOffset
            dx="-2"
            dy="2"
            in="shadowSpreadOuter1"
            result="shadowOffsetOuter1"
          />
          <feGaussianBlur
            stdDeviation="3"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          />
          <feColorMatrix
            values="0 0 0 0 0.0196078431   0 0 0 0 0.117647059   0 0 0 0 0.164705882  0 0 0 0.31994452 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
      </defs>
      <g
        id="icon/arrow"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Fill-1"
          transform="translate(56.500000, 21.500000) scale(-1, 1) translate(-56.500000, -21.500000) "
        >
          <use
            fill="black"
            fillOpacity="1"
            filter="url(#filter-2)"
            href="#path-1"
          />
          <use fill="#FFFFFF" fillRule="evenodd" href="#path-1" />
        </g>
      </g>
    </svg>
  );
}

CurvedArrow.propTypes = {
  className: PropTypes.string,
};
