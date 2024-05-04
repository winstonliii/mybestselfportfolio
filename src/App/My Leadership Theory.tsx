import NavBar from "@/components/NavBar";
import ThreeJsScene from "./ThreeJsScene";
import ThreeJsContainer from "./ThreeJsContainer";

const MyLeadershipTheory = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}> {/* Ensure the container takes full height */}
      <NavBar />
      <ThreeJsContainer />
      <ThreeJsScene />
      <div style={{
        position: 'absolute',
        width: '100%',
        bottom: '24px',
        textAlign: 'center',
        color: 'white', 
        fontSize: '12px'
      }}>
         <span style={{ fontSize: '24px', fontWeight: 'bold' }}>3D Leadership City Visual</span> <br />
        White = Traits that I hope to grow and cultivate <br />
        Orange = People who have helped me along my journey <br />
        (move your cursor to the center of the screen to stop spin)

      </div>
    </div>
  );
};

export default MyLeadershipTheory;
