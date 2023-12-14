import { FaRegUser } from "react-icons/fa";
import ButtonIcon from "../../ui/ButtonIcon";
import { CiLogout } from "react-icons/ci";

import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import useLogout from "./useLogout";

import UserAvatar from "./UserAvatar";
import DarkMode from "../../ui/DarkMode";

const StyledHeaderBar = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: end;
`;

function HeaderBar() {
  const navigate = useNavigate();
  const { mutate, isLoading } = useLogout();

  return (
    <StyledHeaderBar>
      <DarkMode />
      <UserAvatar />
      <ButtonIcon onClick={() => navigate("/account")}>
        <FaRegUser />
      </ButtonIcon>
      <ButtonIcon onClick={mutate} disable={isLoading}>
        <CiLogout />
      </ButtonIcon>
    </StyledHeaderBar>
  );
}

export default HeaderBar;
