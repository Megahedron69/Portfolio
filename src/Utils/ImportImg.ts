const memoGal = import.meta.glob("../assets/images/FinalMemories/*.{png,jpg}");
const compGal = import.meta.glob(
  "../assets/images/AttCompanionFinal/*.{png,jpg}"
);
const ecoGal = import.meta.glob("../assets/images/Ecosorter/*.{png,jpg}");
const attenGal = import.meta.glob("../assets/images/FinalAttendex/*.{png,jpg}");
const wthrGal = import.meta.glob("../assets/images/FinalWeather/*.{png,jpg}");
const miscellaGal = import.meta.glob(
  "../assets/images/MiscellaFinal/*.{png,jpg}"
);

async function collectImages(glob) {
  const promises = Object.keys(glob).map(async (path) => {
    const module = await glob[path]();
    return module.default;
  });
  return Promise.all(promises);
}

const collectAllImages = async () => {
  const [memoImgs, compImgs, ecoImgs, attenImgs, wthrImgs, miscellaImgs] =
    await Promise.all([
      collectImages(memoGal),
      collectImages(compGal),
      collectImages(ecoGal),
      collectImages(attenGal),
      collectImages(wthrGal),
      collectImages(miscellaGal),
    ]);

  return { memoImgs, compImgs, ecoImgs, attenImgs, wthrImgs, miscellaImgs };
};

const { memoImgs, compImgs, ecoImgs, attenImgs, wthrImgs, miscellaImgs } =
  await collectAllImages();
export { memoImgs, compImgs, ecoImgs, attenImgs, wthrImgs, miscellaImgs };
