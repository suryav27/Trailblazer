import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.parallaxContainer}>
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1C4FD', dark: '#A1C4FD' }}
      headerImage={
        <Image
          source={require('@/assets/images/party_6521522.png')}
          style={styles.headerImage}
        />
      }
      >
      <ThemedView style={styles.titleContainer}>
          <ThemedText style={styles.titleColor}>My Profile</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
      <ThemedText style={styles.titleSubText}> Howdy, Partner!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
      <ThemedText style={styles.titleSubberText}> Ready to Wrangle Up Some Challenges!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.CollapsibleContainer}>
      <Collapsible title={<ThemedText style={styles.titleCollapsible}> Past Challenges</ThemedText>}>
      
        <ThemedText style={styles.Inside}>
          - Rodeo Run                              2/8/2025
          </ThemedText>
          <ThemedText style={styles.Inside}>
          - Cowboy Curls                       1/29/2025
        </ThemedText>
        <ThemedText style={styles.Inside}>
          - Wrangler Weights                 1/20/2025
          </ThemedText>
          <ThemedText style={styles.Inside}>
          - Cowboy Curls                        1/13/2025
        </ThemedText>
        <ThemedText style={styles.Inside}>
          - Snake-N-Boot Swimming    1/07/2025
        </ThemedText>
          <ThemedText type="link">More...</ThemedText>
      </Collapsible>
      </ThemedView>
      <ThemedView style={styles.CollapsibleContainer}>
      <Collapsible title={<ThemedText style={styles.titleCollapsible}> Devices Connected</ThemedText>}>
      <ThemedText style={styles.Inside}>
          - Apple Watch Series 10
        </ThemedText>
        <ThemedText style={styles.Inside}>
          - iPhone 15
        </ThemedText>
        <ThemedText type="link">Connect Device</ThemedText>
      </Collapsible>
      </ThemedView>
      <ThemedView style={styles.CollapsibleContainer}>
      <Collapsible title={<ThemedText style={styles.titleCollapsible}> Friends</ThemedText>}>
        <ThemedText style={styles.Inside}>
          3 Friends 
        </ThemedText>
        <ThemedText style={styles.Inside}>
          Online: 0 Friends
        </ThemedText>
          <ThemedText type="link">View Photos</ThemedText>
      </Collapsible>
      </ThemedView>
      <ThemedView style={styles.CollapsibleContainer}>
      <Collapsible title={<ThemedText style={styles.titleCollapsible}> Rewards</ThemedText>}>
      <ThemedText style={styles.Inside}>
      🏆 The Iron Horseshoe
        </ThemedText>
        <ThemedText style={styles.Inside}>
      🏆 Outlaw's Victory 
        </ThemedText>
        <ThemedText style={styles.Inside}>
      🏆 Lasso Legend
        </ThemedText>
        <ThemedText style={styles.Inside}>
      🏆 Golden Spur
        </ThemedText>
          <ThemedText type="link">More...</ThemedText>
      </Collapsible>
      </ThemedView>
    </ParallaxScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  parallaxContainer:{
    backgroundColor: '#F5F5DC',
    flex: 1
  },
  headerImage: {
    color: '#A1C4FD',
    bottom: -15,
    left: 85,
    height: 225,
    width: 225,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8
  },
  titleColor: {
    fontFamily: 'Baloo',  
    color: '#FFB347',
    paddingTop: 15,    
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: 2
  },
  titleSubText: {
    fontFamily: 'Baloo',  
    color: '#D16D01',  
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleSubberText: {
    fontFamily: 'Baloo',  
    color: '#D16D01',  
    fontSize: 15,
    fontWeight: 'bold',
  },
  titleCollapsible: {
    fontFamily: 'Baloo',  
    color: '#FFB347',   
    fontSize: 26,
    fontWeight: 'bold',

  },
  CollapsibleContainer: {
    flexDirection: 'row',
    gap: 8,
    paddingTop: 30, 
  },
  Inside: {
    fontFamily: 'Baloo',  
    color: '#A1C4FD',   
    fontSize: 15,
    fontWeight: 'bold',
  },
});
