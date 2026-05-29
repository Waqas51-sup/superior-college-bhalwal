import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ManagementPage() {
    return (
        <>
            <Navbar />

            <main
                style={{
                    backgroundColor: "#f4f7fc",
                    minHeight: "100vh",
                    padding: "60px 20px",
                }}
            >
                <div
                    style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                        textAlign: "center",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "60px",
                            color: "#0B3D91",
                            marginBottom: "50px",
                        }}
                    >
                        College Management
                    </h1>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                            gap: "30px",
                        }}
                    >
                        {/* Principal */}
                        <div
                            style={{
                                backgroundColor: "white",
                                padding: "30px",
                                borderRadius: "15px",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                            }}
                        >
                            <h2 style={{ color: "#0B3D91" }}>
                                Prof. Rana Naeem
                            </h2>

                            <p
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    color: "#666",
                                }}
                            >
                                Academic Head
                            </p>

                            <p
                                style={{
                                    marginTop: "15px",
                                    color: "#555",
                                    lineHeight: "1.6",
                                }}
                            >
                                Leading academic excellence and institutional development
                                at Superior College Bhalwal.
                            </p>
                        </div>

                        {/* Vice Principal */}
                        <div
                            style={{
                                backgroundColor: "white",
                                padding: "30px",
                                borderRadius: "15px",
                                textAlign: "center",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                            }}
                        >
                            <img
                                src="/management/viceprincipal.jpg.jpeg"
                                alt="Prof. Waqas Goraya"
                                style={{
                                    width: "200px",
                                    height: "200px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    border: "5px solid #0B3D91",
                                    marginBottom: "20px",
                                }}
                            />

                            <h2
                                style={{
                                    color: "#0B3D91",
                                    marginBottom: "10px",
                                }}
                            >
                                Prof. Waqas Goraya
                            </h2>

                            <p
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    color: "#666",
                                }}
                            >
                                Vice Principal
                            </p>

                            <p
                                style={{
                                    marginTop: "15px",
                                    lineHeight: "1.6",
                                    color: "#555",
                                }}
                            >
                                Dedicated to academic excellence, student success, and the
                                continuous development of quality education at Superior
                                College Bhalwal.
                            </p>
                        </div>

                        {/* Academic Coordinator */}
                        <div
                            style={{
                                backgroundColor: "white",
                                padding: "30px",
                                borderRadius: "15px",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                            }}
                        >
                            <h2 style={{ color: "#0B3D91" }}>
                                Prof. Kainat Azhar
                            </h2>

                            <p
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    color: "#666",
                                }}
                            >
                                Academic Coordinator
                            </p>

                            <p
                                style={{
                                    marginTop: "15px",
                                    color: "#555",
                                    lineHeight: "1.6",
                                }}
                            >
                                Coordinating academic activities and ensuring quality
                                learning experiences for students.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <section
                style={{
                    padding: "80px 20px",
                    backgroundColor: "#f4f7fc",
                    textAlign: "center",
                }}
            >
                <h2
                    style={{
                        color: "#0B3D91",
                        fontSize: "48px",
                        marginBottom: "30px",
                    }}
                >
                    Visit Us
                </h2>

                <iframe
                    src="https://www.google.com/maps?q=Superior+College+Bhalwal&output=embed"
                    width="100%"
                    height="450"
                    style={{
                        border: "0",
                        borderRadius: "15px",
                    }}
                    loading="lazy"
                />
            </section>
            <Footer />
        </>
    );
}