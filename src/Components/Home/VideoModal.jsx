import React from 'react';

const VideoModal = ({ isOpen, onClose, videoId }) => {
    if (!isOpen) return null; // Render nothing if modal is not open

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg overflow-hidden max-w-full md:max-w-3xl">
                <div className="relative pb-9/16">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/uveyVkCkflY?si=cIj3JWI37ULac7sq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <button
                    className="absolute top-0 right-0 m-4 p-2 bg-gray-300 rounded-full hover:bg-gray-400 text-gray-800 focus:outline-none z-10"
                    onClick={onClose}
                >
                    &#10005;
                </button>
            </div>
        </div>
    );
};

export default VideoModal;
