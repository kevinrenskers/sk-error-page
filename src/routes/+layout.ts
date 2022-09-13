//import { error } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async () => {
  //throw error(401, "Invalid token.");
  throw { status: 401, message: "Invalid token!" };
};
