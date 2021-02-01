// LIBRARIES
import React from 'react-dom';

function Icon({icon}) {
  if (icon === "logo") {
    return (
      <g>
        <path
          d="M31.586,50.349a3.474,3.474,0,0,1-2.475-1.025L13.2,33.414a2,2,0,0,1,0-2.828l15.91-15.91a3.587,3.587,0,0,1,4.95,0,3.5,3.5,0,0,1,0,4.951L21.687,32,34.061,44.375a3.5,3.5,0,0,1,0,4.949h0A3.482,3.482,0,0,1,31.586,50.349Zm1.768-1.732h0ZM31.586,15.651a1.493,1.493,0,0,0-1.061.439L14.615,32l15.91,15.91a1.536,1.536,0,0,0,2.121,0,1.5,1.5,0,0,0,0-2.121L19.565,32.707a1,1,0,0,1,0-1.414L32.646,18.211a1.5,1.5,0,0,0-1.06-2.56Z" />
        <path
          d="M44.313,50.349a3.48,3.48,0,0,1-2.474-1.024L25.929,33.414a2,2,0,0,1,0-2.828l15.91-15.91a3.584,3.584,0,0,1,4.949,0,3.5,3.5,0,0,1,0,4.95L34.414,32,46.788,44.375a3.5,3.5,0,0,1,0,4.949h0A3.474,3.474,0,0,1,44.313,50.349Zm0-34.7a1.49,1.49,0,0,0-1.06.439L27.343,32l15.91,15.91a1.534,1.534,0,0,0,2.121,0h0a1.5,1.5,0,0,0,0-2.121L32.293,32.707a1,1,0,0,1,0-1.414L45.374,18.211a1.5,1.5,0,0,0-1.061-2.56Z" />
        <path
          d="M32,62A30,30,0,1,1,62,32,30.034,30.034,0,0,1,32,62ZM32,4A28,28,0,1,0,60,32,28.032,28.032,0,0,0,32,4Z" />
        <path d="M30,8.079a1,1,0,0,1-.078-2C30.61,6.028,31.31,6,32,6a1,1,0,0,1,0,2c-.638,0-1.284.025-1.921.076Z" />
        <path
          d="M7,33a1,1,0,0,1-1-1A25.953,25.953,0,0,1,25.76,6.757,1,1,0,1,1,26.24,8.7,23.959,23.959,0,0,0,8,32,1,1,0,0,1,7,33Z" />
      </g>
    )
  } else if(icon === "notes") {
    return (
      <g>
        <path
          d="M52,7a5.006,5.006,0,0,0-5-5H7A5.006,5.006,0,0,0,2,7V56H4V7A3,3,0,1,1,8,9.816V7H6V62H48V11.9A5.009,5.009,0,0,0,52,7ZM8,60V12H46V60ZM47,10H10.974a4.9,4.9,0,0,0,0-6H47a3,3,0,0,1,0,6Z" />
        <path
          d="M57,8a5.006,5.006,0,0,0-5,5V52.236l5,10,5-10V13A5.006,5.006,0,0,0,57,8ZM56,48.586,54.845,47.43,54,48.7V22h2Zm-1.846,3.486,1-1.5L57,52.414l1.845-1.844,1,1.5L57,57.764ZM60,48.7l-.845-1.267L58,48.586V22h2ZM60,20H54V18h6Zm-6-4V13a3,3,0,0,1,6,0v3Z" />
        <rect x="12" y="20" width="30" height="2" />
        <rect x="12" y="28" width="30" height="2" />
        <rect x="12" y="35" width="30" height="2" />
        <rect x="12" y="43" width="30" height="2" />
        <rect x="12" y="50" width="18" height="2" />
        <rect x="36" y="50" width="2" height="2" />
        <rect x="32" y="50" width="2" height="2" />
        <rect x="40" y="50" width="2" height="2" />
      </g>
    )
  } else if (icon === "search") {
    return (
      <g>
        <path
          d="M43.991,25a18.969,18.969,0,1,0-5.556,13.435A18.872,18.872,0,0,0,43.991,25ZM25,41.991a16.969,16.969,0,1,1,12.021-4.97A16.888,16.888,0,0,1,25,41.991Z" />
        <path
          d="M25,10.009a14.9,14.9,0,0,0-10.607,4.385,1,1,0,0,0,1.414,1.414,13.021,13.021,0,0,1,18.385,0,1,1,0,0,0,1.414-1.414A14.894,14.894,0,0,0,25,10.009Z" />
        <path
          d="M25,37.991a12.908,12.908,0,0,1-9.192-3.8,1,1,0,1,0-1.414,1.414A14.894,14.894,0,0,0,25,39.991a1,1,0,0,0,0-2Z" />
        <path
          d="M61.527,55.87,49.042,43.385l.353-.354a2.5,2.5,0,0,0,0-3.535,2.558,2.558,0,0,0-3.535,0l-.351.351L43.826,38.17a22.942,22.942,0,1,0-5.653,5.66l1.673,1.678-.351.351A2.5,2.5,0,0,0,43.031,49.4l.354-.354L55.87,61.526a4,4,0,0,0,5.657-5.656ZM10.147,39.853a21.005,21.005,0,1,1,31.587-2.168l-.005.006a20.054,20.054,0,0,1-1.876,2.162q-.516.514-1.059.987c-.36.313-.729.61-1.1.889h0l-.006,0A21.078,21.078,0,0,1,10.147,39.853ZM39.79,42.619c.046-.038.089-.084.135-.123.459-.39.909-.8,1.342-1.229s.84-.885,1.231-1.345c.038-.045.083-.086.121-.132l1.475,1.471-1.417,1.417L41.26,44.094Zm1.12,5.362a.5.5,0,0,1,0-.708l6.364-6.363a.5.5,0,0,1,.707,0,.5.5,0,0,1,0,.707L41.618,47.98A.5.5,0,0,1,40.91,47.981Zm19.2,12.131a2.048,2.048,0,0,1-2.829,0L44.8,47.627,47.628,44.8,60.113,57.284a2,2,0,0,1,0,2.828Z" />
      </g>
    )
  } else if (icon === "themes") {
    return (
      <g>
        <path
          d="M59,11H52V9a3.009,3.009,0,0,0-3-3H42V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V59a1,1,0,0,0,1,1H33.18A3.01,3.01,0,0,0,36,62h6a3.009,3.009,0,0,0,3-3V42h1a1,1,0,0,0,1-1V37a1,1,0,0,0-1-1H42V32H59a3.009,3.009,0,0,0,3-3V14A3.009,3.009,0,0,0,59,11Zm-7,8V17h4v9H42V22h7A3.009,3.009,0,0,0,52,19ZM49,8a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H13a1,1,0,0,1-1-1V9a1,1,0,0,1,1-1ZM27,23a3.009,3.009,0,0,0-3,3v7a1,1,0,0,1-2,0V30a3,3,0,0,0-6,0V41a1,1,0,0,1-2,0V22H32v8a1,1,0,0,1-2,0V26A3.009,3.009,0,0,0,27,23Zm6,35H4V4H40V6H13a3.009,3.009,0,0,0-3,3v2H9a2.006,2.006,0,0,0-2,2v2a2.006,2.006,0,0,0,2,2h1v2a3.01,3.01,0,0,0,2,2.82V41a3,3,0,0,0,6,0V30a1,1,0,0,1,2,0v3a3,3,0,0,0,6,0V26a1,1,0,0,1,2,0v4a3,3,0,0,0,6,0V22h6v4H39a3.009,3.009,0,0,0-3,3v7H32a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h1ZM10,13v2H9V13ZM43,59a1,1,0,0,1-1,1H36a1,1,0,0,1-1-1V42h8Zm2-21v2H33V38Zm15-9a1,1,0,0,1-1,1H42a2.006,2.006,0,0,0-2,2v4H38V29a1,1,0,0,1,1-1H56a2.006,2.006,0,0,0,2-2V17a2.006,2.006,0,0,0-2-2H52V13h7a1,1,0,0,1,1,1Z" />
        <path d="M15,46a3,3,0,1,0,3,3A3,3,0,0,0,15,46Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,15,50Z" />
        <path d="M23,38a3,3,0,1,0,3,3A3,3,0,0,0,23,38Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,23,42Z" />
        <path d="M14,11a1,1,0,0,0,1,1H42a1,1,0,0,0,0-2H15A1,1,0,0,0,14,11Z" />
        <path d="M46,12h1a1,1,0,0,0,0-2H46a1,1,0,0,0,0,2Z" />
      </g>
    )
  } else if (icon === "about") {
    return (
      <g>
        <path
          d="M51,2H13A5,5,0,0,0,8,7V53a6,6,0,0,0,6,6H38v2a.987.987,0,0,0,.62.92,1,1,0,0,0,1.09-.21L42,59.41l2.29,2.3A1.007,1.007,0,0,0,45,62a.838.838,0,0,0,.38-.08A.987.987,0,0,0,46,61V59h5a5,5,0,0,0,5-5V7A5,5,0,0,0,51,2ZM44,58.59l-1.29-1.3a1.014,1.014,0,0,0-1.42,0L40,58.59V54h4ZM54,54a3.009,3.009,0,0,1-3,3H46V54h5a4.924,4.924,0,0,0,3-1.03Zm0-5a3.009,3.009,0,0,1-3,3H19a1,1,0,0,0,0,2H38v3H14a4,4,0,0,1,0-8H51a4.924,4.924,0,0,0,3-1.03Zm0-5a3.009,3.009,0,0,1-3,3H14a5.979,5.979,0,0,0-4,1.54V7a3.009,3.009,0,0,1,3-3H51a3.009,3.009,0,0,1,3,3Z" />
        <path d="M15,52H13a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z" />
        <path d="M18,17V27a1,1,0,0,0,1,1H45a1,1,0,0,0,1-1V17a1,1,0,0,0-1-1H19A1,1,0,0,0,18,17Zm2,1H44v8H20Z" />
        <path d="M15,15a1,1,0,0,0,1-1V10h4a1,1,0,0,0,0-2H15a1,1,0,0,0-1,1v5A1,1,0,0,0,15,15Z" />
        <path d="M43,42a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V37a1,1,0,0,0-2,0v4H44A1,1,0,0,0,43,42Z" />
        <path d="M44,31a1,1,0,0,0-1-1H21a1,1,0,0,0,0,2H43A1,1,0,0,0,44,31Z" />
        <path d="M41,34H23a1,1,0,0,0,0,2H41a1,1,0,0,0,0-2Z" />
      </g>
    )
  } else if (icon === "logout") {
    return (
      <g>
        <path
          d="M46.683,47.142h0a1,1,0,0,1-.707-.294L41.737,42.6a1,1,0,0,1,0-1.413L45.928,37,15,37a1,1,0,0,1-1-1V28a1,1,0,0,1,1-1H45.924l-4.191-4.191a1,1,0,0,1,0-1.413l4.238-4.248a1,1,0,0,1,.707-.294h0a1,1,0,0,1,.707.293L61.532,31.293a1,1,0,0,1,0,1.414L47.39,46.849A1,1,0,0,1,46.683,47.142ZM43.858,41.9l2.826,2.831L59.411,32,46.679,19.268,43.854,22.1l5.191,5.192A1,1,0,0,1,48.338,29H16v6l32.342,0a1,1,0,0,1,.707,1.707Z" />
        <path
          d="M41,62H3a1,1,0,0,1-1-1V3A1,1,0,0,1,3,2H41a1,1,0,0,1,1,1V17a1,1,0,0,1-1,1H35a1,1,0,0,1-1-1V10H10V54H34V47a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1V61A1,1,0,0,1,41,62ZM4,60H40V48H36v7a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V9A1,1,0,0,1,9,8H35a1,1,0,0,1,1,1v7h4V4H4Z" />
      </g>
    )
  } else if (icon === "configs") {
    return (
      <g>
        <polygon points="39 62 8 62 8 55 10 55 10 60 39 60 39 62" />
        <path d="M20.586,2,8,14.586V21h2V16H22V4H48V34h2V2ZM11.414,14,20,5.414V14Z" />
        <path
          d="M52,62H46V58.543a9.944,9.944,0,0,1-1.624-.674L41.93,60.314,37.686,56.07l2.445-2.445A10.085,10.085,0,0,1,39.456,52H36V46h3.456a10.085,10.085,0,0,1,.675-1.625L37.686,41.93l4.244-4.244,2.446,2.445A9.944,9.944,0,0,1,46,39.457V36h6v3.457a9.944,9.944,0,0,1,1.624.674l2.446-2.445,4.244,4.244-2.445,2.445A10.085,10.085,0,0,1,58.544,46H62v6H58.544a10.085,10.085,0,0,1-.675,1.625l2.445,2.445L56.07,60.314l-2.446-2.445A9.944,9.944,0,0,1,52,58.543Zm-4-2h2V56.984l.775-.179a8.082,8.082,0,0,0,2.482-1.031l.676-.426,2.137,2.138,1.416-1.416-2.138-2.138.426-.676a8.122,8.122,0,0,0,1.032-2.481L56.984,50H60V48H56.984l-.178-.775a8.122,8.122,0,0,0-1.032-2.481l-.426-.676,2.138-2.138L56.07,40.514l-2.137,2.138-.676-.426a8.134,8.134,0,0,0-2.482-1.032L50,41.016V38H48v3.016l-.775.178a8.134,8.134,0,0,0-2.482,1.032l-.676.426L41.93,40.514,40.514,41.93l2.138,2.138-.426.676a8.122,8.122,0,0,0-1.032,2.481L41.016,48H38v2h3.016l.178.775a8.122,8.122,0,0,0,1.032,2.481l.426.676L40.514,56.07l1.416,1.416,2.137-2.138.676.426a8.082,8.082,0,0,0,2.482,1.031l.775.179Z" />
        <path d="M49,55a6,6,0,1,1,6-6A6.006,6.006,0,0,1,49,55Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,49,45Z" />
        <path
          d="M23,55H15V50.377a12.821,12.821,0,0,1-1.922-.791L9.81,52.854,4.146,47.19l3.269-3.269A13,13,0,0,1,6.627,42H2V34H6.627a13,13,0,0,1,.788-1.921L4.146,28.81,9.81,23.146l3.269,3.269A13.048,13.048,0,0,1,15,25.627V21h8v4.627a13.048,13.048,0,0,1,1.921.788l3.269-3.269,5.664,5.664-3.269,3.269A13,13,0,0,1,31.373,34H36v8H31.373a13,13,0,0,1-.788,1.921l3.269,3.269L28.19,52.854l-3.268-3.268A12.821,12.821,0,0,1,23,50.377Zm-6-2h4V48.836l.762-.187A10.709,10.709,0,0,0,24.6,47.486l.666-.388,2.928,2.928,2.836-2.836L28.1,44.262l.389-.666a11.056,11.056,0,0,0,1.165-2.843L29.843,40H34V36H29.843l-.192-.753A11.056,11.056,0,0,0,28.486,32.4l-.389-.666,2.929-2.928L28.19,25.974,25.262,28.9l-.666-.388a11.05,11.05,0,0,0-2.843-1.165L21,27.157V23H17v4.157l-.753.192A11.05,11.05,0,0,0,13.4,28.514l-.666.388L9.81,25.974,6.974,28.81,9.9,31.738l-.389.666a11.056,11.056,0,0,0-1.165,2.843L8.157,36H4v4H8.157l.192.753A11.056,11.056,0,0,0,9.514,43.6l.389.666L6.974,47.19,9.81,50.026,12.738,47.1l.666.388a10.709,10.709,0,0,0,2.834,1.163l.762.187Z" />
        <path d="M19,44a6,6,0,1,1,6-6A6.006,6.006,0,0,1,19,44Zm0-10a4,4,0,1,0,4,4A4,4,0,0,0,19,34Z" />
        <rect x="26" y="10" width="2" height="2" />
        <rect x="30" y="10" width="14" height="2" />
        <rect x="26" y="14" width="2" height="2" />
        <rect x="30" y="14" width="14" height="2" />
        <polygon points="44 30 36 30 36 28 42 28 42 20 26 20 26 18 44 18 44 30" />
      </g>
    )
  }
}

export {Icon};