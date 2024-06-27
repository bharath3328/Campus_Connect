import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { clearNotification } from './notificationSlice';

export const useNotifications = () => {
    const dispatch = useDispatch();
    const notification = useSelector((state) => state.notification);

    useEffect(() => {
        if (notification.message) {
          switch (notification.type) {
            case 'success':
              toast.success(notification.message,{
                position: "top-center"
              });
              break;
            case 'error':
              toast.error(notification.message,{
                position: "top-center"
              });
              break;
            case 'info':
              toast.info(notification.message,{
                position: "top-center"
              });
              break;
            case 'warning':
              toast.warning(notification.message,{
                position: "top-center"
              });
              break;
            default:
              toast(notification.message,{
                position: "top-center"
              });
          }
          dispatch(clearNotification());
        }
      }, [notification, dispatch]);
};