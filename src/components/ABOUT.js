import React from 'react'

const ABOUT = () => {
  return (
    <div className="bg-white text-black text-lg border-black border-t w-screen flex flex-col justify-center">
      <h1 className="text-4xl lg:text-6xl lg:ml-36 px-8 lg:px-0 py-8">My Skills</h1>   

      <div className="flex flex-wrap items-center justify-evenly lg:gap-20 lg:px-48 lg:py-20">

        <div className="iconskill">
          <svg height="100" viewBox="175.7 78 490.6 436.9" width="100" xmlns="http://www.w3.org/2000/svg"><g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"></path><circle cx="420.9" cy="296.5" r="45.7"></circle></g></svg>
        <p>React JS</p>
        </div>

        <div className="iconskill">
        <svg height="100" viewBox=".5 -.2 1023 1024.1" width="100" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"></path><path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"></path></svg>
        <p>Next JS</p>
        </div>

        <div className="iconskill">
        <svg height="100" preserveAspectRatio="xMidYMid" width="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 153.6"><linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%"><stop offset="0" stop-color="#2298bd"></stop><stop offset="1" stop-color="#0ed7b5"></stop></linearGradient><path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z" fill="url(#a)"></path></svg>  
        <p>Tailwind CSS</p>
        </div>

        <div className="iconskill">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"></path><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path></svg>
        <p>Javascript</p>
        </div>

        <div className="iconskill">
        <svg fill="none" height="100" width="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 141.53"><path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba"></path><path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7"></path><path d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z" fill="#fff"></path></svg>
        <p>CSS</p>
        </div>

        <div className="iconskill">
          <svg height="100" viewBox="175.7 78 490.6 436.9" width="100" xmlns="http://www.w3.org/2000/svg"><g fill="#61dafb"><path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"></path><circle cx="420.9" cy="296.5" r="45.7"></circle></g></svg>
        <p>React Native</p>
        </div>

        <div className="iconskill">
          <svg fill="none" height="100" width="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.010658198738520475 29.979048832700347 32.01961648081533"><path d="M.25 8.32l2.71 1.576 13.963-8.07L14.184.25z" fill="#fff"/><path clip-rule="evenodd" d="M14.059.034a.25.25 0 0 1 .25 0l2.739 1.576a.25.25 0 0 1 0 .434L3.086 10.113a.25.25 0 0 1-.251 0L.125 8.535a.25.25 0 0 1 0-.433L14.059.033zm.125.506L.75 8.32l2.212 1.286 13.46-7.779z" fill="#000" fill-rule="evenodd"/><path d="M.25 8.32v16.137l2.74 1.576-.03-16.137L.25 8.319z" fill="#fff"/><g fill="#000"><path clip-rule="evenodd" d="M.126 8.102a.25.25 0 0 1 .25 0l2.71 1.577a.25.25 0 0 1 .125.216l.029 16.138a.25.25 0 0 1-.376.218L.126 24.674A.25.25 0 0 1 0 24.457V8.32a.25.25 0 0 1 .126-.217zm.375.653v15.557L2.738 25.6 2.71 10.04z" fill-rule="evenodd"/><path d="M2.96 9.896l13.963-8.07v16.139L2.989 26.034 2.961 9.895z"/><path clip-rule="evenodd" d="M17.048 1.61a.25.25 0 0 1 .125.217v16.138a.25.25 0 0 1-.125.216l-13.933 8.07a.25.25 0 0 1-.376-.217L2.71 9.896a.25.25 0 0 1 .125-.217L16.797 1.61a.25.25 0 0 1 .25 0zM3.21 10.04l.03 15.56 13.433-7.78V2.26l-13.46 7.78z" fill-rule="evenodd"/></g><path d="M5.048 11.081l2.71 1.577 13.962-8.07-2.738-1.576-13.934 8.07z" fill="#fff"/><path clip-rule="evenodd" d="M18.856 2.796a.25.25 0 0 1 .25 0l2.74 1.576a.25.25 0 0 1 0 .434L7.884 12.875a.25.25 0 0 1-.252 0l-2.71-1.577a.25.25 0 0 1 0-.433l13.934-8.07zm.126.506l-13.435 7.78 2.212 1.286 13.46-7.779z" fill="#000" fill-rule="evenodd"/><path d="M5.048 11.081V27.22l2.739 1.576-.029-16.137-2.71-1.577z" fill="#fff"/><path clip-rule="evenodd" d="M4.923 10.864a.25.25 0 0 1 .251 0l2.71 1.577a.25.25 0 0 1 .125.216l.028 16.138a.25.25 0 0 1-.375.218l-2.739-1.577a.25.25 0 0 1-.125-.217V11.081a.25.25 0 0 1 .125-.217zm.376.653v15.557l2.236 1.288-.027-15.56-2.21-1.285z" fill="#000" fill-rule="evenodd"/><path d="M7.758 12.658l13.962-8.07v16.139L7.787 28.796z" fill="#000"/><path clip-rule="evenodd" d="M21.845 4.372a.25.25 0 0 1 .126.217v16.138a.25.25 0 0 1-.125.216l-13.934 8.07a.25.25 0 0 1-.376-.217l-.028-16.138a.25.25 0 0 1 .125-.217l13.962-8.069a.25.25 0 0 1 .25 0zM8.01 12.802l.027 15.56 13.434-7.78V5.022z" fill="#000" fill-rule="evenodd"/><path d="M7.763 15.358l5.082 16.392 2.899-.949-5.284-16.412z" fill="#fff"/><path clip-rule="evenodd" d="M10.57 14.165a.25.25 0 0 1 .129.148l5.283 16.411a.25.25 0 0 1-.16.315l-2.9.949a.25.25 0 0 1-.317-.164L7.524 15.432a.25.25 0 0 1 .155-.31l2.697-.968a.25.25 0 0 1 .195.01zm-2.496 1.348l4.935 15.92 2.42-.793L10.3 14.713l-2.227.8z" fill="#000" fill-rule="evenodd"/><path d="M21.718 7.9L26.8 24.292l2.899-.949-5.284-16.411z" fill="#fff"/><path clip-rule="evenodd" d="M24.526 6.707a.25.25 0 0 1 .128.148l5.283 16.412a.25.25 0 0 1-.16.314l-2.9.949a.25.25 0 0 1-.316-.164L21.479 7.974a.25.25 0 0 1 .155-.31l2.697-.968a.25.25 0 0 1 .195.011zm-2.497 1.348l4.935 15.92 2.42-.792-5.128-15.928z" fill="#000" fill-rule="evenodd"/><path d="M10.46 14.39l13.955-7.458L29.7 23.343l-13.955 7.458-5.284-16.412z" fill="#fff"/><path clip-rule="evenodd" d="M24.51 6.7a.25.25 0 0 1 .144.155l5.283 16.412a.25.25 0 0 1-.12.297l-13.955 7.458a.25.25 0 0 1-.357-.144l-5.283-16.412a.25.25 0 0 1 .12-.297L24.297 6.71a.25.25 0 0 1 .212-.012zm-13.747 7.812l5.127 15.927 13.506-7.218L24.27 7.294l-13.506 7.218z" fill="#000" fill-rule="evenodd"/><path d="M10.46 14.39l-2.697.968L21.718 7.9l2.697-.968-13.955 7.457z" fill="#fff"/><path clip-rule="evenodd" d="M24.644 6.83a.25.25 0 0 1-.11.323L10.577 14.61a.242.242 0 0 1-.033.015l-2.697.969a.25.25 0 0 1-.203-.457L21.6 7.679a.258.258 0 0 1 .034-.015l2.697-.968a.25.25 0 0 1 .313.134z" fill="#000" fill-rule="evenodd"/><path d="M18.395 13.053l-.941.481-.94.481-.762 11.392 1.85.827 1.41-9.114 7.375 4.623.592-2.073z" fill="#000"/><path clip-rule="evenodd" d="M18.282 12.83a.25.25 0 0 1 .266.025l8.584 6.616a.25.25 0 0 1 .087.267l-.59 2.074a.25.25 0 0 1-.375.144l-7.053-4.422-1.351 8.738a.25.25 0 0 1-.35.19l-1.85-.826a.25.25 0 0 1-.148-.245l.762-11.392a.25.25 0 0 1 .135-.207zm-1.528 1.344l-.74 11.076 1.39.621 1.36-8.79a.25.25 0 0 1 .38-.174l7.094 4.447.453-1.59-8.323-6.415z" fill="#000" fill-rule="evenodd"/></svg>  
        <p>Expo</p>
        </div>

        <div className="iconskill">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="74.634 0 362.733 512"><path d="M107.644 470.877L74.634 100.62h362.733l-33.046 370.199L255.778 512z"></path><path d="M256 480.522l120.03-33.276 28.24-316.352H256z"></path><g fill="#ebebeb"><path d="M256 268.217h-60.09l-4.15-46.501H256v-45.411H142.132l1.087 12.183 11.161 125.139H256zM256 386.153l-.198.053-50.575-13.656-3.233-36.217h-45.585l6.362 71.301 93.02 25.823.209-.058z"></path></g><path d="M108.382 0h23.077v22.8h21.11V0h23.078v69.044H152.57v-23.12h-21.11v23.12h-23.076V0h-.002zM205.994 22.896h-20.315V0h63.72v22.896h-20.325v46.148h-23.078l-.002-46.148zM259.511 0h24.062l14.802 24.26L313.163 0h24.072v69.044h-22.982V34.822l-15.877 24.549h-.396l-15.889-24.549v34.222h-22.579V0zM348.72 0h23.084v46.222h32.453v22.822H348.72V0z"></path><g fill="#fff"><path d="M255.844 268.217v45.41h55.917l-5.271 58.894-50.646 13.67v47.244l93.093-25.801.683-7.672 10.671-119.551 1.108-12.194h-12.237zM255.844 176.305V221.716h109.687l.911-10.207 2.069-23.021 1.086-12.183z"></path></g></svg>
        <p>HTML</p>
        </div>

        <div className="iconskill">
        <svg height="100" viewBox="1.2 .4 352.2 70.9" width="100" xmlns="http://www.w3.org/2000/svg"><path d="m264 25.5v44.7h-14.4v-51.7z" fill="#f37368"></path><path d="m60.2 61.9 10.8 9.4 45.5-23.7-4.7-11.3zm189.4-28.8 36.6-19-6.2-10.7-30.4 15.1z" fill="#f7a199"></path><path d="m146.6 22v48.2h-13.8v-68.7zm-86.4 39.9 10.8 9.4 20.8-52-6.7-17.8z" fill="#f37368"></path><path d="m85.1 1.5h14.2l26.3 68.7h-14.6zm63.6 0 30.3 46.9v21.8l-46.2-68.7zm56.3 0h14.3v68.7h-14.3zm44.6 12.6h-22v-12.6h51.3l7.3 12.6h-22.2z" fill="#f04939"></path><path d="m328.5 44.1v26.1h-14.2v-26.1" fill="#f7a199"></path><path d="m338.3 1.5-24 42.6h14.2l24.9-42.6z" fill="#f04939"></path><path d="m314.3 44.1-24.8-42.6h15.6l16.7 29.2z" fill="#f37368"></path><path d="m6.9 9.5c0 9.5 5.9 15.2 17.7 18.2l12.5 2.9c11.2 2.6 18 9 18 19.4.1 4.5-1.4 8.9-4.1 12.5 0-10.4-5.4-16-18.3-19.4l-12.3-2.8c-9.9-2.2-17.5-7.5-17.5-18.8 0-4.3 1.4-8.6 4-12" fill="#f04939"></path><g fill="#f37368"><path d="m179 44.9v-43.4h13.8v68.7h-13.8z"></path><path d="m43.3 47.4c5.3 3.4 7.7 8.2 7.7 15.1-4.5 5.7-12.2 8.8-21.3 8.8-15.3 0-26.2-7.6-28.5-20.7h14.7c1.9 6 6.9 8.8 13.7 8.8 8.1.1 13.6-4.3 13.7-12m-28.7-23.8c-5-3-7.9-8.4-7.7-14.2 4.3-5.6 11.7-9 20.7-9 15.7 0 24.7 8.3 27 19.9h-14.2c-1.6-4.6-5.5-8.2-12.6-8.2-7.7.1-12.9 4.5-13.2 11.5"></path></g></svg>
        <p>Sanity</p>
        </div>

        <div className="iconskill">
        <svg height="100" viewBox="0 0 200 300" width="100" xmlns="http://www.w3.org/2000/svg"><path d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" fill="#0acf83"></path><path d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" fill="#a259ff"></path><path d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" fill="#f24e1e"></path><path d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50z" fill="#ff7262"></path><path d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" fill="#1abcfe"></path></svg>
        <p>Figma</p>
        </div>

        <div className="iconskill">
        <svg fill="currentColor" width="100" height="100" viewBox="0 0 117 32" xmlns="http://www.w3.org/2000/svg"><path d="M39.157 14.162v7.598h-3.311v-6.69c0-.422-.104-.8-.312-1.135a2.213 2.213 0 0 0-.816-.813 2.17 2.17 0 0 0-1.128-.298 2.234 2.234 0 0 0-1.955 1.11c-.2.335-.3.714-.3 1.136v6.69h-3.311l-.012-17.92h3.31l.013 6.857c.4-.382.868-.68 1.404-.896a4.624 4.624 0 0 1 1.715-.322c.872 0 1.66.21 2.364.633.711.422 1.28.987 1.703 1.696.424.701.636 1.486.636 2.354Zm9.82-4.349h3.528l-6.575 17.92h-3.503l2.16-5.973-4.32-11.947h3.624l2.351 7.443 2.735-7.443Zm13.415 0h3.311v12.114c0 .884-.18 1.68-.54 2.39a5.59 5.59 0 0 1-1.475 1.84c-.616.509-1.328.9-2.136 1.17-.8.27-1.647.406-2.543.406-.848 0-1.66-.167-2.435-.502a6.639 6.639 0 0 1-2.064-1.362 6.373 6.373 0 0 1-1.403-2.006l3.023-1.374c.168.398.396.74.684 1.027.296.287.632.506 1.007.657.384.16.78.239 1.188.239.44 0 .86-.052 1.26-.155a3.64 3.64 0 0 0 1.092-.466c.32-.207.571-.466.755-.777.184-.31.276-.673.276-1.087v-1.386a4.432 4.432 0 0 1-1.343 1.111c-.52.28-1.124.418-1.812.418a6.1 6.1 0 0 1-2.435-.49 6.42 6.42 0 0 1-1.992-1.35 6.497 6.497 0 0 1-1.355-2.006 6.062 6.062 0 0 1-.492-2.438c0-.868.164-1.68.492-2.437a6.353 6.353 0 0 1 1.355-1.995 6.321 6.321 0 0 1 1.992-1.362 6.102 6.102 0 0 1 2.435-.49c.688 0 1.292.144 1.812.43a4.3 4.3 0 0 1 1.343 1.1V9.813Zm-3.107 9.092a2.7 2.7 0 0 0 1.476-.419c.44-.286.783-.665 1.031-1.134a3.22 3.22 0 0 0 .384-1.566c0-.573-.128-1.095-.384-1.564a2.892 2.892 0 0 0-1.031-1.135 2.7 2.7 0 0 0-1.476-.419c-.536 0-1.028.14-1.476.419-.44.278-.791.657-1.055 1.135a3.14 3.14 0 0 0-.396 1.565c0 .573.132 1.099.396 1.576.264.47.616.845 1.055 1.123.448.28.94.419 1.476.419Zm8.979 2.855-.012-11.947h3.31l.013.884c.4-.382.868-.68 1.404-.896a4.623 4.623 0 0 1 1.715-.322c.44 0 .88.063 1.32.19l-1.308 3.334a2.26 2.26 0 0 0-.876-.18 2.234 2.234 0 0 0-1.955 1.112c-.2.334-.3.713-.3 1.135v6.69h-3.311ZM85.23 9.813h3.311V21.76h-3.323l-.156-1.243a3.673 3.673 0 0 1-1.2 1.123c-.487.287-1.06.43-1.715.43a6.265 6.265 0 0 1-2.508-.501 6.56 6.56 0 0 1-3.443-3.429 6.41 6.41 0 0 1-.492-2.509 6.1 6.1 0 0 1 .468-2.39 6.058 6.058 0 0 1 1.32-1.958 6.287 6.287 0 0 1 1.955-1.326 6.03 6.03 0 0 1 2.4-.478c.736 0 1.396.155 1.98.466.591.31 1.107.704 1.547 1.182l-.144-1.314Zm-3.167 9.092a2.7 2.7 0 0 0 1.475-.419c.44-.278.788-.653 1.044-1.123a3.287 3.287 0 0 0 .384-1.576 3.24 3.24 0 0 0-.384-1.577 3.007 3.007 0 0 0-1.044-1.123 2.7 2.7 0 0 0-1.475-.419 2.78 2.78 0 0 0-1.5.419 3.043 3.043 0 0 0-1.068 1.135 3.14 3.14 0 0 0-.395 1.565c0 .573.132 1.099.395 1.576.272.47.632.845 1.08 1.123a2.76 2.76 0 0 0 1.488.419Zm12.311 8.828h-3.312V9.813h3.312v1.29c.383-.47.84-.852 1.367-1.146.528-.303 1.144-.454 1.848-.454a6.13 6.13 0 0 1 2.447.49 6.25 6.25 0 0 1 2.016 1.361 6.35 6.35 0 0 1 1.355 1.995 6.06 6.06 0 0 1 .492 2.438c0 .868-.164 1.684-.492 2.449a6.456 6.456 0 0 1-1.355 2.019 6.348 6.348 0 0 1-2.016 1.35 6.13 6.13 0 0 1-2.447.49c-.704 0-1.32-.152-1.848-.455a4.992 4.992 0 0 1-1.367-1.146v7.24Zm3.167-15.065c-.544 0-1.036.144-1.476.43a3.043 3.043 0 0 0-1.032 1.123c-.248.47-.371.992-.371 1.566 0 .573.123 1.099.371 1.576.256.47.6.845 1.032 1.123a2.7 2.7 0 0 0 1.476.419c.544 0 1.04-.14 1.487-.419a3.036 3.036 0 0 0 1.08-1.123 3.09 3.09 0 0 0 .408-1.576c0-.566-.132-1.084-.396-1.554a3.011 3.011 0 0 0-1.08-1.135 2.723 2.723 0 0 0-1.5-.43Zm18.791 1.494v7.598h-3.311v-6.69c0-.422-.104-.8-.312-1.135a2.213 2.213 0 0 0-.816-.813 2.17 2.17 0 0 0-1.128-.298 2.235 2.235 0 0 0-1.955 1.11c-.2.335-.3.714-.3 1.136v6.69h-3.312l-.012-17.92h3.312l.012 6.857c.4-.382.867-.68 1.403-.896a4.626 4.626 0 0 1 1.716-.322c.872 0 1.659.21 2.363.633.712.422 1.28.987 1.704 1.696.424.701.636 1.486.636 2.354Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.9 4.267 11.175 6.4 7.45 8.533l-3.725 2.134v12.8l3.725-2.134 3.725-2.133v-4.267L7.45 17.067V12.8l3.725-2.133L14.9 8.533v12.8l-3.725 2.134L7.45 25.6l-3.725 2.133L0 29.866 3.725 32l3.725-2.134 3.725-2.133L14.9 25.6l3.726-2.133V2.133L14.9 0v4.267Z"></path></svg>
        <p>Hygraph</p>
        </div>

        <div className="iconskill">
        <svg viewBox="0 0 174.38 174.38" xmlns="http://www.w3.org/2000/svg" width="100" height="100"><circle cx="87.19" cy="87.19" fill="#23bec7" r="87.19"></circle><path d="M89.22 88.66c2.55-2.24 4.62-4.35 7.35-5.5 1.6-.67 3.37-1.62 4.89-.15s.56 3.08.1 4.66c-.92 3.17-1.85 6.35-2.69 9.54-.25.93-.67 2 .28 2.83s2.14.28 3.08-.2c3.48-1.78 6.31-3.89 5.87-8.57-.26-2.8 0-5.78 2.59-7.78 1-.79 2.21-1.71 3.48-.83s.36 2 0 3a25.79 25.79 0 0 0-1 11.7c.13.88 0 2.15.81 2.47 1.11.42 1.61-1 2.32-1.58s1.19-1.4 1.81-2.08c1.64-1.79 2.54-3.22.36-5.67-2.53-2.83-1.77-8.37.72-11a5.11 5.11 0 0 1 5.77-1.5c2.17.79 2.88 2.66 2.94 4.85.06 2.46-1 4.62-1.83 7 2.42.61 3.92-.75 5.28-2.22 3.28-3.56 7.08-5.82 12.12-5.29 3.65.38 5.74 2.35 5.55 5.22a4 4 0 0 1-5.72 3.15c-1.14-.61-1-1.17 0-1.75a1.68 1.68 0 0 0 .93-2.06 2.5 2.5 0 0 0-2.23-1.71 5.62 5.62 0 0 0-3.94.88c-3.66 2.34-5.71 8.84-4 12.8 1 2.38 2.86 2.83 4.79 1.14a9.16 9.16 0 0 0 2.34-3.68 10 10 0 0 1 1.19-2.46c.91-1.21 2.17-2.28 3.75-1.63s.77 2.29.51 3.4c-.93 3.85-1.72 7.6 1.54 10.84a.84.84 0 0 1 0 1.24 1.3 1.3 0 0 1-1.52.22 9.11 9.11 0 0 1-5.2-4.66c-.33-.72-.47-1.77-1.64-.74a6 6 0 0 1-7.84.65c-2.84-1.82-3.86-4.55-3.6-7.82.05-.64.13-1.26.21-2-3.27.27-5.93 1-7.8 4a18 18 0 0 1-6.43 5.94c-3.41 2-4.74 1.38-5.66-2.37-.13-.52-.24-1-.44-2a26.24 26.24 0 0 1-7.5 4.71c-5.17 1.84-8.17-.53-7.41-6a39.08 39.08 0 0 1 2.31-8.2c.24-.65.82-1.45 0-2-.6-.38-1.23.26-1.7.66-3.19 2.71-6 5.71-6.92 10a16.27 16.27 0 0 1-1.08 3.68 3.79 3.79 0 0 1-4 2.4c-1.8-.32-.64-2.16-1.14-3.29-1.92 1-3.76 2-5.66 2.87-1.37.63-3.16 1.13-4.16-.05-1.67-2-2.8-1.31-4.56-.19-2.57 1.64-5.52.94-7.85-1.77-1.18-1.37-1.79-1.28-2.93-.06a26 26 0 0 1-8.08 5.65C35.69 113 24 106.66 23.34 93.56 22.56 78.77 28.85 67 41.21 58.79a13.15 13.15 0 0 1 11.09-1.85A9.82 9.82 0 0 1 59.62 67a10.25 10.25 0 0 1-7.79 9.27c-.71.16-1.63.44-2-.23-.56-.9.33-1.51.94-2 3.34-2.82 3.91-6.49 3.28-10.52-.6-3.76-3.28-5.28-6.85-3.91a16.85 16.85 0 0 0-6.58 4.89A41.75 41.75 0 0 0 30.07 88 18.87 18.87 0 0 0 32 99c2.54 4.85 6.85 7 12.17 5.74a25 25 0 0 0 11.21-6.18 4.77 4.77 0 0 0 1.32-3.46c.73-7.6 7.3-13.3 14.64-12.74a7.12 7.12 0 0 1 4.73 2 4 4 0 0 1 .93 4.53c-.71 1.72-2.29 2.28-4.08 2.19a2.28 2.28 0 0 1-2-.81c-.66-1 .6-1.07 1-1.57 1.12-1.4.49-3.07-1.43-3.46a5.49 5.49 0 0 0-5.28 1.68 12.27 12.27 0 0 0-3.36 10.63c.2 1.48.83 2.93 2.46 3.37S67 100.14 68 99a8.63 8.63 0 0 0 1.57-3.2 5.08 5.08 0 0 1 1.69-2.8c1-.77 2.1-1.4 3.28-.71s.46 1.85.46 2.81c0 1.76-1.9 3.81.45 5.16 1.26.72 6.34-3.11 6.74-4.91.63-2.87 1.14-5.77 1.71-8.65a4.9 4.9 0 0 1 1.1-2.77 3.62 3.62 0 0 1 4-1c1.51.63.76 2 .61 3.16-.08.69-.2 1.39-.39 2.57zM123 82c-.26-.7-.68-1.38-1.54-1.29s-1.11.88-1.18 1.62a7 7 0 0 0 2.29 5.91A8.37 8.37 0 0 0 123 82z" fill="#fff"></path></svg>

        <p>Canva</p>
        </div>

        <div className="iconskill">
        <svg height="100" width="100" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="125 140 300 100" xmlns="http://www.w3.org/2000/svg"><g fill="#21759b" fill-rule="nonzero" transform="matrix(2.44844 0 0 2.44844 130 50.0049)"><path d="m8.708 61.26c0 20.802 12.089 38.779 29.619 47.298l-25.069-68.686c-2.916 6.536-4.55 13.769-4.55 21.388z"></path><path d="m96.74 58.608c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925 11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z"></path><path d="m62.184 65.857-15.768 45.819c4.708 1.384 9.687 2.141 14.846 2.141 6.12 0 11.989-1.058 17.452-2.979-.141-.225-.269-.464-.374-.724z"></path><path d="m107.376 36.046c.226 1.674.354 3.471.354 5.404 0 5.333-.996 11.328-3.996 18.824l-16.053 46.413c15.624-9.111 26.133-26.038 26.133-45.426.001-9.137-2.333-17.729-6.438-25.215z"></path><path d="m61.262 0c-33.779 0-61.262 27.481-61.262 61.26 0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263-.001-33.779-27.487-61.26-61.265-61.26zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z"></path></g></svg>

        <p>Wordpress</p>
        </div>

        <div className="iconskill">
        <svg width="100" height="100" viewBox="0 0 256 153" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M23.759 0h208.378C245.325 0 256 10.675 256 23.863v79.541c0 13.188-10.675 23.863-23.863 23.863H157.41l10.257 25.118-45.109-25.118H23.863c-13.187 0-23.862-10.675-23.862-23.863V23.863C-.104 10.78 10.57 0 23.759 0z" fill="#9B5C8F"/><path d="M14.578 21.75c1.457-1.978 3.642-3.018 6.556-3.226 5.308-.417 8.326 2.08 9.054 7.492 3.226 21.75 6.764 40.17 10.51 55.259l22.79-43.395c2.082-3.955 4.684-6.036 7.806-6.244 4.579-.312 7.388 2.601 8.533 8.741 2.602 13.84 5.932 25.6 9.886 35.59 2.706-26.432 7.285-45.476 13.737-57.235 1.56-2.914 3.85-4.371 6.868-4.58 2.394-.207 4.579.521 6.556 2.082 1.977 1.561 3.018 3.538 3.226 5.932.104 1.873-.208 3.434-1.04 4.995-4.059 7.493-7.39 20.085-10.095 37.567-2.601 16.963-3.538 30.18-2.914 39.65.209 2.6-.208 4.89-1.248 6.868-1.25 2.289-3.122 3.538-5.516 3.746-2.706.208-5.515-1.04-8.221-3.85-9.678-9.887-17.379-24.664-22.998-44.332-6.765 13.32-11.76 23.31-14.986 29.97-6.14 11.76-11.343 17.796-15.714 18.108-2.81.208-5.203-2.186-7.284-7.18-5.307-13.633-11.031-39.962-17.17-78.986-.417-2.706.207-5.1 1.664-6.972zm223.636 16.338c-3.746-6.556-9.262-10.51-16.65-12.072-1.978-.416-3.85-.624-5.62-.624-9.99 0-18.107 5.203-24.455 15.61-5.412 8.845-8.117 18.627-8.117 29.346 0 8.013 1.665 14.881 4.995 20.605 3.746 6.556 9.262 10.51 16.65 12.071 1.977.417 3.85.625 5.62.625 10.094 0 18.211-5.203 24.455-15.61 5.411-8.95 8.117-18.732 8.117-29.45.104-8.117-1.665-14.882-4.995-20.501zm-13.112 28.826c-1.457 6.868-4.059 11.967-7.91 15.401-3.017 2.706-5.827 3.85-8.428 3.33-2.498-.52-4.58-2.705-6.14-6.764-1.25-3.226-1.873-6.452-1.873-9.47 0-2.601.208-5.203.728-7.596.937-4.267 2.706-8.43 5.515-12.384 3.435-5.1 7.077-7.18 10.823-6.452 2.498.52 4.58 2.706 6.14 6.764 1.249 3.226 1.873 6.452 1.873 9.47 0 2.706-.208 5.307-.728 7.7zm-52.033-28.826c-3.746-6.556-9.366-10.51-16.65-12.072-1.977-.416-3.85-.624-5.62-.624-9.99 0-18.107 5.203-24.455 15.61-5.411 8.845-8.117 18.627-8.117 29.346 0 8.013 1.665 14.881 4.995 20.605 3.746 6.556 9.262 10.51 16.65 12.071 1.978.417 3.85.625 5.62.625 10.094 0 18.211-5.203 24.455-15.61 5.412-8.95 8.117-18.732 8.117-29.45 0-8.117-1.665-14.882-4.995-20.501zm-13.216 28.826c-1.457 6.868-4.059 11.967-7.909 15.401-3.018 2.706-5.828 3.85-8.43 3.33-2.497-.52-4.578-2.705-6.14-6.764-1.248-3.226-1.872-6.452-1.872-9.47 0-2.601.208-5.203.728-7.596.937-4.267 2.706-8.43 5.516-12.384 3.434-5.1 7.076-7.18 10.822-6.452 2.498.52 4.58 2.706 6.14 6.764 1.25 3.226 1.873 6.452 1.873 9.47.105 2.706-.208 5.307-.728 7.7z" fill="#FFF"/></svg>

        <p>WooCommerce</p>
        </div>


        <div className="iconskill">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512"><rect fill="transparent" width="512" height="512" rx="104.187" ry="105.042"/><path fill="green" fill-rule="nonzero" d="M378.68 230.011a71.432 71.432 0 003.654-22.541 71.383 71.383 0 00-9.783-36.064c-12.871-22.404-36.747-36.236-62.587-36.236a72.31 72.31 0 00-15.145 1.604 71.362 71.362 0 00-53.37-23.991h-.453l-.17.001c-31.297 0-59.052 20.195-68.673 49.967a71.372 71.372 0 00-47.709 34.618 72.224 72.224 0 00-9.755 36.226 72.204 72.204 0 0018.628 48.395 71.395 71.395 0 00-3.655 22.541 71.388 71.388 0 009.783 36.064 72.187 72.187 0 0077.728 34.631 71.375 71.375 0 0053.374 23.992H271l.184-.001c31.314 0 59.06-20.196 68.681-49.995a71.384 71.384 0 0047.71-34.619 72.107 72.107 0 009.736-36.194 72.201 72.201 0 00-18.628-48.394l-.003-.004zM271.018 380.492h-.074a53.576 53.576 0 01-34.287-12.423 44.928 44.928 0 001.694-.96l57.032-32.943a9.278 9.278 0 004.688-8.06v-80.459l24.106 13.919a.859.859 0 01.469.661v66.586c-.033 29.604-24.022 53.619-53.628 53.679zm-115.329-49.257a53.563 53.563 0 01-7.196-26.798c0-3.069.268-6.146.79-9.17.424.254 1.164.706 1.695 1.011l57.032 32.943a9.289 9.289 0 009.37-.002l69.63-40.205v27.839l.001.048a.864.864 0 01-.345.691l-57.654 33.288a53.791 53.791 0 01-26.817 7.17 53.746 53.746 0 01-46.506-26.818v.003zm-15.004-124.506a53.5 53.5 0 0127.941-23.534c0 .491-.028 1.361-.028 1.965v65.887l-.001.054a9.27 9.27 0 004.681 8.053l69.63 40.199-24.105 13.919a.864.864 0 01-.813.074l-57.66-33.316a53.746 53.746 0 01-26.805-46.5 53.787 53.787 0 017.163-26.798l-.003-.003zm198.055 46.089l-69.63-40.204 24.106-13.914a.863.863 0 01.813-.074l57.659 33.288a53.71 53.71 0 0126.835 46.491c0 22.489-14.033 42.612-35.133 50.379v-67.857c.003-.025.003-.051.003-.076a9.265 9.265 0 00-4.653-8.033zm23.993-36.111a81.919 81.919 0 00-1.694-1.01l-57.032-32.944a9.31 9.31 0 00-4.684-1.266 9.31 9.31 0 00-4.684 1.266l-69.631 40.205v-27.839l-.001-.048c0-.272.129-.528.346-.691l57.654-33.26a53.696 53.696 0 0126.816-7.177c29.644 0 53.684 24.04 53.684 53.684a53.91 53.91 0 01-.774 9.077v.003zm-150.831 49.618l-24.111-13.919a.859.859 0 01-.469-.661v-66.587c.013-29.628 24.053-53.648 53.684-53.648a53.719 53.719 0 0134.349 12.426c-.434.237-1.191.655-1.694.96l-57.032 32.943a9.272 9.272 0 00-4.687 8.057v.053l-.04 80.376zm13.095-28.233l31.012-17.912 31.012 17.9v35.812l-31.012 17.901-31.012-17.901v-35.8z"/></svg>

        <p>Chat GPT</p>
        </div>


        <div className="iconskill">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="100px" height="100px"><linearGradient id="1~WE0Lz3GgLZUex~1j_nwa" x1="10.281" x2="24.742" y1="1.322" y2="16.996" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#196de5"/><stop offset="1" stop-color="#1351c8"/></linearGradient><path fill="url(#1~WE0Lz3GgLZUex~1j_nwa)" d="M4.662,6.941c-0.001,0-0.003,0-0.004,0c-1.42,0-2.179,1.675-1.241,2.743L16,24L30.869,7.159 c-0.241-0.101-0.501-0.16-0.768-0.161L4.662,6.941z"/><linearGradient id="1~WE0Lz3GgLZUex~1j_nwb" x1="17.184" x2="27.74" y1="23.368" y2="36.213" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4d9fff"/><stop offset="1" stop-color="#1667eb"/></linearGradient><path fill="url(#1~WE0Lz3GgLZUex~1j_nwb)" d="M38.056,14.996l-6.46-7.322c-0.202-0.229-0.452-0.401-0.727-0.516L16,24L3.457,38.215 c-0.951,1.078-0.192,2.769,1.24,2.782l10.785-0.007L38.056,14.996z"/><linearGradient id="1~WE0Lz3GgLZUex~1j_nwc" x1="27.324" x2="33.437" y1="27.209" y2="37.448" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#70bcfd"/><stop offset="1" stop-color="#4a9ff9"/></linearGradient><path fill="url(#1~WE0Lz3GgLZUex~1j_nwc)" d="M44.217,21.982l-6.161-6.985L15.482,41l14.796-0.01c0.506-0.046,0.98-0.273,1.319-0.658 l12.62-14.308C45.236,24.87,45.236,23.137,44.217,21.982z"/><path d="M16,24L30.869,7.159c-0.241-0.101-0.501-0.16-0.768-0.161l-0.423-0.001 L15.336,23.245L16,24z" opacity=".05"/><path d="M15.669,23.624L16,24L30.869,7.159c-0.173-0.073-0.358-0.114-0.546-0.137 L15.669,23.624z" opacity=".07"/></svg>

        <p>MS Power Automate</p>
        </div>






      </div> 

    </div>
  )
}

export default ABOUT