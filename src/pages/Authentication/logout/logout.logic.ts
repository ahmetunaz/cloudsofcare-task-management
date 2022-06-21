import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "store/actions";
import { RootState } from "store/reducers";

export const useLogoutLogic = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: RootState) => state.Auth);

  useEffect(() => {
    dispatch(logOut());

    return () => {};
  }, []);

  return {
    state: {},
    actions: {},
    reducer: { auth },
  };
};
