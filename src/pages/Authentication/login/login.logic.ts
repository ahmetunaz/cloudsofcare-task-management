import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "store/actions";
import { RootState } from "store/reducers";

interface ILoginData {
  email: string;
  password: string;
}

export const useLoginLogic = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { auth, loading } = useSelector((state: RootState) => state.Auth);

  const handleSubmit = (values: ILoginData) => {
    dispatch(login(values));
  };

  useEffect(() => {
    if (auth?.accessToken) history.push("/");

    return () => {};
  }, [auth]);

  return {
    state: {},
    actions: { handleSubmit },
    reducer: { loading },
  };
};
