import toast from "react-hot-toast";
import { updateBooking } from "../../services/apiBookings";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
function useUpdateChecking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoadng: checkingLoaading } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfull checkin`);
      queryClient.invalidateQueries({ active: true });
      navigate(`/bookings`);
    },
  });

  return { checkin, checkingLoaading };
}

export default useUpdateChecking;
