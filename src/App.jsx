import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function App() {
  const [userInput, setUserInput] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle the input change in the text area
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Handle the AI response request
  const handleResponse = async () => {
    if (!userInput.trim()) {
      setAiResponse("Please enter a description or a question.");
      return;
    }

    setIsLoading(true);
    setAiResponse("");

    try {
      const response = await axios.get(
        "http://last-spring-ai-env.eba-mnr3mumu.eu-north-1.elasticbeanstalk.com/api/v1/chat",
        {
          params: { message: userInput },
        }
      );

      setAiResponse(response.data.generation);
    } catch (error) {
      console.error("Error fetching AI response", error);
      setAiResponse("Error generating response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Render response with optional code block styling
  const renderResponse = (response) => {
    const regex = /```([\s\S]*?)```/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(response)) !== null) {
      if (match.index > lastIndex) {
        parts.push(response.slice(lastIndex, match.index));
      }

      parts.push(
        <pre
          key={match.index}
          className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto shadow-md"
        >
          <code>{match[1]}</code>
        </pre>
      );

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < response.length) {
      parts.push(response.slice(lastIndex));
    }

    return <>{parts}</>;
  };

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      {/* Header */}
      <header className="py-6 bg-gradient-to-r  text-center">
        <h1 className="text-4xl font-bold">AI Assistant Platform</h1>
        <p className="mt-2 text-lg">
          Ask AI anything and explore its capabilities
        </p>
      </header>

      {/* Main Content */}
      <main className="py-12 px-6 lg:px-16">
        <section className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            Ask AI Anything
          </h2>
          <textarea
            value={userInput}
            onChange={handleInputChange}
            placeholder="Type your question or description here..."
            rows="5"
            className="w-full p-4 text-lg border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          ></textarea>
          <button
            onClick={handleResponse}
            className={`w-full mt-4 py-3 text-lg font-semibold text-white rounded-lg transition ${
              isLoading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-500"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Get AI Response"}
          </button>

          {aiResponse && (
            <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-lg overflow-y-auto max-h-96">
              {renderResponse(aiResponse)}
            </div>
          )}
        </section>

        {/* Explore AI Models */}
        <section className="mt-12">
          <h2 className="text-4xl font-semibold text-center mb-8">
            Explore AI Models
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* DALL-E */}
            <Link
              to="/image"
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4">DALL-E 3</h3>
              <img
                src="https://images.ctfassets.net/kftzwdyauwt9/ed21faee-ce44-4d91-f5cc39941d47/bdd3983530857e93d205304e219e2d95/dall-e.jpg?w=3840&q=90&fm=webp"
                alt="DALL-E"
                className="rounded-lg mb-4"
              />
              <p>
                Generate stunning, high-quality images from text descriptions.
              </p>
            </Link>

            {/* Audio-to-Text */}
            <Link
              to="/audio"
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4">Audio-to-Text</h3>
              <img
                src="https://images.ctfassets.net/kftzwdyauwt9/9c95036b-c2f5-4af8-ef2dfdd10ec8/ab4206ed7dbd28ac30f228499ca5766e/chatgpt-can-now-see-hear-and-speak-alt.jpg?w=3840&q=90&fm=webp"
                alt="Audio-to-Text"
                className="rounded-lg mb-4"
              />
              <p>
                Convert spoken language into accurate, readable text instantly.
              </p>
            </Link>

            {/* Recipe Generator */}
            <Link
              to="/recipe"
              className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4">
                AI Recipe Generator
              </h3>
              <img
                src="https://images.ctfassets.net/kftzwdyauwt9/21GoFN3USoFH1VE6ERRD4g/b6934085e667c97956fcfde5db305a99/Search_Card.png?w=3840&q=90&fm=webp"
                alt="Recipe Generation"
                className="rounded-lg mb-4"
              />
              <p>
                Create personalized recipes based on ingredients and
                preferences.
              </p>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 bg-gray-200 text-center text-gray-700">
        <p>&copy; 2024 AI Assistant Platform. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
