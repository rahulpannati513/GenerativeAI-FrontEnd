import { useState } from "react";
import axios from "axios";

const AudioUploader = () => {
  const [file, setFile] = useState(null);
  const [transcription, setTranscription] = useState("");
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(""); // For error state

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    setLoading(true); // Start loading
    setError(""); // Clear any previous error

    const formData = new FormData();
    formData.append("file", file);

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
    const apiEndpoint = "/api/v1/send-MultiLangAudio";
    const apiUrl = apiBaseUrl + apiEndpoint;

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Assuming the response has transcription directly
      setTranscription(response.data.transcription || response.data); // Adjust according to the API response
      setLoading(false); // Stop loading after successful upload
    } catch (error) {
      console.error("Error Transcribing audio", error);
      setError("Failed to transcribe the audio. Please try again.");
      setLoading(false); // Stop loading on error
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 text-black min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-3xl p-8 bg-white rounded-2xl shadow-xl">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-8">
          Audio to Text Transcriber
        </h1>

        {/* File Upload Section */}
        <input
          className="w-full text-lg p-4 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
        />

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="w-full sm:w-auto text-lg font-semibold bg-blue-500 hover:bg-blue-700 text-white py-3 px-8 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 transition disabled:bg-blue-300"
          disabled={loading} // Disable button during loading
        >
          {loading ? "Uploading..." : "Upload & Transcribe"}
        </button>

        {/* Error Message */}
        {error && (
          <div className="mt-4 text-red-500 text-lg text-center">{error}</div>
        )}

        {/* Transcription Result Section */}
        <div className="w-full mt-8 p-6 bg-gray-100 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-blue-600 underline mb-4">
            Transcription Result
          </h2>
          <p className="text-lg text-gray-800 whitespace-pre-wrap break-words text-center">
            {transcription || "Your transcription result will appear here."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AudioUploader;
