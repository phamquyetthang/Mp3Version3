import {StyleSheet} from 'react-native';

export const stylescreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151621',
    color: '#fff',
  },
  DashboardHeader: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  DashboardTextFeatured: {
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginTop: 16,
  },
  DashboardFeatured: {
    paddingLeft: 20,
    // backgroundColor:"red",
    width: '100%',
    flex: 0.3,
  },
  DashboardImageFeatured: {
    width: 120,
    height: 120,
    marginRight: 8,
    marginTop: 16,
    borderRadius: 4,
  },
  DashboardToptracks: {
    // width: '100%',
    marginTop: 16,
    flex: 0.9,
    // backgroundColor:"gray",
    // marginLeft: 20,
  },
  DashboardImageToptracks: {
    width: 60,
    height: 60,
    marginTop: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  searchSet: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
    // marginRight: -8,
  },
});
