import React, { useEffect } from "react";
import useWindowSize from "~/services/hooks/useWindowSize";
import * as commonActionCreators from "app/redux/actions/commonActions";
import { useDispatch } from "react-redux";
const SetDeviceInfo = () => {
  const dispatch = useDispatch();
  const { width, height } = useWindowSize();

  useEffect(() => {
    dispatch(commonActionCreators.handleDeviceResize(width, height));
  }, [width, height]);

  return <div></div>;
};

export default SetDeviceInfo;
