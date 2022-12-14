import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}- XYZ`;
  }, [title]);
};

export default useTitle;
