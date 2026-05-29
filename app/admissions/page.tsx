import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Admissions() {
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
                    Online Admission Form
                </h1>

                <p
                    style={{
                        textAlign: "center",
                        marginBottom: "40px",
                        fontSize: "18px",
                    }}
                >
                    Apply for admission at Superior College Bhalwal
                </p>

                <form
                    style={{
                        maxWidth: "800px",
                        margin: "0 auto",
                        backgroundColor: "white",
                        padding: "40px",
                        borderRadius: "12px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                    }}
                >
                    <div style={{ marginBottom: "20px" }}>
                        <label>Student Name</label>
                        <input
                            type="text"
                            placeholder="Enter Student Name"
                            style={inputStyle}
                        />
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <label>Father Name</label>
                        <input
                            type="text"
                            placeholder="Enter Father Name"
                            style={inputStyle}
                        />
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <label>Mobile Number</label>
                        <input
                            type="tel"
                            placeholder="03XX-XXXXXXX"
                            style={inputStyle}
                        />
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <label>Email Address</label>
                        <input
                            type="email"
                            placeholder="example@gmail.com"
                            style={inputStyle}
                        />
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <label>Program</label>
                        <select style={inputStyle}>
                            <option>FSc Pre Medical</option>
                            <option>FSc Pre Engineering</option>
                            <option>ICS</option>
                            <option>ICOM</option>
                            <option>FA</option>
                            <option>FA-IT</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <label>Previous Qualification</label>
                        <input
                            type="text"
                            placeholder="Matric / O-Level"
                            style={inputStyle}
                        />
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <label>Marks / Percentage</label>
                        <input
                            type="text"
                            placeholder="e.g. 1050 / 1100"
                            style={inputStyle}
                        />
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <label>Address</label>
                        <textarea
                            rows={4}
                            placeholder="Enter Complete Address"
                            style={{
                                ...inputStyle,
                                resize: "none",
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            backgroundColor: "#0B3D91",
                            color: "white",
                            padding: "15px 30px",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            width: "100%",
                            fontSize: "18px",
                        }}
                    >
                        Submit Admission Form
                    </button>
                </form>
            </section>

            <Footer />
        </main>
    );
}

const inputStyle = {
    width: "100%",
    padding: "12px",
    marginTop: "8px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    fontSize: "16px",
};