import { Spin } from "antd";

export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="text-center">
        <Spin size="large" />
        <p className="text-lg text-gray-600 mt-4">Chargement des pays...</p>
      </div>
    </div>
  );
};
