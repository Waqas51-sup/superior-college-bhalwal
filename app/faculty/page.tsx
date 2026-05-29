import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const faculty = [
    { name: "Prof. Waqas Goraya", position: "Vice Principal & Physics Department" },

    { name: "Prof. Shabia", position: "Biology Department" },
    { name: "Prof. Ayesha", position: "Biology Department" },

    { name: "Prof. Amna Rao", position: "Chemistry Department" },
    { name: "Prof. Umm-e-Rubab", position: "Chemistry Department" },

    { name: "Prof. Rana Naeem", position: "Physics Department" },
    { name: "Prof. Kainat Azhar", position: "Physics Department" },

    { name: "Prof. Irum", position: "Computer Science Department" },
    { name: "Prof. Mohsin", position: "Computer Science Department" },
    { name: "Prof. Mafia", position: "Computer Science Department" },
    { name: "Prof. Muzamil", position: "Computer Science Department" },

    { name: "Prof. Maqsood", position: "English Department" },
    { name: "Prof. Usman", position: "English Department" },
    { name: "Prof. Ahsan", position: "English Department" },
    { name: "Prof. Bilal", position: "English Department" },

    { name: "Prof. Shahid Kamra", position: "Urdu Department" },
    { name: "Prof. Amjad", position: "Urdu Department" },

    { name: "Prof. Kamran", position: "Mathematics Department" },
    { name: "Prof. Habia", position: "Mathematics Department" },
];

export default function Faculty() {
    return (
        <>
            <Navbar />

            <section
                style={{
                    padding: "80px 40px",
                    backgroundColor: "#f5f8ff",
                    minHeight: "100vh",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        color: "#0B3D91",
                        marginBottom: "50px",
                        fontSize: "48px",
                    }}
                >
                    Our Faculty
                </h1>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                        gap: "25px",
                    }}
                >
                    {faculty.map((member, index) => (
                        <div
                            key={index}
                            style={{
                                background: "white",
                                padding: "25px",
                                borderRadius: "15px",
                                textAlign: "center",
                                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                            }}
                        >
                            <div
                                style={{
                                    width: "90px",
                                    height: "90px",
                                    borderRadius: "50%",
                                    backgroundColor: "#0B3D91",
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    margin: "0 auto 15px",
                                    fontSize: "30px",
                                    fontWeight: "bold",
                                }}
                            >
                                {member.name.charAt(5)}
                            </div>

                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}