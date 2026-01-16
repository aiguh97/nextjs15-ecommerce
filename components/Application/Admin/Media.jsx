import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ADMIN_MEDIA_EDIT } from "@/routes/AdminPanelRoute";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineEdit } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { LuTrash } from "react-icons/lu";
import { showToast } from "@/lib/showToast";

const Media = ({
  media,
  handleDelete,
  deleteType,
  selectedMedia,
  setSelectedMedia,
}) => {
  const handleCheck = (checked) => {
    let newSelectedMedia =[]
    if(selectedMedia.includes(media._id)){
      newSelectedMedia =selectedMedia.filter(m=>m!==media._id)
    }else{
      newSelectedMedia=[...selectedMedia,media._id]
    }

    setSelectedMedia(newSelectedMedia)
  };
  
  const handleCopyLink = async (url)=>{
    await navigator.clipboard.writeText(url)
    showToast('success','Link copied.')
  }

  return (
    <div className="relative group border border-gray-200 dark:border-gray-800 rounded overflow-hidden">
      {/* Checkbox */}
      <div className="absolute top-2 left-2 z-20">
        <Checkbox
          checked={selectedMedia.includes(media._id)}
          onCheckedChange={handleCheck}
          className="border-primary cursor-pointer"
        />
      </div>

      {/* Dropdown */}
      <div className="absolute top-2 right-2 z-20">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-black/50">
              <BsThreeDotsVertical className="text-white" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            {deleteType === "SD" && (
              <>
                <DropdownMenuItem asChild>
                  <Link
                    href={ADMIN_MEDIA_EDIT(media._id)}
                    className="flex items-center gap-2"
                  >
                    <MdOutlineEdit />
                    Edit
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem
                  onClick={() =>handleCopyLink(media.secure_url)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <IoIosLink />
                  Copy Link
                </DropdownMenuItem>
              </>
            )}

            <DropdownMenuItem
              onClick={() => handleDelete([media._id],deleteType)}
              className="flex items-center gap-2 text-red-600 cursor-pointer"
            >
              <LuTrash />
              {deleteType === "SD"
                ? "Move Into Trash"
                : "Delete Permanently"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/40 transition-all duration-150" />

      {/* Image */}
      <Image
        src={media?.secure_url}
        alt={media?.alt || "Media image"}
        width={300}
        height={300}
        className="w-full h-[150px] sm:h-[200px] object-cover"
      />
    </div>
  );
};

export default Media;
