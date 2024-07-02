/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSources, TGenericError } from "../types/error";



const handleDuplicateError = (err: any): TGenericError=> {

  const match = err.message.match(/"([^"]*)"/);


  const extractedMessage = match && match[1];

  const errorSources: TErrorSources= [
    {
      path: '',
      message: `${extractedMessage} is already exists`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid ID',
    errorSources,
  };
};

export default handleDuplicateError;