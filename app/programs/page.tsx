import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Programs() {
    const programs = [
        {
            title: "FSc Pre-Medical",
            desc: "Comprehensive preparation for Medical and Health Sciences.",
        },
        {
            title: "FSc Pre-Engineering",
            desc: "Strong foundation for Engineering and Technology fields.",
        },
        {
            title: "ICS",
            desc: "Computer Science, Programming and IT focused education.",
        },
        {
            title: "ICOM",
            desc: "Commerce and Business education for future professionals.",
        },
        {
            title: "FA / FA-IT",
            desc: "Arts and Information Technology integrated programs.",
        },
    ];

    return (
        <>
            <Navbar />

            <section
                style={{
                    padding: "80px 40px",
                    backgroundColor: "#f5f8ff",
                    minHeight: "80vh",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        color: "#0B3D91",
                        fontSize: "50px",
                        marginBottom: "15px",
                    }}
                >
                    Academic Programs
                </h1>

                <p
                    style={{
                        textAlign: "center",
                        color: "#666",
                        marginBottom: "50px",
                    }}
                >
                    Explore our diverse range of intermediate programs.
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
                        gap: "30px",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    }}
                >
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            style={{
                                background: "white",
                                padding: "30px",
                                borderRadius: "15px",
                                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                            }}
                        >
                            <h2
                                style={{
                                    color: "#0B3D91",
                                    marginBottom: "15px",
                                }}
                            >
                                {program.title}
                            </h2>

                            <p>{program.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}