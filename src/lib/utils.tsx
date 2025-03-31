export const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
      return error.message;
    } else if (
      error &&
      typeof error === "object" &&
      "message" in error &&
      typeof (error as any).message === "string"
    ) {
      return (error as any).message;
    } else if (typeof error === "string") {
      return error;
    } else {
      return "An unknown error occurred.";
    }
  };
  