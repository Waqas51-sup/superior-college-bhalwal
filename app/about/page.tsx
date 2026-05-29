import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
    return (
        <>
            <Navbar />

            <section
                style={{
                    padding: "80px 40px",
                    backgroundColor: "#f5f8ff",
                }}
            >
                <div
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                    }}
                >
                    <h1
                        style={{
                            textAlign: "center",
                            color: "#0B3D91",
                            fontSize: "50px",
                            marginBottom: "20px",
                        }}
                    >
                        About Superior College Bhalwal
                    </h1>

                    <p
                        style={{
                            textAlign: "center",
                            fontSize: "20px",
                            lineHeight: "1.8",
                            color: "#444",
                        }}
                    >
                        Superior College Bhalwal is committed to providing quality
                        education, character building, and academic excellence. Our goal
                        is to prepare students for higher education, professional careers,
                        and leadership roles in society.
                    </p>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit,minmax(400px,1fr))",
                            gap: "30px",
                            marginTop: "60px",
                        }}
                    >
                        <div
                            style={{
                                background: "white",
                                padding: "30px",
                                borderRadius: "15px",
                                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                            }}
                        >
                            <h2 style={{ color: "#0B3D91" }}>Our Vision</h2>

                            <p>
                                To become a leading institution that nurtures knowledgeable,
                                ethical, and successful individuals who contribute positively
                                to society.
                            </p>
                        </div>

                        <div
                            style={{
                                background: "white",
                                padding: "30px",
                                borderRadius: "15px",
                                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                            }}
                        >
                            <h2 style={{ color: "#0B3D91" }}>Our Mission</h2>

                            <p>
                                To provide modern education, practical learning opportunities,
                                and personal development through dedicated faculty and advanced
                                facilities.
                            </p>
                        </div>
                    </div>

                    <div
                        style={{
                            marginTop: "60px",
                            background: "white",
                            padding: "40px",
                            borderRadius: "15px",
                            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                        }}
                    >
                        <h2
                            style={{
                                color: "#0B3D91",
                                marginBottom: "20px",
                            }}
                        >
                            Vice Principal's Message
                        </h2>

                        <p
                            style={{
                                lineHeight: "1.8",
                                color: "#444",
                            }}
                        >
                            Welcome to Superior College Bhalwal. We believe that education
                            is the foundation of success. Our institution is dedicated to
                            providing students with quality learning, discipline, confidence,
                            and opportunities for growth. Together, we strive to build a
                            brighter future for every student.
                        </p>

                        <h3
                            style={{
                                color: "#0B3D91",
                                marginTop: "20px",
                            }}
                        >
                            Prof. Waqas Goraya
                        </h3>

                        <p>Vice Principal</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}