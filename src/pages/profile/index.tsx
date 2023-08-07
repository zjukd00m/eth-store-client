import GlobalLayout from "@/app/layout";
import ProfileLayout from "@/app/profile/layout";
import ProfileView from "@/views/Profile";

export default function Profile() {
  return (
    <GlobalLayout>
      <ProfileLayout>
        <ProfileView />
      </ProfileLayout>
    </GlobalLayout>
  );
}
