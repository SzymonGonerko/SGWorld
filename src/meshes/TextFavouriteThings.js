import {Text} from "@react-three/drei";
import OpenSans from "../fonts/OpenSans.ttf"

const plotOfTheBookThief = "This is the story told by The Death. The protagonist is little girl, Liesel Meminger, who live's during the Second World War. The Death describes the adventures and feelings of little Liesel. Her friendship with a Jew, the story of her first kiss. Death in this book is not bad. He's just an observer. What I like most about this book is that it leaves behind all seemingly important things and just focuses on little Liesel's inner world of feelings."


export const TextFavouriteThings = () => {
    const initialStyles = {
      fontSize: 0.13,
      color: "black",
      font: OpenSans,
    };
    const header = {
        ...initialStyles,
        fontSize: 0.21
    }
    const textAuthor = {
        ...initialStyles,
        fontSize: 0.1,
        letterSpacing: 0.07,
    }
    const textTitle = {
        ...initialStyles,
        fontSize: 0.09,
        letterSpacing: 0.07,
    }
    const textPlot = {
        ...initialStyles,
        fontSize: 0.04,
        letterSpacing: 0.07,
        maxWidth: 0.8,
        textAlign: "justify"
    
    }


    return (
    <group position={[-3.36, 1.3, -5]} rotation={[0, Math.PI / 2, 0]}>
        <group position={[2, 0, 0]}>
            <Text {...header} text={"MY FAVOURITE THINGS"} position={[0, 0.8, 0]}/>
            <group position={[-0.9, 0.45, 0]}>
                <Text {...textAuthor} text={"Markus Zusak,"} position={[0, 0, 0]}/>
                <Text {...textTitle} text={'"The Book Thief"'} position={[-0.01, -0.11, 0]}/>
                <Text {...textPlot} text={plotOfTheBookThief} position={[-0.01, -0.45, 0]}/>
            </group>
            

        </group>
    </group>);
  }