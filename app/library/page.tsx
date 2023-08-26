import LibraryContent from "./components/LibraryContent";

import getSongsByUserId from "@/actions/getSongsByUserId";
import Header from "@/components/Header";
import UploadSongButton from "@/components/UploadSongButton";

export const revalidate = 0;

const Library = async () => {
  const userSongs = await getSongsByUserId();

  return (
    <div
      className="
            bg-neutral-900
            rounded-lg
            h-full
            w-full
            overflow-hidden
            overflow-y-auto
        "
    >
      <Header>
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">
            Manage your library
          </h1>
        </div>
        <UploadSongButton />
      </Header>
      <LibraryContent songs={userSongs} />
    </div>
  );
};

export default Library;
