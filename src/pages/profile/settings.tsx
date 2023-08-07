// import ProfileLayout from "@/app/profile/layout";
import GlobalLayout from "@/app/layout";
import ProfileLayout from "@/app/profile/layout";
import ProfileSettingsView from "@/views/Profile/settings";

export default function ProfileSettings() {
  return (
    <GlobalLayout>
      <ProfileLayout>
        <ProfileSettingsView />
      </ProfileLayout>
    </GlobalLayout>
  );
}
