import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useDataSource = (getSourceFunc, selectorFunc) => {
  const dispatch = useDispatch();
  const resource = useSelector(selectorFunc);

  useEffect(() => {
    dispatch(getSourceFunc());
  }, []);

  return resource;
};
