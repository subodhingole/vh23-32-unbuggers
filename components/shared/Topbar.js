import Link from "next/link";

function Topbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2rem 4rem",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Link legacyBehavior href="/">
        <a style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* You might replace this with an img tag if you don't want to use next/image */}
          {/* <img src="/logo.svg" alt="logo" width={28} height={28} /> */}
          <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Linguify</p>
        </a>
      </Link>

      <div>
        <Link legacyBehavior href="/profile">
          <a style={{ marginRight: "1rem" }}>Profile</a>
        </Link>
        <Link legacyBehavior href="/logout">
          <a>Logout</a>
        </Link>
      </div>
    </nav>
  );
}

export default Topbar;
