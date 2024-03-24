import { NEWS_URL } from "../../utils/constants";

export async function getNewsList() {
  const response = await fetch(NEWS_URL);
  const json = await response.json();

  return json;
}
