function MeaningsModal({ meanings }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h2>Meanings</h2>
        <ul>
          {Object.entries(meanings).map(([word, meaning]) => (
            <li key={word}>
              <strong>{word}:</strong> {}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MeaningsModal;
