


import React, { useEffect, useRef } from 'react';

const Map = ({ zoom, center, style, onClick, onIdle, children }) => {

  const ref = useRef();
  const [map, setMap] = React.useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom, streetViewControl: false, mapTypeControl: false }));
    }
  }, [map, ref, center, zoom]);


  useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        window.google.maps.event.clearListeners(map, eventName)
      );
      if (onClick) {
        map.addListener("click", onClick);
      }
  
      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);


  return (
    <>
      <div ref={ref} style={style} />
      {React.Children.map(children, (child) => {

        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
          
        }
      })}
    </>
  )
};

export default Map;