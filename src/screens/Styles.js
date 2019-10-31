import { StyleSheet } from 'react-native'

const commonStyles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
    },
    postText: {
      paddingLeft: 10,
      width: 100,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start'
    }
  })

  export { commonStyles }