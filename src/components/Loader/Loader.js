import React from "react";
import { RotatingLines } from "react-loader-spinner";
import { LoaderWrap } from "./Loader.styled";

export const LoaderSpinner = () => {
  return (
    <LoaderWrap>
      <RotatingLines
        strokeColor="orangered"
        strokeWidth="5"
        animationDuration="0.75"
        width="120"
        visible={true}
      />
    </LoaderWrap>
  )
}
