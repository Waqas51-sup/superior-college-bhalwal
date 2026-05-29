import Link from "next/link";

export default function Navbar() {
    return (
        <nav
            style={{
                backgroundColor: "#0B3D91",
                padding: "20px 40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <h2
                style={{
                    color: "white",
                    margin: 0,
                }}
            >
                Superior College
            </h2>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                }}
            >
                <Link href="/" style={{ color: "white", textDecoration: "none" }}>
                    Home
                </Link>

                <Link href="/about" style={{ color: "white", textDecoration: "none" }}>
                    About
                </Link>

                <Link href="/programs" style={{ color: "white", textDecoration: "none" }}>
                    Programs
                </Link>

                <Link href="/management" style={{ color: "white", textDecoration: "none" }}>
                    Management
                </Link>

                <Link href="/faculty" style={{ color: "white", textDecoration: "none" }}>
                    Faculty
                </Link>

                <Link href="/admissions" style={{ color: "white", textDecoration: "none" }}>
                    Admissions
                </Link>
                <Link
                    href="/news"
                    style={{
                        color: "white",
                        textDecoration: "none",
                    }}
                >
                    News
                </Link>
                <Link href="/gallery" style={{ color: "white", textDecoration: "none" }}>
                    Gallery
                </Link>

                <Link href="/results" style={{ color: "white", textDecoration: "none" }}>
                    Results
                </Link>
                <Link
                    href="/student-portal"
                    style={{
                        color: "white",
                        textDecoration: "none",
                    }}
                >
                    Student Portal
                </Link>
                <Link href="/contact" style={{ color: "white", textDecoration: "none" }}>
                    Contact
                </Link>
            </div>
        </nav>
    );
}