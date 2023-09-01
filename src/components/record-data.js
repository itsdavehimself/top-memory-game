import recordDataArr from "./records-arr";

export default async function recordDataAPI(index) {
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
