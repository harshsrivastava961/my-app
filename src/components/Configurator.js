import { useCustomization } from "./context/Customization";

function Configurator() {
  const { material, setMaterial,  chairColor, setChairColor, chairColors } = useCustomization();
  console.log("material", material);
  return (
    <>
    <div>
    <h1>Texture</h1>
    <div onClick={() => setMaterial("Leather")}>Leather</div>
    <div onClick={() => setMaterial("Fabric")}>Fabric</div>
     
      </div>
      <div>
      <h1 >Chair color</h1>
        <div >
          {chairColors.map((item, index) => (
            <div
              key={index}
              onClick={() => setChairColor(item)}
            >
              <div
              />
              <div >{item.name}</div>
            </div>
          ))}
        </div>
        </div>
    </>
  );
}

export default Configurator;
