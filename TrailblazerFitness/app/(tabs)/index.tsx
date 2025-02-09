import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView 
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Image
        source={require('@/assets/images/mapwstuff.jpg')}
        style={styles.map} />
        } >
      <ThemedView style={styles.titleContainer}>
        <HelloWave />
        <ThemedText style={styles.titleText}>TRAILBLAZER FITNESS</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.topBoxContainer}></ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText style={{ color: 'rgba(34, 120, 34, 1)' }} type="subtitle">EASY</ThemedText>
          <ThemedText style={styles.bulletPoint}>◄ rodeo warm-up</ThemedText>
          <ThemedText style={styles.bulletPoint}>◄ lasso stretch</ThemedText>
          <ThemedText style={styles.bulletPoint}>◄ desert stroll</ThemedText>
      </ThemedView>
      <ThemedView style={styles.middleBoxContainer}></ThemedView>  
        <ThemedView style={styles.stepContainer}>
        <ThemedText style={{ color: 'rgba(34, 120, 34, 1)' }} type="subtitle">MEDIUM</ThemedText>
          <ThemedText style={styles.bulletPoint}>◄ pioneer pace</ThemedText>
          <ThemedText style={styles.bulletPoint}>◄ saddle up circuit</ThemedText>
          <ThemedText style={styles.bulletPoint}>◄ outlaw hustle</ThemedText>
      </ThemedView>
      <ThemedView style={styles.bottomBoxContainer}></ThemedView>  
        <ThemedView style={styles.stepContainer}>
        <ThemedText style={{ color: 'rgba(34, 120, 34, 1)' }} type="subtitle">HARD</ThemedText>
          <ThemedText style={styles.bulletPoint}>◄ bronco buster</ThemedText>
          <ThemedText style={styles.bulletPoint}>◄ stampede sprint</ThemedText>
          <ThemedText style={styles.bulletPoint}>◄ desert trek</ThemedText>
      </ThemedView>
      <Image
        source={require('@/assets/images/cowboy.png')}
        style={styles.cowboy} />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    //height: 2,
  },
  titleText: {
    fontFamily: 'Lobster',
    color: 'rgba(139, 69, 19, 0.5)',
    paddingTop: 15,    
    fontSize: 30,
    fontWeight: 'bold',
  },
  stepContainer: {
    gap: 4,
    marginBottom: 5,
    marginTop: 10,
    backgroundColor: 'rgba(204, 179, 130, 0.6)',
    height: 150,
    width: 200,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    left: '.75%',
    //backgroundColor: 'rgba(255, 179, 71, 0.4)',
  },
  bulletPoint: {
    fontSize: 18,
    color: 'rgba(139, 69, 19, 0.8)',
    marginBottom: 3,  
    marginLeft: 10,   
    fontWeight: 'normal',
  },
  map: {
    //flex: 1,
    height: 350,
    width: 400,
    top: 0,
    left: 0,
    //position: 'absolute',
    paddingBottom: 0,
    //zIndex: 0,
  },
  // map: {
  //   //flex: 1,
  //   height: 300,
  //   width: 400,
  //   bottom: 150,
  //   left: 0,
  //   position: 'absolute',
  //   zIndex: 0,
  // },
  rodeoRun: {
    height: 80,
    width: 80,
    bottom: 710,
    left: 100,
    position: 'absolute',
    zIndex: 1,
  },
  cowboy: {
    height: 460,
    width: 140,
    bottom: 100,
    left: 250,
    position: 'absolute',
    zIndex: 1,
  },
  cowboyCurls: {
    height: 90,
    width: 90,
    bottom: 600,
    left: 325,
    position: 'absolute',
    zIndex: 1,
  },
  topBoxContainer: {
    position: 'absolute',
    top: 75, // Adjust this to change vertical position
    left: '7.5%', // Adjust horizontal position
    width: '65%', // Box width set to 40%
    height: '30%',
    marginTop: 10,
    //down: '8%',
    padding: 75,
    backgroundColor: 'rgba(139, 69, 19, 0.8)', // Burnt orange color with transparency
    borderRadius: 15, // Rounded corners
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Android shadow
  },
  middleBoxContainer: {
    position: 'absolute',
    top: 75, // Adjust this to change vertical position
    left: '7.5%', // Adjust horizontal position
    width: '65%', // Box width set to 40%
    height: '30%',
    marginTop: 190,
    //down: '8%',
    padding: 75,
    backgroundColor: 'rgba(139, 69, 19, 0.8)', // Burnt orange color with transparency
    borderRadius: 15, // Rounded corners
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Android shadow
  },
  bottomBoxContainer: {
    position: 'absolute',
    top: 75, // Adjust this to change vertical position
    left: '7.5%', // Adjust horizontal position
    width: '65%', // Box width set to 40%
    height: '30%',
    marginTop: 370,
    //down: '8%',
    padding: 75,
    backgroundColor: 'rgba(139, 69, 19, 0.8)', // Burnt orange color with transparency
    borderRadius: 15, // Rounded corners
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Android shadow
  },
});
