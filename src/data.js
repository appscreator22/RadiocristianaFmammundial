import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"Radio renacer",
            artist: "Radiorenacer",
            cover: "https://img.freepik.com/vector-gratis/fondo-abstracto-musical_1048-1579.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://player.livestation.stream/proxy/7056/stream/1/",
            active: true,
        },
        {
            name:"Nuevo Tiempo",
            artist: "Nuevotiempo",
            cover: "https://img.freepik.com/vector-gratis/aire-letrero-neon-marco_23-2148818542.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://stream.live.novotempo.com/radio/smil:radionuevotiempo.smil/media-us4k95vs4_b96000_slesp_56673.aac",
            active: false,
        },
        {
            name:"Nuevo tiempo",
            artist: "Nuevotiempo",
            cover: "https://img.freepik.com/vector-gratis/diseno-fondo-sonido-musica_24877-58886.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://n06.radiojar.com/aesy2chkb?rj-ttl=5&rj-tok=AAABg_feqrgA7T41P_KWhE8jBQ",
            active: false,
        },
        {
            name:"Radio juvenil",
            artist: "Radiojuvenil",
            cover: "https://img.freepik.com/vector-gratis/diseno-plano-vectorial-logotipo-microfono-editable-texto-grabacion-sonido_53876-116834.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://ssl.voxservidor.com:7222/stream/1/",
            active: false,
        },
        {
            name:"full adventista",
            artist: "fulladventista",
            cover: "https://img.freepik.com/vector-gratis/silueta-aparato-radio_23-2147501018.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://server2.ejeserver.com:8457/stream",
            active: false,
        },
        {
            name:"Sara Brasil",
            artist: "SaraBrasil",
            cover: "https://img.freepik.com/vector-gratis/dia-mundial-radio-diseno-plano_23-2148802732.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://hts07.kshost.com.br:13490/stream/1/",
            active: false,
        },
        {
            name:"Nuevo Tiempo",
            artist: "NuevoTiempo",
            cover: "https://img.freepik.com/foto-gratis/microfono-espuma-aislamiento-acustico_23-2148695273.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "http://s43.myradiostream.com:20344/;stream/1",
            active: false,
        },
        {
            name:"Premier Cristiana",
            artist: "PremierCristiana",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41312.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://audio-edge-es6pf.mia.g.radiomast.io/69203abc-1923-4c7a-bbd3-1e4d391a8cd9",
            active: false,
        },
        {
            name:"jesus is lord radio",
            artist: "jesusislordradio",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41309.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://s3.radio.co/s97f38db97/listen",
            active: false,
        },
    ];
}

export default chillHop;


