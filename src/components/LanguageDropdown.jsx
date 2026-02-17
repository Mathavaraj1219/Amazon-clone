
const languages = [ { code: "EN", label: "English - EN" },
                    { code: "HI", label: "हिन्दी - HI" }, 
                    { code: "TA", label: "தமிழ் - TA" }, 
                    { code: "TE", label: "తెలుగు - TE" }, 
                    { code: "KN", label: "ಕನ್ನಡ - KN" }, 
                    { code: "ML", label: "മലയാളം - ML" }, 
                    { code: "BN", label: "বাংলা - BN" }, 
                    { code: "MR", label: "मराठी - MR" }, ];

function LanguageDropdown({ selectedLanguage, setSelectedLanguage }) {
  return (
    <div className=" relative flex flex-col items-start">
      <div className="absolute mt-5 w-72 bg-white rounded-xl shadow-xl z-50 right-0 border text-black ">

        <div className="p-4">
          <h3 className="font-semibold text-gray-700 mb-3">
            Choose Language
          </h3>

          <div className="space-y-3">
            {languages.map((lang) => (
              <label
                key={lang.code}
                className="flex items-center gap-3 cursor-pointer text-gray-700"
              >
                <input
                  type="radio"
                  name="language"
                  checked={selectedLanguage === lang.code}
                  onChange={() => setSelectedLanguage(lang.code)}
                  className="accent-orange-500"
                />
                {lang.label}
              </label>
            ))}
          </div>

          <hr className="my-4" />

          <div className="flex items-center gap-2 text-sm text-gray-700">
          <p>You are shopping on Amazon.in</p>
          </div>

          <p className="text-blue-600 text-sm mt-2 cursor-pointer hover:underline">
            Change country/region
          </p>
        </div>
      </div>
    </div>
  );
}

export default LanguageDropdown;


