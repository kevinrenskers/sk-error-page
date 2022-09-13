import type { HandleServerError } from "@sveltejs/kit";

export const handleError: HandleServerError = ({ error }) => {
  console.log(error);
};
