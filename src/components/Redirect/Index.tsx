import React, { useEffect } from "react";

type RedirectProps = {
  to: string
};

const Redirect = ({ to }: RedirectProps): JSX.Element => {

  useEffect(() => {
    window.location.href = to
  
    return () => {
      
    }
  }, [to])
  

  return <></>;
};

export default Redirect;
