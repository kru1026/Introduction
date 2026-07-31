
export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f7fb",
        minHeight: "100vh",
        padding: "40px",
        color: "#333",
      }}
    >
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "10px",
          padding: "40px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <header
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
            <h1
              style={{
              color: "#2563eb",
              margin: 0,
            }}
          >
            Keith Ru
            </h1>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "#555",
              margin: 0,
            }}
          >
            - Full Stack Developer
          </h2>
        </header>
        <hr /><br />

        <section>
          <a
            href={`${process.env.NEXT_PUBLIC_API_URL}/api/aboutme`}
            style={{ textDecoration: "none" }}
          >
          <h2 style={{ marginBottom: "10px" }}>About Me</h2></a>
        </section>

        <hr />

        <section style={{marginBottom: "15px"}}>
          <a
            href={`${process.env.NEXT_PUBLIC_API_URL}/api/tskills`}
            style={{ textDecoration: "none" }}
          ><h2 style={{ marginTop: "15px", marginBottom: "10px" }}>Technical Skills </h2></a>
        </section>

        <hr />

        <section>
          <a
            href={`${process.env.NEXT_PUBLIC_API_URL}/api/projects`}
            style={{ textDecoration: "none" }}
          ><h2 style={{ marginTop: "15px", marginBottom: "10px" }}>Projects</h2></a>
        </section>

        <hr />

        <section>
          <a
            href={`${process.env.NEXT_PUBLIC_API_URL}/api/hireme`}
            style={{ textDecoration: "none" }}
          ><h2 style={{ marginTop: "15px", marginBottom: "7px" }}>Why Hire Me?</h2></a>
        </section>

        <hr />

        <section>
          <a
            href={`${process.env.NEXT_PUBLIC_API_URL}/api/contact`}
            style={{ textDecoration: "none" }}
          ><h2 style={{ marginTop: "10px", marginBottom: "7px" }}>Contact</h2></a><hr />
        </section>
      </section>
    </main>
  );
}