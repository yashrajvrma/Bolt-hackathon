export default function Navbar() {
  return (
    <div className="Navbar flex flex-row justify-between py-10 px-12 w-full">
      {/* logo */}
      <div className="text-2xl font-bold">
        <svg
          // width="16"
          height="48"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="16" height="16" rx="4" fill="black" />
          <g filter="url(#filter0_i_2119_154)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.64368 11.7731C7.91976 11.7731 7.20901 11.5147 6.80099 10.9591L6.65707 11.6143L4 13L4.28684 11.6143L6.22186 3H8.59103L7.9066 6.03634C8.45941 5.44199 8.97273 5.22234 9.63083 5.22234C11.0523 5.22234 12 6.1397 12 7.81938C12 9.55074 10.9076 11.7731 8.64368 11.7731ZM9.55186 8.31036C9.55186 9.11144 8.97273 9.71871 8.22249 9.71871C7.8013 9.71871 7.4196 9.56366 7.16952 9.29233L7.53806 7.70309C7.81447 7.43176 8.13036 7.27671 8.49889 7.27671C9.06486 7.27671 9.55186 7.69017 9.55186 8.31036Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_2119_154"
              x="4"
              y="3"
              width="8"
              height="10"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="0.0192413" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.95 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_2119_154"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="socials flex flex-row gap-x-3 justify-center">
        {/* Twitter svg */}
        <div className="hover:cursor-pointer w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 462.799"
          >
            <path
              fill="#fff"
              fillRule="nonzero"
              d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
            />
          </svg>
        </div>
        {/* linkedin svg */}
        <div className="hover:cursor-pointer w-5.5">
          <svg
            // width="1em"
            // height="1em"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 529.6 529.6"
          >
            <path
              fill="#fff"
              d="M451.2 451.2h-78.5V328.3c0-29.3-.5-67-40.8-67s-47.1 31.9-47.1 64.9v125h-78.5V198.5h75.3V233h1.1c15.4-26.3 43.9-41.9 74.3-40.8 79.5 0 94.2 52.3 94.2 120.4v138.6ZM117.8 164c-25.1 0-45.5-20.4-45.5-45.5S92.7 73 117.8 73s45.5 20.4 45.5 45.5-20.4 45.5-45.5 45.5m39.3 287.2H78.5V198.5h78.6v252.7ZM490.4 0H39.1C17.8-.2.3 16.9 0 38.2v453.2c.3 21.3 17.7 38.4 39.1 38.2h451.3c21.4.3 38.9-16.8 39.2-38.2V38.2C529.3 16.8 511.7-.3 490.4 0"
            />
          </svg>
        </div>
        {/* Discord svg */}
        <div className="hover:cursor-pointer w-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 388.049"
          >
            <path
              fillRule="nonzero"
              fill="#fff"
              d="M433.713 32.491A424.231 424.231 0 00328.061.005c-4.953 8.873-9.488 18.156-13.492 27.509a393.937 393.937 0 00-58.629-4.408c-19.594 0-39.284 1.489-58.637 4.37-3.952-9.33-8.543-18.581-13.525-27.476-36.435 6.212-72.045 17.196-105.676 32.555-66.867 98.92-84.988 195.368-75.928 290.446a425.967 425.967 0 00129.563 65.03c10.447-14.103 19.806-29.116 27.752-44.74a273.827 273.827 0 01-43.716-20.862c3.665-2.658 7.249-5.396 10.712-8.055 40.496 19.019 84.745 28.94 129.514 28.94 44.77 0 89.019-9.921 129.517-28.943 3.504 2.86 7.088 5.598 10.712 8.055a275.576 275.576 0 01-43.796 20.918 311.49 311.49 0 0027.752 44.705 424.235 424.235 0 00129.65-65.019l-.011.011c10.632-110.26-18.162-205.822-76.11-290.55zM170.948 264.529c-25.249 0-46.11-22.914-46.11-51.104 0-28.189 20.135-51.304 46.029-51.304 25.895 0 46.592 23.115 46.15 51.304-.443 28.19-20.336 51.104-46.069 51.104zm170.102 0c-25.29 0-46.069-22.914-46.069-51.104 0-28.189 20.135-51.304 46.069-51.304s46.472 23.115 46.029 51.304c-.443 28.19-20.296 51.104-46.029 51.104z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
