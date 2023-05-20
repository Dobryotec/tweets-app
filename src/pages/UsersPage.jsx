import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../components/redux/thunk";
import { selectItems } from "../components/redux/selectors";
import ButtonLoadMore from "../components/Buttons/ButtonLoadMore";
import UsersList from "../components/UsersList";
import { selectIsLoading } from "../components/redux/selectors";
import ButtonBack from "../components/Buttons/ButtonBack";
import ButtonTop from "../components/Buttons/ButtonTop";
import { scrollWindow } from "../components/utils/ScrollWindow";

const UsersPage = () => {
  const [displayedUsers, setDisplayedUsers] = useState([]);
  const dispatch = useDispatch();
  const users = useSelector(selectItems);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!users.length) {
      dispatch(fetchAllUsers());
    }
  }, [dispatch, users]);

  useEffect(() => {
    if (users.length > 0) {
      setDisplayedUsers(users.slice(0, 3));
    }
  }, [users]);

  useEffect(() => {
    scrollWindow(displayedUsers.length === 0);
  }, [displayedUsers.length]);

  const handleLoadMore = () => {
    const remainingUsers = users.slice(
      displayedUsers.length,
      displayedUsers.length + 3
    );
    setDisplayedUsers([...displayedUsers, ...remainingUsers]);
  };

  return (
    <main className="py-10">
      <div className="container  flex flex-col mx-auto justify-center items-center text-center font-main ">
        <ButtonBack />
        <UsersList displayedUsers={displayedUsers} />
        {!isLoading && users.length > displayedUsers.length && (
          <ButtonLoadMore handleLoadMore={handleLoadMore} />
        )}
        {displayedUsers.length >= 6 && <ButtonTop />}
      </div>
    </main>
  );
};

export default UsersPage;
