import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section
        style={{
          height: "70vh",
          backgroundImage: "url('/slider/building.jpg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            color: "white",
          }}
        >
          <img
            src="/slider/logo.png.jpeg"
            alt="Superior College Logo"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "4px solid white",
              marginBottom: "20px",
            }}
          />

          <h1
            style={{
              fontSize: "56px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            Superior College Bhalwal
          </h1>

          <p
            style={{
              fontSize: "24px",
              marginBottom: "40px",
            }}
          >
            A Tradition of Excellence in Education
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Link href="/admissions">
              <button
                style={{
                  padding: "15px 40px",
                  backgroundColor: "#FFD700",
                  color: "black",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Apply Now
              </button>
            </Link>

            <Link href="/programs">
              <button
                style={{
                  padding: "15px 40px",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "2px solid white",
                  borderRadius: "10px",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Explore Programs
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#ffffff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            color: "#0B3D91",
            marginBottom: "20px",
          }}
        >
          Welcome to Superior College Bhalwal
        </h2>

        <p
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#555",
          }}
        >
          Superior College Bhalwal is committed to academic excellence,
          innovation, and character building. We provide quality education
          through highly qualified faculty, modern laboratories, advanced
          learning facilities, and a student-centered environment. Our
          programs include FSc Pre-Medical, FSc Pre-Engineering, ICS, ICom,
          FA, and FA-IT, preparing students for higher education and
          successful professional careers.
        </p>
      </section>

      {/* PROGRAMS SECTION */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#F4F7FC",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0B3D91",
            fontSize: "42px",
            marginBottom: "50px",
          }}
        >
          Programs Offered
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            "FSc Pre Medical",
            "FSc Pre Engineering",
            "ICS",
            "ICOM",
            "FA",
            "FA-IT",
            "DIT",
          ].map((program) => (
            <div
              key={program}
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "15px",
                textAlign: "center",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  color: "#0B3D91",
                  fontSize: "24px",
                }}
              >
                {program}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <h2
          style={{
            color: "#0B3D91",
            fontSize: "42px",
            marginBottom: "40px",
          }}
        >
          Why Choose Superior College?
        </h2>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          <div style={cardStyle}>
            <h3>Qualified Faculty</h3>
            <p>Experienced and dedicated teachers.</p>
          </div>

          <div style={cardStyle}>
            <h3>Modern Labs</h3>
            <p>Well-equipped Biology, Chemistry, Physics & Computer Labs.</p>
          </div>

          <div style={cardStyle}>
            <h3>Career Guidance</h3>
            <p>Helping students achieve academic and career goals.</p>
          </div>

          <div style={cardStyle}>
            <h3>Excellent Results</h3>
            <p>Strong academic performance and achievements.</p>
          </div>
        </div>
      </section>
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#0B3D91",
          color: "white",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "30px",
            textAlign: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div>
            <h1>1500+</h1>
            <p>Students</p>
          </div>

          <div>
            <h1>100+</h1>
            <p>Faculty Members</p>
          </div>

          <div>
            <h1>20+</h1>
            <p>Years of Excellence</p>
          </div>

          <div>
            <h1>95%</h1>
            <p>Success Rate</p>
          </div>
        </div>
      </section>
      <a
        href="https://wa.me/923249999582"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          color: "white",
          padding: "15px 20px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
          zIndex: 1000,
        }}
      >
        WhatsApp Admissions
      </a>
      <Footer />
    </>
  );
}

const cardStyle = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "15px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
};