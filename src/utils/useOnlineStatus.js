import { useEffect, useEffectEvent, useState } from "react";

export const useOnlineStatus = () => {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    const handleOnlineStatus = () => setOnline(true);
    const handleOfflineStatus = () => setOnline(false);

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  }, []);

  return online;
};
