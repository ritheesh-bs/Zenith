export default function DotLoadingicon() {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="60" height="20" viewBox="0 0 60 20">
        {/* <!-- First dot with outer glow --> */}
        <g>
          <circle cx="10" cy="10" r="6" className="fill-white/30 dark:fill-black/30">
            <animate 
              attributeName="r"
              values="6;7;6"
              dur="1.5s"
              repeatCount="indefinite"
              begin="0s"
            />
          </circle>
          <circle cx="10" cy="10" r="4" className="dark:fill-black fill-white-100">
            <animate 
              attributeName="opacity"
              values="1;0.3;1"
              dur="1.5s"
              repeatCount="indefinite"
              begin="0s"
            />
            <animate 
              attributeName="r"
              values="4;5;4"
              dur="1.5s"
              repeatCount="indefinite"
              begin="0s"
            />
          </circle>
        </g>
        
        {/* <!-- Second dot with outer glow --> */}
        <g>
          <circle cx="30" cy="10" r="6" className="fill-white/30 dark:fill-black/30">
            <animate 
              attributeName="r"
              values="6;7;6"
              dur="1.5s"
              repeatCount="indefinite"
              begin="0.5s"
            />
          </circle>
          <circle cx="30" cy="10" r="4" className="dark:fill-black fill-white-100">
            <animate 
              attributeName="opacity"
              values="1;0.3;1"
              dur="1.5s"
              repeatCount="indefinite"
              begin="0.5s"
            />
            <animate 
              attributeName="r"
              values="4;5;4"
              dur="1.5s"
              repeatCount="indefinite"
              begin="0.5s"
            />
          </circle>
        </g>
        
        {/* <!-- Third dot with outer glow --> */}
        <g>
          <circle cx="50" cy="10" r="6" className="fill-white/30 dark:fill-black/30">
            <animate 
              attributeName="r"
              values="6;7;6"
              dur="1.5s"
              repeatCount="indefinite"
              begin="1s"
            />
          </circle>
          <circle cx="50" cy="10" r="4" className="dark:fill-black fill-white-100">
            <animate 
              attributeName="opacity"
              values="1;0.3;1"
              dur="1.5s"
              repeatCount="indefinite"
              begin="1s"
            />
            <animate 
              attributeName="r"
              values="4;5;4"
              dur="1.5s"
              repeatCount="indefinite"
              begin="1s"
            />
          </circle>
        </g>
      </svg>
      )
}