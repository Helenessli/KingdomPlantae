import "./starFive.css";

export default function Razor({ hasBomb }: { hasBomb: boolean }) {
  return <div 
    style = {{ backgroundColor : (hasBomb) ? "910b0b" : "" }} 
  >
    <div className = "StarFive animate-spin"/>
  </div>;
}