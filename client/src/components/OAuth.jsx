import { app } from "../firebase";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
function OAuth() {
  const handleGoogleFlow = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const res = await signInWithPopup(auth, provider);
      console.log("Google auth response", res);
    } catch (error) {
      console.log("Error google signin", error);
    }
  };

  return (
    <button
      onClick={handleGoogleFlow}
      type="button"
      className="bg-red-600 text-white py-3 rounded-xl focus:outline-none w-full hover:opacity-90 uppercase"
    >
      Continue with google
    </button>
  );
}

export default OAuth;
