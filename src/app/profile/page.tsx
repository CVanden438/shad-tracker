import NameForm from '@/features/user/components/updateUserForm';
import { getCurrentUser } from '@/lib/session';

const ProfilePage = async () => {
  const user = await getCurrentUser();
  if (!user) return;
  return (
    <>
      <h2>Profile Page</h2>
      <NameForm user={user} />
    </>
  );
};

export default ProfilePage;
