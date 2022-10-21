import "./footer.css";
export default function Footer() {
  const date = new Date();
  return (
    <div className="foot">
      <b>This site is Created by Om </b>@ copyright {date.getFullYear()}
    </div>
  );
}
