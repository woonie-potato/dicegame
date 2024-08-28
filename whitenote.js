import ReactDOM from "react-dom/client";

const product = "Macbook";
const model = "Air";
const url =
  "https://commons.wikimedia.org/wiki/File:MacBook_with_Retina_Display_(cropped).jpg";
const root = ReactDOM.createRoot(document.getElementById("root"));

function handleClick(e) {
  alert("곧 도착합니다.");
}

root.render(
  <>
    <h1>{product + " " + model}</h1>
    <img src={url} alt="제품 사진" />
    <button onClick={handleClick}>확인</button>
  </>
);
