import Directory from "../../components/directory/directory.component";

const Home = () => {

  const categories = [
    {
      "id": 1,
      "title": "Snowboards",
      "imageUrl": "https://i.ibb.co/r5CRFRv/Epitaph-146-2023-Snowboard.jpg"
    },
    {
      "id": 2,
      "title": "Snowboard-Goggles",
      "imageUrl": "https://i.ibb.co/f16Z6Fm/Proxy-Black-Goggle.jpg"
    },
    {
      "id": 3,
      "title": "Snowboard-Boots",
      "imageUrl": "https://i.ibb.co/5200FTx/1-Samba-ADV-2022-Snowboard-Boots.jpg"
    },
    {
      "id": 4,
      "title": "Snowboard-Jackets",
      "imageUrl": "https://i.ibb.co/4gSvWWF/3-L-Guardian-Shell-Jacket.jpg"
    },
    {
      "id": 5,
      "title": "Snowboard-Bindings",
      "imageUrl": "https://i.ibb.co/hFWK45v/One-2023-Snowboard-Bindings.jpg"
    },
    {
      "id": 6,
      "title": "Snowboard-Pants",
      "imageUrl": "https://i.ibb.co/q174n8H/Spire-II-Pants.jpg"
    },
    {
      "id": 7,
      "title": "Snowboard-Helmets",
      "imageUrl": "https://i.ibb.co/sjQzXYY/Holt-2-Helmet.jpg"
    }
  ];
  

  return (
   <Directory categories={categories} />
  );
}

export default Home;
