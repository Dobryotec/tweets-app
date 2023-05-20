import User from "./User";
import { selectIsLoading, selectError } from "./redux/selectors";
import { useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";

const UsersList = ({ displayedUsers }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <ul className="flex justify-center flex-wrap gap-7 py-10">
      {isLoading && (
        <div
          className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center
         bg-white bg-opacity-75"
        >
          <ScaleLoader color="#bc13de" />
        </div>
      )}
      {error && <div>{error}</div>}
      {displayedUsers.map(({ id, tweets, user, followers, avatar }) => {
        return (
          <User
            key={id}
            id={id}
            tweets={tweets}
            user={user}
            followers={followers}
            avatar={avatar}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
