import { PencilIcon } from "lucide-react";

const AccountSettings = () => {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm rounded-lg shadow-md">
        <div className="bg-white px-6 py-4 rounded-t-lg">
          <h1 className="text-lg font-semibold text-gray-900">
            Account Settings
          </h1>
        </div>

        <div className="p-6 bg-gray-100 rounded-b-lg">
          <div className="mt-1 flex items-center space-x-4 border-b pb-4">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Profile"
                className="w-14 h-14 rounded-full border"
              />
              <button className="absolute bottom-0 right-0 bg-white border rounded-full p-1 shadow-md hover:bg-gray-100">
                <PencilIcon className="w-2 h-2 text-gray-600" />
              </button>
            </div>
            <div>
              <h2 className="text-sm font-medium text-gray-900">
                Vrushabh Mowade
              </h2>
              <p className="text-sm text-gray-600">vrushabhmowade@gmail.com</p>
            </div>
          </div>

          <p id="description" className="mt-4 text-sm text-gray-600">
            I am Vrushabh Mowade, a passionate full-stack web developer with a
            strong foundation in modern web technologies. I enjoy building
            scalable, user-friendly applications.
          </p>

          <div className="border-t border-dashed mt-6 h-40 "></div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
