import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function StudentPortal() {
    return (
        <>
            <Navbar />

            <section
                style={{
                    padding: "80px 20px",
                    minHeight: "100vh",
                    backgroundColor: "#f5f8ff",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        color: "#0B3D91",
                        fontSize: "48px",
                        marginBottom: "20px",
                    }}
                >
                    Student Portal
                </h1>

                <div
                    style={{
                        maxWidth: "500px",
                        margin: "40px auto",
                        backgroundColor: "white",
                        padding: "40px",
                        borderRadius: "15px",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    }}
                >
                    <input
                        type="text"
                        placeholder="Roll Number"
                        style={inputStyle}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        style={inputStyle}
                    />

                    <button
                        style={{
                            width: "100%",
                            padding: "15px",
                            backgroundColor: "#0B3D91",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            fontSize: "18px",
                            cursor: "pointer",
                        }}
                    >
                        Login
                    </button>
                </div>
            </section>

            <Footer />
        </>
    );
}

const inputStyle = {
    width: "100%",
    padding: "15px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
};