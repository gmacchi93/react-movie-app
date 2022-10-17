import React from "react";

type Props = {};

const GenericErrorMessage = (props: Props) => {
  return (
    <p className="py-5 text-red-500 text-center">
      Sorry! An error occurred. Please, try again later...
    </p>
  );
};

export default GenericErrorMessage;
