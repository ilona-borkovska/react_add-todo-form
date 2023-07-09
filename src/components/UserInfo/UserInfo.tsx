import { getUserById } from '../../services/todo';

type Props = {
  userId: number,
};

export const UserInfo: React.FC<Props> = ({ userId }) => {
  const user = getUserById(userId);

  return (
    <a
      className="UserInfo"
      href={`mailto:${user?.email}`}
    >
      {user?.name}
    </a>
  );
};
