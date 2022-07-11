import {Text} from "@react-three/drei";
import OpenSans from "../fonts/OpenSans.ttf"

const plotOfTheBookThief = "This is the story told by The Death. Little Liesel Meminger live's during the Second World War. The Death describes her adventures. Her friendship with a Jew, her first kiss. Death in this book is not bad. He's just an observer. Author leaves behind all important things and just focuses on childish sensitivity."
const kalimbaDescription = "For as long as I can remember, I liked instruments. In my collection I have a cajon, hulusi but Kalimba is my best. It's an instrument of African origin. Sometimes I play simple tunes before sleep. Sound is very gentle and pleasant. Kalimba coil is wedded in birth and marriage rituals."
 const passion = "I have many interests, but my greatest and only passion is coding. I spend about 10 hours a day at the computer. Every day I discover tools that allow me to create a world. The amazing thing is that while encoding I can combine different media like movies, photos, music and transform them by scripts and algorithm."

export const TextFavouriteThings = () => {
    const initialStyles = {
      fontSize: 0.13,
      color: "black",
      font: OpenSans,
    };

    const textAuthor = {
        ...initialStyles,
        fontSize: 0.1,
        letterSpacing: 0.07,
    }
    const textKalimba = {
        ...initialStyles,
        fontSize: 0.1,
        letterSpacing: 0.07,
    }
    const title = {
        ...initialStyles,
        fontSize: 0.21
    }

    const textLaptop = {
        ...initialStyles,
        fontSize: 0.1,
        letterSpacing: 0.07,
    }
    const textPassion = {
        ...initialStyles,
        fontSize: 0.05,
        letterSpacing: 0.03,
        maxWidth: 0.8,
        textAlign: "justify"
    }
    const textTitle = {
        ...initialStyles,
        fontSize: 0.09,
        letterSpacing: 0.07,
    }
    const verticalTitle = {
        ...initialStyles,
        fontSize: 0.28,
        letterSpacing: 0.1
    }


    return (
    <group position={[-3.36, 1.3, -5]} rotation={[0, Math.PI / 2, 0]}>
        <group position={[2, 0, 0]}>
            <group position={[0.1, 0, 0]}>
                <Text {...title} text={"FAVOURITE"} position={[0.008, 0.76, 0]}/>
                <Text {...verticalTitle} text={"MY"} position={[-0.51, 0.69, 0]} rotation={[0, 0, -Math.PI /2]}/>
                <Text {...title} text={"THINGS"} position={[-0.1, 0.6, 0]}/>
            </group>

            <group position={[0, 0.14, 0]}>
                <group position={[-0.9, 0.28, 0 ]}>
                    <Text {...textLaptop} text={"Laptop"} position={[-0.28, 0, 0]}/>
                    <Text {...textPassion} text={passion} position={[-0.01, -0.37, 0]}/>
                </group>

                <group position={[0, 0.14, 0]}>
                    <Text {...textKalimba} text={"Kalimba"} position={[-0.26, 0, 0]}/>
                    <Text {...textPassion} text={kalimbaDescription} position={[-0.01, -0.32, 0]}/>
                </group>

                <group position={[0.9, 0, 0]}>
                    <Text {...textAuthor} text={"Markus Zusak,"} position={[-0.13, 0, 0]}/>
                    <Text {...textTitle} text={'"The Book Thief"'} position={[-0.13, -0.11, 0]}/>
                    <Text {...textPassion} text={plotOfTheBookThief} position={[-0.01, -0.45, 0]}/>
                </group>
            </group>




            

        </group>
    </group>);
  }