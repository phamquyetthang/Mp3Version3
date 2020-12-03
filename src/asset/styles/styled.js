import {StyleSheet} from 'react-native';
import {unitH} from './size';
// store
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151621',
  },
  playBox: {
    position: 'absolute',
    zIndex: 2222,
    width: '100%',
    bottom: 56 * unitH,
  },
  DashboardTextFeatured: {
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  DashboardFeatured: {
    paddingLeft: 20,
    // backgroundColor:"red",
    width: '100%',
    flex: 0.5,
  },
  DashboardImageFeatured: {
    width: 120,
    height: 120,
    marginRight: 8,
    marginTop: 16,
    borderRadius: 4,
  },
  DashboardToptracks: {
    width: '100%',
    flex: 0.7,
    // backgroundColor:"gray",
    marginLeft: 20,
  },
  DashboardImageToptracks: {
    width: 60,
    height: 60,
    marginTop: 8,
    borderRadius: 4,
    marginRight: 8,
  },
});
