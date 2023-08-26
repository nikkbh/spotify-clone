"use client";

import useUploadModel from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";

import Button from "./Button";
import useAuthModel from "@/hooks/useAuthModal";

const UploadSongButton = () => {
  const uploadModal = useUploadModel();
  const authModal = useAuthModel();
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    return uploadModal.onOpen();
  };

  return (
    <div
      className="
        inline-flex 
        md:hidden
        pt-3
      "
    >
      <Button onClick={onClick}>Upload Song</Button>
    </div>
  );
};

export default UploadSongButton;
