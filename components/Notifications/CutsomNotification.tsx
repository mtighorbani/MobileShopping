
import { NotificationInstance } from "antd/es/notification/interface";

interface NotificationProps {
  api: NotificationInstance;
  type: "success" | "info" | "warning" | "error";
  message?: string | undefined;
  description?: string | undefined;
}

export const customNotification = (props: NotificationProps) => {
  props.api[props.type]({
    message: props.message,
    description: props.description,
    duration: 3,
    placement: "topLeft",
  });
};
