import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const bg_home = require("../assets/backgrounds/bg_home.jpg");

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)

const SLIDER_WIDTHprox = Dimensions.get('window').width
const ITEM_WIDTHprox = Math.round(SLIDER_WIDTHprox * 0.35)

const data = [
    {
        title: "CINGAPURA",
        imgUrl: require("wintur/src/assets/places/cingapura.jpg"),
    },
    {
        title: "FRANÇA",
        imgUrl: require("wintur/src/assets/places/franca.jpg"),
    },
    {
        title: "GRÉCIA",
        imgUrl: require("wintur/src/assets/places/grecia.jpg"),
    },
    {
        title: "ITÁLIA",
        imgUrl: require("wintur/src/assets/places/italia.jpg"),
    },
    {
        title: "LENÇÓIS MARANHENSES",
        imgUrl: require("wintur/src/assets/places/lencois.jpg"),
    },
    {
        title: "LUXEMBRUGO",
        imgUrl: require("wintur/src/assets/places/luxemburgo.jpg"),
    },
    {
        title: "MÉXICO",
        imgUrl: require("wintur/src/assets/places/mexico.jpg"),
    },
    {
        title: "MOSCOU",
        imgUrl: require("wintur/src/assets/places/moscou.jpg"),
    },
    {
        title: "WHISTLER BLACKCOMB",
        imgUrl: require("wintur/src/assets/places/whistler.jpg"),
    }
];

const dataProfiles = [
    {
        title: "profile-0",
        imgUrl: require("wintur/src/assets/profiles/profile-0.png"),
    },
    {
        title: "profile-1",
        imgUrl: require("wintur/src/assets/profiles/profile-1.png"),
    },
    {
        title: "profile-2",
        imgUrl: require("wintur/src/assets/profiles/profile-2.png"),
    },
    {
        title: "profile-3",
        imgUrl: require("wintur/src/assets/profiles/profile-3.png"),
    },
    {
        title: "profile-4",
        imgUrl: require("wintur/src/assets/profiles/profile-4.png"),
    },
    {
        title: "profile-5",
        imgUrl: require("wintur/src/assets/profiles/profile-5.png"),
    }
];

const Home = ({ navigation }) => {

    function CarouselCardItem({ item, index } ){

        return (
            <View style={styles.bgItem}>
                <Image style={styles.imgCarousel} source={item.imgUrl}/>
                <Text style={styles.itemText}>{item.title}</Text>
            </View>
        )

    }
    
    function CarouselProxCardItem({ item, index } ){

        return (
            <View style={styles.bgItemProx}>
                <Image style={styles.imgProxCarousel} source={item.imgUrl}/>
            </View>
        )

    }

    const [indexProx, setIndexProx] = React.useState(0);
    const [index, setIndex] = React.useState(0);
    const isCarousel = React.useRef(null);

    return (
        <View style={styles.inicio}>
            
            <Image style={styles.img} source={bg_home} />
    
            <View style={styles.destaques}>
                <Text style={styles.textDestaques}>Destaques</Text>
                <Carousel
                    layout="default"
                    layoutCardOffset={9}
                    data={data}
                    ref={isCarousel}
                    renderItem={CarouselCardItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    onSnapToItem={(index) => setIndex(index)}
                    useScrollView={true}
                    activeSlideAlignment="start"
                />
                <Pagination
                    dotsLength={data.length}
                    activeDotIndex={index}
                    carouselRef={isCarousel}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: -5,
                        backgroundColor: "#6D00FF"
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    tappableDots={true}
                />
            </View>

            <View style={styles.proximos}>
                <Text style={styles.textDestaques}>Próximos a você</Text>

                <Carousel
                    layout="default"
                    layoutCardOffset={9}
                    data={dataProfiles}
                    renderItem={CarouselProxCardItem}
                    sliderWidth={SLIDER_WIDTHprox}
                    itemWidth={ITEM_WIDTHprox}
                    onSnapToItem={(index) => setIndexProx(index)}
                    useScrollView={true}
                    activeSlideAlignment="start"
                />

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    inicio: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
    },
    img: {
        position: "absolute",
        left: 0,
        top: 0
    },
    imgCarousel: {
        position: "absolute",
        left: 0,
        top: 0,
        borderRadius: 42,
        width: 310,
        height: 278
    },
    bgItem: {
        display: "flex",
        justifyContent: "flex-end",
        height: 258,
        paddingLeft: 35,
    },
    itemText: {
        color: "#ffffff",
        fontWeight: "400",
        fontSize: 20,
    },
    destaques: {
        width: "100%",
        height: "59%",
    },
    textDestaques: {
        color: "#ffffff",
        fontWeight: "400",
        fontSize: 28,
        marginLeft: 30
    },
    proximos: {
        width: "100%",
        paddingTop: 15
    },
    bgItemProx: {
        display: "flex",
        alignItems: "center",
        paddingTop: 30,
        paddingLeft: 15
    },
    imgProxCarousel: {
        width: 120,
        height: 120
    }
})

export default Home;
