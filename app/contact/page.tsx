import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
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
                    }}
                >
                    <h1
                        style={{
                            textAlign: "center",
                            color: "#0B3D91",
                            fontSize: "60px",
                            marginBottom: "50px",
                        }}
                    >
                        Contact Us
                    </h1>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "40px",
                            marginBottom: "50px",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "white",
                                padding: "30px",
                                borderRadius: "12px",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                            }}
                        >
                            <h2 style={{ color: "#0B3D91" }}>Get In Touch</h2>

                            <p>
                                <strong>Address:</strong><br />
                                Ajnala Road, Near Sabrina Marriage Hall, Bhalwal
                            </p>

                            <p>
                                <strong>Phone:</strong><br />
                                0304-1439999<br />
                                0324-9999582
                            </p>

                            <p>
                                <strong>Email:</strong><br />
                                info@superiorcollege.edu.pk
                            </p>

                            <p>
                                <strong>Office Hours:</strong><br />
                                Monday – Saturday<br />
                                8:00 AM – 4:00 PM
                            </p>
                        </div>

                        <div
                            style={{
                                backgroundColor: "white",
                                padding: "20px",
                                borderRadius: "12px",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                            }}
                        >
                            <iframe
                                src="https://www.google.com/maps?q=Superior+College+Bhalwal&output=embed"
                                width="100%"
                                height="350"
                                style={{
                                    border: "0",
                                    borderRadius: "10px",
                                }}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}