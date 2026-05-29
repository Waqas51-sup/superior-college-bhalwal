import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NewsPage() {
    const news = [
        {
            title: "Admissions Open 2026",
            date: "May 2026",
            description:
                "Admissions are now open for FSc Pre Medical, FSc Pre Engineering, ICS, ICom and FA.",
        },
        {
            title: "ELS Program Started",
            date: "June 2026",
            description:
                "English Language & Skills Program classes have officially started.",
        },
        {
            title: "Youm-e-Takbeer Celebration",
            date: "28 May 2026",
            description:
                "Superior College Bhalwal celebrated Youm-e-Takbeer with enthusiasm and patriotism.",
        },
    ];

    return (
        <>
            <Navbar />

            <main
                style={{
                    padding: "60px 20px",
                    backgroundColor: "#f4f7fc",
                    minHeight: "100vh",
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
                    News & Events
                </h1>

                <div
                    style={{
                        maxWidth: "1000px",
                        margin: "0 auto",
                    }}
                >
                    {news.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: "white",
                                padding: "30px",
                                marginBottom: "25px",
                                borderRadius: "12px",
                                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                            }}
                        >
                            <h2 style={{ color: "#0B3D91" }}>{item.title}</h2>

                            <p
                                style={{
                                    color: "#666",
                                    fontWeight: "bold",
                                }}
                            >
                                {item.date}
                            </p>

                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </>
    );
}