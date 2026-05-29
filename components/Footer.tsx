export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#0B3D91",
                color: "white",
                textAlign: "center",
                padding: "40px 20px",
            }}
        >
            <h3>Superior College Bhalwal</h3>

            <p>
                A Tradition of Excellence in Education
            </p>

            <div
                style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                }}
            >
                <a
                    href="https://facebook.com"
                    target="_blank"
                    style={{ color: "white" }}
                >
                    Facebook
                </a>

                <a
                    href="https://instagram.com"
                    target="_blank"
                    style={{ color: "white" }}
                >
                    Instagram
                </a>

                <a
                    href="https://wa.me/923249999582"
                    target="_blank"
                    style={{ color: "white" }}
                >
                    WhatsApp
                </a>
            </div>

            <p style={{ marginTop: "25px" }}>
                © 2026 Superior College Bhalwal. All Rights Reserved.
            </p>
        </footer>
    );
}