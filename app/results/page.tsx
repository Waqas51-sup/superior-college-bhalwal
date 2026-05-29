import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Results() {
    return (
        <main>
            <Navbar />

            <section
                style={{
                    padding: "60px 20px",
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
                    Student Results
                </h1>

                <p
                    style={{
                        textAlign: "center",
                        marginBottom: "40px",
                        fontSize: "18px",
                    }}
                >
                    Enter your Roll Number to view results
                </p>

                <div
                    style={{
                        maxWidth: "700px",
                        margin: "0 auto",
                        backgroundColor: "white",
                        padding: "40px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    }}
                >
                    <label>Roll Number</label>

                    <input
                        type="text"
                        placeholder="Enter Roll Number"
                        style={{
                            width: "100%",
                            padding: "12px",
                            marginTop: "10px",
                            marginBottom: "20px",
                            border: "1px solid #ccc",
                            borderRadius: "6px",
                        }}
                    />

                    <button
                        style={{
                            width: "100%",
                            padding: "15px",
                            backgroundColor: "#0B3D91",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontSize: "18px",
                        }}
                    >
                        Search Result
                    </button>

                    <div
                        style={{
                            marginTop: "30px",
                            padding: "20px",
                            backgroundColor: "#f8f9fa",
                            borderRadius: "8px",
                        }}
                    >
                        <h3>Sample Result</h3>
                        <p><strong>Name:</strong> Ali Hassan</p>
                        <p><strong>Program:</strong> FSc Pre Medical</p>
                        <p><strong>Marks:</strong> 1030 / 1100</p>
                        <p><strong>Grade:</strong> A+</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}