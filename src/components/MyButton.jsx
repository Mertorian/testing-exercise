export function MyButton({ text, onClick }) {
  return (
    <div style={{ background: "green" }} data-testid="my-button-container">
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
