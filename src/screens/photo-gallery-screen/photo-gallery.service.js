export async function getListPhotos() {
  const response = await getListDirectory(
    "TsvikAlexander",
    "MobileLabs_data",
    "photos"
  );

  return response;
}

// https://stackoverflow.com/a/70803662
async function getListDirectory(user, repo, directory) {
  const url = `https://api.github.com/repos/${user}/${repo}/git/trees/master`;

  const list = await fetch(url).then((res) => res.json());
  const dir = list.tree.find((node) => node.path === directory);

  if (dir) {
    const list = await fetch(dir.url).then((res) => res.json());

    return list.tree.map((node) => node.path);
  }
}
