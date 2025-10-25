"use client";
import LinkButton from "./components/LinkButton";
import Txt from "./components/Txt";
export default function Home() {
  return (
    <div className="w-full h-screen p-4 font-cutive flex flex-col justify-between">
      <div className="w-full h-full flex flex-col justify-center items-center text-center">
        <Txt
          enter={{
            type: "randomized",
            options: { maxDelay: 1000 },
          }}
          hover={{
            type: "twinkle",
            options: {
              rate: 50,
              maxNum: 5,
              characterPool: "*^",
            },
          }}
          className="text-[9px]/2 sm:text-sm/3.5 sm:w-[580px] whitespace-pre-wrap"
        >{` _____                              _        _______        _   
|  __ \\                            (_)      |__   __|      | |  
| |  | |_   _ _ __   __ _ _ __ ___  _  ___     | | _____  _| |_ 
| |  | | | | | '_ \\ / _${"`"} | '_ ${"`"} _ \\| |/ __|    | |/ _ \\ \\/ / __|
| |__| | |_| | | | | (_| | | | | | | | (__     | |  __/>  <| |_ 
|_____/ \\__, |_| |_|\\__,_|_| |_| |_|_|\\___|    |_|\\___/_/\\_\\__| 
          __/ |                                                   
         |___/                                                    `}</Txt>

        <div className="w-1/2">
          <Txt
            enter={{ type: "randomized", options: { maxDelay: 1000 } }}
            className="text-base/3.5 py-4 w-full"
          >
            A collection of text/letter replacement based animations built with
            React and TypeScript and coveniently bundled into an npm package.
            The site includes documentation for the package as well as examples
            and code snippets for specific effects if there is just one you want
            to implement yourself.
          </Txt>
          <div className="w-full flex flex-row justify-around font-cutive">
            <LinkButton path={"documentation"}>
              <Txt
                enter={{ type: "randomized", options: { maxDelay: 1000 } }}
                className="text-xl/4 whitespace-pre-wrap"
              >
                {`+---------------+
| documentation |
+---------------+`}
              </Txt>
            </LinkButton>
            <LinkButton path={"gallery"}>
              <Txt
                enter={{ type: "randomized", options: { maxDelay: 1000 } }}
                className="text-xl/4 whitespace-pre-wrap"
              >
                {`+----------------+
| effect gallery |
+----------------+`}
              </Txt>
            </LinkButton>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center opacity-50">
        <a href="https://github.com/owennjpr">
          <svg
            width="24"
            height="24"
            viewBox="0 0 98 96"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
              fill="#fff"
            />
          </svg>
        </a>
        <Txt enter={{ type: "typed sweep", options: { rate: 50 } }}>
          Created by Owen Prendergast
        </Txt>
      </div>
    </div>
  );
}
