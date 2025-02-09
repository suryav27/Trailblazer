import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1C4FD', dark: '#A1C4FD' }}
      headerImage={
        <Image
          source={require('@/assets/images/party_6521522.png')}
          style={styles.headerImage}
        />
      }>
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
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Detailed Info</ThemedText>
        </ExternalLink>
      </Collapsible>
      </ThemedView>
      <ThemedView style={styles.CollapsibleContainer}>
      <Collapsible title={<ThemedText style={styles.titleCollapsible}> Devices Connected</ThemedText>}>
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      </ThemedView>
      <ThemedView style={styles.CollapsibleContainer}>
      <Collapsible title={<ThemedText style={styles.titleCollapsible}> Friends</ThemedText>}>
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      </ThemedView>
      <ThemedView style={styles.CollapsibleContainer}>
      <Collapsible title={<ThemedText style={styles.titleCollapsible}> Rewards</ThemedText>}>
      <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
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
