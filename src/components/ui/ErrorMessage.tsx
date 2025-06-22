import { Typography } from "antd";

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 flex-col">
      <Typography.Text type="danger" className="text-xl mb-4 font-semibold">
        Erreur lors du chargement des pays
      </Typography.Text>
      <Typography.Text type="secondary" className="text-base text-center max-w-md">
        {message}
      </Typography.Text>
    </div>
  );
};
