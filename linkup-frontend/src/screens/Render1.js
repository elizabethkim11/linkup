import { Image, Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Render1 = () => {
    // const [isEnabled, setIsEnabled] = useState(true);
    return (
<SafeAreaView style={styles.root}>
        <Text>"Hello Im here "</Text>
        <View style={styles.container}>
          <Text style={{fontWeight: 'bold', fontSize: 30, color: '#2F4961'}}>
            Potential Jobs
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: '#2F4961'}}> 
            {"\n"}Only show companies{"\n"}that have swiped right:
          </Text>
          <View style={styles.companies}>
            {currCompanies.map(company => (
              <View style={styles.company} key={company.Name}>
                <Image source={{uri: company.Company}} style={styles.logo} />
              </View>
            ))}
          </View>
        </View>
          
        <View style={styles.pageContainer}>
            <View>
                <Pressable onPress={handleNotifs} style={styles.nav_button1}>
                    <Text style={{fontWeight: 'bold'}}>Notifications</Text>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={handleCandidate} style={styles.nav_button2}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>My Profile</Text>
                </Pressable>
            </View>
            </View>
      </SafeAreaView>
    )
            }

export default Render1;