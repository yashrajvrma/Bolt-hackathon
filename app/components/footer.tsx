export default function Footer() {
  return (
    <div className="flex flex-col items-center w-full font-sans sm:text-lg text-sm">
      <svg width="100%" height="2">
        <defs>
          <linearGradient id="fadeLine" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="gray" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <rect width="100%" height="2" fill="url(#fadeLine)" />
      </svg>

      <div className="flex flex-col sm:flex-row justify-between items-center sm:max-w-6xl max-w-2xl w-full sm:px-20 px-10 py-10">
        {/* Bolt SVG */}
        <div className="hover:cursor-pointer mb-4 sm:mb-0">
          <a href="https://bolt.new/" target="blank">
            <svg
              className="w-12 sm:w-14 h-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 51 21.9"
            >
              <path
                fill="#e1dfdf"
                d="M24.1 19.3c-4.7 0-7-2.7-7-6.1s3.2-7.7 7.9-7.7 7 2.7 7 6.1-3.2 7.7-7.9 7.7Zm.2-4.3c1.6 0 2.7-1.5 2.7-3.1s-.8-2-2.2-2-2.7 1.5-2.7 3.1.8 2 2.2 2ZM37 19h-4.9l4-18.2H41l-4 18.1Z"
              />
              <path
                fill="#e1dfdf"
                d="M9.6 19.3c-1.5 0-3-.5-3.8-1.7L5.5 19 0 21.9.6 19 4.6.8h4.9L8.1 7.2c1.1-1.2 2.2-1.7 3.6-1.7 3 0 4.9 1.9 4.9 5.5s-2.3 8.3-7 8.3Zm1.9-7.3c0 1.7-1.2 3-2.8 3s-1.7-.3-2.2-.9l.8-3.3c.6-.6 1.2-.9 2-.9 1.2 0 2.2.9 2.2 2.2Z"
                style={{ fillRule: "evenodd" }}
              />
              <path
                fill="#e1dfdf"
                d="M46.1 19.3c-2.8 0-4.9-1-4.9-3.3s0-.7.1-1l1.1-4.9h-2.2l1-4.2h2.2l.8-3.6L49.7 0l-.6 2.3-.8 3.6H51l-1 4.2h-2.7l-.7 3.2v.6c0 .6.4 1.1 1.2 1.1s.6 0 .7-.1v3.9c-.5.4-1.4.5-2.3.5Z"
              />
            </svg>
          </a>
        </div>

        {/* Terms, Privacy, Help Center Links */}
        <div className="flex flex-row gap-x-6 text-slate-400 mb-4 sm:mb-0">
          <div className="hover:text-slate-50">
            <a
              href="https://stackblitz.com/terms-of-service?__hstc=69929231.161fd383b6d21f3af972f83ceafdb2fd.1741158258808.1742371925148.1742384364308.4&__hssc=69929231.1.1742384364308&__hsfp=2731944031"
              target="blank"
            >
              Terms
            </a>
          </div>
          <div className="hover:text-slate-50">
            <a
              href="https://stackblitz.com/privacy-policy?__hstc=69929231.161fd383b6d21f3af972f83ceafdb2fd.1741158258808.1742371925148.1742384364308.4&__hssc=69929231.1.1742384364308&__hsfp=2731944031"
              target="blank"
            >
              Privacy
            </a>
          </div>
          <div className="hover:text-slate-50">
            <a href="https://support.bolt.new/home" target="blank">
              Help Center
            </a>
          </div>
        </div>

        {/* Socials */}
        <div className="socials flex flex-row sm:gap-x-6 gap-x-3 justify-center">
          {/* Twitter SVG */}
          <div className="hover:cursor-pointer sm:w-6 w-4 group">
            <a href="https://x.com/boltdotnew" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 512 462.799"
                className="w-full h-full"
              >
                <path
                  fill="currentColor"
                  className="fill-gray-500 group-hover:fill-slate-50 transition-colors duration-300"
                  d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"
                />
              </svg>
            </a>
          </div>

          {/* LinkedIn SVG */}
          <div className="hover:cursor-pointer w-4 sm:w-6 group">
            <a
              href="https://www.linkedin.com/company/stackblitz/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 529.6 529.6"
                className="w-full h-full"
              >
                <path
                  fill="currentColor"
                  className="fill-gray-500 group-hover:fill-slate-50 transition-colors duration-300"
                  d="M451.2 451.2h-78.5V328.3c0-29.3-.5-67-40.8-67s-47.1 31.9-47.1 64.9v125h-78.5V198.5h75.3V233h1.1c15.4-26.3 43.9-41.9 74.3-40.8 79.5 0 94.2 52.3 94.2 120.4v138.6ZM117.8 164c-25.1 0-45.5-20.4-45.5-45.5S92.7 73 117.8 73s45.5 20.4 45.5 45.5-20.4 45.5-45.5 45.5m39.3 287.2H78.5V198.5h78.6v252.7ZM490.4 0H39.1C17.8-.2.3 16.9 0 38.2v453.2c.3 21.3 17.7 38.4 39.1 38.2h451.3c21.4.3 38.9-16.8 39.2-38.2V38.2C529.3 16.8 511.7-.3 490.4 0"
                />
              </svg>
            </a>
          </div>

          {/* Discord SVG */}
          <div className="hover:cursor-pointer w-5 sm:w-7 group">
            <a href="https://discord.com/invite/stackblitz" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 512 388.049"
                className="w-full h-full"
              >
                <path
                  fill="currentColor"
                  className="fill-gray-500 group-hover:fill-slate-50 transition-colors duration-300"
                  d="M433.713 32.491A424.231 424.231 0 00328.061.005c-4.953 8.873-9.488 18.156-13.492 27.509a393.937 393.937 0 00-58.629-4.408c-19.594 0-39.284 1.489-58.637 4.37-3.952-9.33-8.543-18.581-13.525-27.476-36.435 6.212-72.045 17.196-105.676 32.555-66.867 98.92-84.988 195.368-75.928 290.446a425.967 425.967 0 00129.563 65.03c10.447-14.103 19.806-29.116 27.752-44.74a273.827 273.827 0 01-43.716-20.862c3.665-2.658 7.249-5.396 10.712-8.055 40.496 19.019 84.745 28.94 129.514 28.94 44.77 0 89.019-9.921 129.517-28.943 3.504 2.86 7.088 5.598 10.712 8.055a275.576 275.576 0 01-43.796 20.918 311.49 311.49 0 0027.752 44.705 424.235 424.235 0 00129.65-65.019l-.011.011c10.632-110.26-18.162-205.822-76.11-290.55zM170.948 264.529c-25.249 0-46.11-22.914-46.11-51.104 0-28.189 20.135-51.304 46.029-51.304 25.895 0 46.592 23.115 46.15 51.304-.443 28.19-20.336 51.104-46.069 51.104zm170.102 0c-25.29 0-46.069-22.914-46.069-51.104 0-28.189 20.135-51.304 46.069-51.304s46.472 23.115 46.029 51.304c-.443 28.19-20.296 51.104-46.029 51.104z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
