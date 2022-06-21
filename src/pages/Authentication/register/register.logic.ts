import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { register } from "store/actions";
import { RootState } from "store/reducers";

interface IRegisterData {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const useRegisterLogic = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { auth, loading } = useSelector((state: RootState) => state.Auth);

  const handleSubmit = (values: IRegisterData) => {
    dispatch(register(values));
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
