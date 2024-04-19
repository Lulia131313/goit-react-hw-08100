import toast, { Toaster } from "react-hot-toast";
import AuthForm from "../components/AuthForm";
import { useDispatch } from "react-redux";
import { loginThunk } from "../redux/auth/operation";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => navigate("/"))
      .catch(() => toast.error("email or password invalid"));
  };

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <div>
      <AuthForm
        title="Login"
        onSubmit={handleSubmit}
        initialValues={initialValues}
      />
      <Toaster />
    </div>
  );
};

export default LoginPage;
