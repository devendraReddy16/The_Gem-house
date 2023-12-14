import { useMutation } from "@tanstack/react-query";
import { confirmLogin } from "../../services/apiLogin";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

function useConformLogin() {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { mutate: loginDetails, isLoading } = useMutation({
    mutationFn: ({ email, password }) => confirmLogin({ email, password }),
    onSuccess: (data) => {
      queryClient.getQueryData(["user"], data.user);
      toast.success(`Login ${data.user.email} confirmed`);
      navigate("/dashboard", { replace: true });
      console.log(data);
    },
    onError: (err) => toast.error(err.message),
  });

  return { loginDetails, isLoading };
}

export default useConformLogin;
