import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Gallery() {
    const images = [
        "/labs/bio1.jpg.jpeg",
        "/labs/bio2.jpg.jpeg",
        "/labs/bio3.jpg.jpeg",
        "/labs/bio4.jpg.jpeg",

        "/labs/chem1.jpg.jpeg",
        "/labs/chem2.jpg.jpeg",
        "/labs/chem3.jpg.jpeg",
        "/labs/chem4.jpg.jpeg",
        "/labs/chem5.jpg.jpeg",
        "/labs/chem6.jpg.jpeg",

        "/labs/comp1.jpg.jpeg",
        "/labs/comp2.jpg.jpeg",
        "/labs/comp3.jpg.jpeg",
        "/labs/comp4.jpg.jpeg",
        "/labs/comp5.jpg.jpeg",
        "/labs/comp6.jpg.jpeg",
        "/labs/comp7.jpg.jpeg",
        "/labs/comp8.jpg.jpeg",
        "/labs/comp9.jpg.jpeg",

        "/labs/physics1.jpg.jpeg",
        "/labs/physics2.jpg.jpeg",
        "/labs/physics3.jpg.jpeg",
        "/labs/physics4.jpg.jpeg",
    ];

    return (
        <main>
            <Navbar />

            <section
                style={{
                    padding: "60px 40px",
                    backgroundColor: "#f5f8ff",
                    minHeight: "100vh",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        color: "#0B3D91",
                        fontSize: "48px",
                        marginBottom: "15px",
                    }}
                >
                    Campus Gallery
                </h1>

                <p
                    style={{
                        textAlign: "center",
                        marginBottom: "40px",
                        fontSize: "18px",
                    }}
                >
                    Biology Lab • Chemistry Lab • Physics Lab • Computer Lab
                </p>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
                        gap: "25px",
                    }}
                >
                    {images.map((img, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: "white",
                                borderRadius: "12px",
                                overflow: "hidden",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                            }}
                        >
                            <img
                                src={img}
                                alt="Lab"
                                style={{
                                    width: "100%",
                                    height: "250px",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}