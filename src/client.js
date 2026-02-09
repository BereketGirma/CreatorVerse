import { createClient } from "@supabase/supabase-js";

const URL = "https://hwoasannirekwpdpxzgk.supabase.co";
const API_KEY = "sb_publishable_CX3TY3_2qR3pnKE2JtzK_A_fQJE6Tmt"

export const supabase = createClient(URL, API_KEY);
