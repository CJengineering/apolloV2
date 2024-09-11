"use client";
import { useState } from "react";
import { PlayIcon,XCircleIcon  } from "@heroicons/react/24/outline"; // Assuming you are using Heroicons for the play icon

interface TrailerModalButtonProps {
  videoUrl: string;
}

const TrailerModalButton = ({ videoUrl }: TrailerModalButtonProps) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <button
        className="flex items-center space-x-2 mono text-gray-600 px-4 py-2 rounded-full hover:bg-red-700"
        onClick={openModal}
      >
        <PlayIcon className="w-6 h-6" />
        <span>Watch Trailer</span>
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-2xl p-4  rounded-lg">
            <button
              className="absolute top-1 right-1 text-gray-700"
              onClick={closeModal}
            >
              <XCircleIcon className="w-6 h-6 text-white" />
            </button>
            <div className="aspect-w-16 ">
              <iframe
             
                width="560"
                height="315"
                src={videoUrl}
                title="Trailer Video"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrailerModalButton;
