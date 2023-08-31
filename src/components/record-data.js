const recordDataArr = [
  { MBID: "5d850f71-e51e-44be-96c8-51cc305f3596" }, // good Kid, m.A.A.d. City - Kendrick Lamar 1
  { MBID: "e9579f60-8e27-425e-a8c7-d9f650358f9c" }, // Radical - Every Time I Die 2
  { MBID: "8889bd6c-002c-4ac8-afd8-3caa64a64b5f" }, // Moments Elsewhere - Johnny Booth 3
  { MBID: "2790bd40-2eac-4f1d-9618-e029b0cfc2e5" }, // Controller - Misery Signals 4
  { MBID: "be6952e2-6414-4ea0-9b60-ed30b250fd6b" }, // BRAVE - JOYRYDE 5
  { MBID: "acff1731-81af-4046-aed1-aea7c841b16e" }, // Persona - Rival Consoles 6
  { MBID: "e3ace496-94e1-4f0e-995c-4adbc081aa61" }, // Rage - Attila 7
  { MBID: "69204334-10ff-4b6d-b986-da242a9dcb0b" }, // Goodbye to the Gallows - Emmure 8
  { MBID: "03c70688-a7f8-4848-9e4a-9b87d797d7d7" }, // Ruinism - Lapalux 9
  { MBID: "f60ad8ee-50e6-46a2-bdcc-e938b9802413" }, // 95 - BEAM 10
  { MBID: "6438e9ba-41ad-478c-81f1-323dcb212903" }, // Currents - Tame Impala 11
  { MBID: "4aabceab-5fc3-4d59-b3f2-a994c6a9f92f" }, // Count Your Blessings - Bring me the Horizon 12
  { MBID: "2e5d3d3f-bf12-43eb-99bc-94a69fa057fa" }, // Watching Movies - Mac Miller 13
  { MBID: "27b5199f-11e2-472f-9efc-8df069d9b4c7" }, // Long Live - The Chariot 14
  { MBID: "e32b67d6-bbd0-42a5-bca9-9bd33e927d74" }, // Scary Monsters and Nice Sprites - Skrillex 15
  { MBID: "c17518fd-f8e5-42ab-b875-a3d1caaf0a73" }, // A View of U - Machinedrum 16
  { MBID: "6b7bcb67-336f-404c-b5db-a60de43aa754" }, // Allegiance - As Blood Runs Black 17
  { MBID: "c33b3b71-3f08-40e8-be5d-cd29b1157454" }, // Apricots - Bicep 18
  { MBID: "d0625be2-7d18-4ed8-a121-352ba282bd78" }, // This Will Destroy You - This Will Destroy You 19
  { MBID: "c7e34161-37cd-40d4-aec8-f5b361c0fa92" }, // Aleph - Gesaffelstein 20
  { MBID: "d50472b3-95ea-4772-9211-caf26426aa59" }, // For Those Who Have Heart - A Day to Remember 21
  { MBID: "3805f31e-e6e1-4794-9747-63e5bf9ca7c8" }, // Plagues - The Devil Wears Prada 22
];

function random(max) {
  return Math.floor(Math.random() * max);
}

export default async function recordDataAPI() {
  const index = random(18);
  const coverArtURL = `https://coverartarchive.org/release/${recordDataArr[index].MBID}`;
  const albumInfoURL = `https://musicbrainz.org/ws/2/release/${recordDataArr[index].MBID}?inc=artist-credits+labels+discids+recordings&fmt=json`;
  const userAgent = "MemoryGame/1.0.0 (davidsmolen@gmail.com)";

  return Promise.all([
    fetch(coverArtURL, {
      mode: "cors",
      headers: { "User-Agent": userAgent },
    }),
    fetch(albumInfoURL, {
      mode: "cors",
      headers: { "User-Agent": userAgent },
    }),
  ])
    .then(function (responses) {
      if (!responses[0].ok || !responses[1].ok) {
        throw new Error("Network response was not OK");
      }
      return Promise.all([responses[0].json(), responses[1].json()]);
    })
    .then(function ([coverArtResponse, albumInfoResponse]) {
      const albumData = {
        imageURL: coverArtResponse.images[0].thumbnails.small,
        artistName: albumInfoResponse["artist-credit"][0].artist.name,
        albumName: albumInfoResponse.title,
        albumYear: albumInfoResponse.date.split("-")[0],
      };
      return albumData;
    });
}
