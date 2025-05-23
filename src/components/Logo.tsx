import clsx from "clsx";

export const Logo = ({
  fill = "#6366F1",
  className,
}: {
  fill?: string;
  className?: string;
}) => {
  return (
    <svg
      className={clsx(className, "group-hover:animate-bounce")}
      width="77"
      height="76"
      viewBox="0 0 77 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Logo">
        <g id="phone">
          <rect
            id="phone-bg"
            y="32"
            width="75"
            height="44"
            rx="7"
            fill={fill}
          />
          <rect
            id="phone-screen"
            x="12"
            y="37"
            width="57"
            height="34"
            rx="7"
            fill="white"
          />
          <path
            id="phone-button"
            d="M3 52.5C3 51.1193 4.11929 50 5.5 50V50C6.88071 50 8 51.1193 8 52.5V55.6818C8 57.0625 6.88071 58.1818 5.5 58.1818V58.1818C4.11929 58.1818 3 57.0625 3 55.6818V52.5Z"
            fill="white"
          />
        </g>
        <g id="cloud1" className="animate-pulse">
          <circle
            id="Ellipse 1"
            cx="62.2727"
            cy="4.72727"
            r="3.27273"
            fill="#808080"
          />
          <circle
            id="Ellipse 2"
            cx="66.2727"
            cy="2.18182"
            r="2.18182"
            fill="#808080"
          />
          <circle
            id="Ellipse 3"
            cx="69.9091"
            cy="3.63636"
            r="2.18182"
            fill="#808080"
          />
          <circle
            id="Ellipse 4"
            cx="73.5454"
            cy="5.09091"
            r="2.90909"
            fill="#808080"
          />
          <rect
            id="Rectangle 1"
            x="62.6364"
            y="3.63637"
            width="10.9091"
            height="4.36364"
            fill="#808080"
          />
        </g>
        <g id="cloud1_2" className="animate-pulse">
          <circle
            id="Ellipse 1_2"
            r="2.14773"
            transform="matrix(-1 0 0 1 33.3068 17.1023)"
            fill="#808080"
          />
          <circle
            id="Ellipse 2_2"
            r="1.43182"
            transform="matrix(-1 0 0 1 30.6818 15.4318)"
            fill="#808080"
          />
          <circle
            id="Ellipse 3_2"
            r="1.43182"
            transform="matrix(-1 0 0 1 28.2954 16.3864)"
            fill="#808080"
          />
          <circle
            id="Ellipse 4_2"
            r="1.90909"
            transform="matrix(-1 0 0 1 25.9091 17.3409)"
            fill="#808080"
          />
          <rect
            id="Rectangle 1_2"
            width="7.15909"
            height="2.86364"
            transform="matrix(-1 0 0 1 33.0682 16.3864)"
            fill="#808080"
          />
        </g>
        <g id="cog-l" className="svg-fix-center animate-spin-ccw">
          <circle id="Ellipse 5" cx="30.1699" cy="55" r="4" fill="#808080" />
          <circle id="Ellipse 7" cx="30.1699" cy="55" r="2" fill="white" />
          <path
            id="Union"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M30.1699 49H29.1699L28.6699 52H30.1699H31.6699L31.1699 49H30.1699Z"
            fill="#808080"
          />
          <path
            id="Union_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.4635 53.1459L24.1545 54.097L26.8532 55.4995L27.3167 54.0729L27.7802 52.6464L24.7725 52.1948L24.4635 53.1459Z"
            fill="#808080"
          />
          <path
            id="Union_3"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.6432 59.8541L27.4522 60.4419L29.62 58.3087L28.4065 57.4271L27.193 56.5454L25.8341 59.2663L26.6432 59.8541Z"
            fill="#808080"
          />
          <path
            id="Union_4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.6966 59.8541L34.5056 59.2663L33.1467 56.5454L31.9332 57.427L30.7197 58.3087L32.8876 60.4419L33.6966 59.8541Z"
            fill="#808080"
          />
          <path
            id="Union_5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35.8762 53.1459L35.5672 52.1948L32.5595 52.6464L33.023 54.0729L33.4866 55.4995L36.1852 54.0969L35.8762 53.1459Z"
            fill="#808080"
          />
        </g>
        <g id="cog-r" className="svg-fix-center animate-spin-ccw">
          {/* <g id="cog-r" className={styles["svg-spin-ccw"]}> */}
          <circle id="Ellipse 5_2" cx="48.3398" cy="50" r="4" fill="#808080" />
          <circle id="Ellipse 7_2" cx="48.3398" cy="50" r="2" fill="white" />
          <path
            id="Union_6"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.3398 44H47.3398L46.8398 47H48.3398H49.8398L49.3398 44H48.3398Z"
            fill="#808080"
          />
          <path
            id="Union_7"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42.6335 48.1459L42.3245 49.097L45.0232 50.4995L45.4867 49.0729L45.9502 47.6464L42.9425 47.1948L42.6335 48.1459Z"
            fill="#808080"
          />
          <path
            id="Union_8"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44.8131 54.8541L45.6222 55.4419L47.79 53.3087L46.5765 52.4271L45.363 51.5454L44.0041 54.2663L44.8131 54.8541Z"
            fill="#808080"
          />
          <path
            id="Union_9"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.8666 54.8541L52.6756 54.2663L51.3167 51.5454L50.1032 52.427L48.8897 53.3087L51.0575 55.4419L51.8666 54.8541Z"
            fill="#808080"
          />
          <path
            id="Union_10"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M54.0462 48.1459L53.7372 47.1948L50.7295 47.6464L51.193 49.0729L51.6566 50.4995L54.3552 49.0969L54.0462 48.1459Z"
            fill="#808080"
          />
        </g>
        <g id="cog-m" className="svg-fix-center animate-spin-cw">
          <circle id="Ellipse 5_3" cx="41.1699" cy="59" r="4" fill="#808080" />
          <circle id="Ellipse 7_3" cx="41.1699" cy="59" r="2" fill="white" />
          <path
            id="Union_11"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.1699 53H40.1699L39.6699 56H41.1699H42.6699L42.1699 53H41.1699Z"
            fill="#808080"
          />
          <path
            id="Union_12"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M35.4635 57.1459L35.1545 58.097L37.8532 59.4995L38.3167 58.0729L38.7802 56.6464L35.7725 56.1948L35.4635 57.1459Z"
            fill="#808080"
          />
          <path
            id="Union_13"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M37.6432 63.8541L38.4522 64.4419L40.62 62.3087L39.4065 61.4271L38.193 60.5454L36.8341 63.2663L37.6432 63.8541Z"
            fill="#808080"
          />
          <path
            id="Union_14"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44.6966 63.8541L45.5056 63.2663L44.1467 60.5454L42.9332 61.427L41.7197 62.3087L43.8876 64.4419L44.6966 63.8541Z"
            fill="#808080"
          />
          <path
            id="Union_15"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M46.8762 57.1459L46.5672 56.1948L43.5595 56.6464L44.023 58.0729L44.4866 59.4995L47.1852 58.0969L46.8762 57.1459Z"
            fill="#808080"
          />
        </g>
        <path id="Rectangle 4" d="M49 17H44L43 32H50L49 17Z" fill={fill} />
        <path
          id="Rectangle 6"
          d="M37.2857 21H33.7143L33 32H38L37.2857 21Z"
          fill={fill}
        />
        <path
          id="Rectangle 5"
          d="M63.5714 12H56.4286L55 33H65L63.5714 12Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};
