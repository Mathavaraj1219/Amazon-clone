function SignIn() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">

      <div className="py-6">
        <h1 className="text-3xl font-bold">
          amazon<span className="text-yellow-500">.clone</span>
        </h1>
      </div>

      <div className="bg-white w-[350px] p-6 rounded-md border shadow-sm">
        
        <h2 className="text-xl font-semibold mb-4">
          Sign in or create account
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Enter mobile number or email
          </label>
          <input
            type="text"
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-full font-medium">
          Continue
        </button>

        <p className="text-xs text-gray-600 mt-4">
          By continuing, you agree to Amazon's{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Conditions of Use
          </span>{" "}
          and{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Privacy Notice
          </span>.
        </p>

        <hr className="my-4" />

        <div>
          <p className="font-semibold text-sm">Buying for work?</p>
          <p className="text-blue-600 text-sm hover:underline cursor-pointer">
            Create a free business account
          </p>
        </div>
      </div>

      <div className="mt-10 text-xs text-gray-600 text-center space-x-4">
        <span className="hover:underline cursor-pointer">Conditions of Use</span>
        <span className="hover:underline cursor-pointer">Privacy Notice</span>
        <span className="hover:underline cursor-pointer">Help</span>

        <p className="mt-2">
          © 1996–2026, Amazon.com, Inc. or its affiliates
        </p>
      </div>

    </div>
  );
}

export default SignIn;
